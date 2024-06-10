# # 必要モジュールのインポート
# from dotenv import load_dotenv

# # .envファイルの内容を読み込見込む
# load_dotenv()

from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware # 追加

app = FastAPI()
# # CORSを回避するために追加
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,   
#     allow_methods=["*"],      
#     allow_headers=["*"]       
# )
import json
import pickle
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings,ChatOpenAI
index_name = "test-index"
embeddings = OpenAIEmbeddings()
from langchain_core.prompts import ChatPromptTemplate
import tiktoken
from fastapi.responses import StreamingResponse
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from pydantic import BaseModel
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
contextualize_q_system_prompt = """
You are a sub-assistant who answers questions of website visitors.
Given the user and assistant's conversation history and new user questions,
You generate queries for contextual searches within the website that the assistant uses to generate answers to the user.
Think about what information you need to answer the user's question and generate a query.
The query should include the content of the user's question, plus at least two sentences guessing the content of the page where the answer is likely to be found.
Generate only queries, do not write any other context.
If the user's question can be answered without referring to the website, simply write “null"
"""
contextualize_q_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", contextualize_q_system_prompt),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{question}"),
    ]
)
contextualize_q_chain = (contextualize_q_prompt | llm | StrOutputParser()).with_config(
    tags=["contextualize_q_chain"]
)

template = """
        INSTRUCTIONS:
        You are the assistant who answers the questions of the visitors to the website.
        Answer the users QUESTION using the CONTEXT from the websute text above.
        Keep your answer ground in the facts of the CONTEXT.

        CONTEXT:
        {context}
        """
qa_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", template),
        MessagesPlaceholder(variable_name="chat_history"),
        ("human", "{question}"),
    ]
)

from leapcell import Leapcell
import os
# Initialize client with the token
# Get API token from env
api_token = os.environ.get("LEAPCELL_API_KEY")
leapclient = Leapcell(api_token)
table = leapclient.table("morimori/asktoweb", "tbl1800066439163408384")

def save_chat_history(chat_history, session_id):
    # # Save the chat history to a json file
    # with open(f"chat_history_{session_id}.pkl", 'wb') as file:
    #     pickle.dump(chat_history, file)
    # print("chat history saved")
    # print(str(chat_history))
    records = table.select().where(table["sesstionId"] == session_id).limit(1)
    if len(records)==0:
        records = [table.create({"sesstionId": session_id})]
    #data=pickle.dump(chat_history)
    data="testtest"
    records[0]["chat_history"]= data
    records[0].save()

def load_chat_history(session_id):
    # # Load the chat history from a json file
    # # If the file does not exist, create an empty list
    # try:
    #     with open(f"chat_history_{session_id}.pkl", 'rb') as file:
    #         chat_history = pickle.load(file)
    # except FileNotFoundError:
    #     chat_history = []
    # print("chat history loaded")
    # print(chat_history)
    # return chat_history
    records = table.select().where(table["sesstionId"] == session_id).limit(1)
    if len(records)==0:
        return []
    else:
        #return pickle.load(records[0]["chat_history"])
        return []

def printme(input):
    print(input)
    return input

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

tokenizer = tiktoken.encoding_for_model("gpt-3.5-turbo")



async def Askme(query,chat_history,website,sesstionId):
    ct = 0
    output = {}
    vectorstore = PineconeVectorStore(index_name=index_name, embedding=embeddings, namespace=website)
    retriever = vectorstore.as_retriever(search_type="similarity_score_threshold", search_kwargs={"score_threshold": 0.85,"k":2})
    rag_chain = (
    RunnablePassthrough.assign(context=contextualize_q_chain | retriever | format_docs)
     | qa_prompt
     | llm
    )
    async for jsonpatch_op in rag_chain.astream_log(
        {"question": query, "chat_history": chat_history},
        include_names=["Retriever"],
        with_streamed_output_list=False,
    ):  
        if jsonpatch_op.ops[0]["path"] == "/final_output":
            output = jsonpatch_op.ops[0]["value"]
            print(output.content, flush=True)
            result_dict = {"type":"text","value":output.content}
            yield f"data: {json.dumps(result_dict)}\n\n"
            # {"type":"text","value":"~"}
        if jsonpatch_op.ops[0]["path"] == "/logs/Retriever/final_output":
            print("\n" + "-" * 30 + "\n")
            print("Used documents:")
            print(jsonpatch_op.ops[0]["value"])
            documents = [{"page_content": doc.page_content, "metadata": doc.metadata} for doc in jsonpatch_op.ops[0]["value"]["documents"]]
            if len(documents) == 0:
                references = ""
            else:
                references = "参照リンク<br>"
                for doc in documents:
                    references += f'<a href="{doc["metadata"]["source"]}" target="_blank">{doc["metadata"]["title"]}</a>'
            result_dict={"type":"documents","value":references}
            yield f"data: {json.dumps(result_dict)}\n\n"
            # {"type":"documents","value":[{"page_content":"~~","metadata":{"discription":"~","title":"~","source":"https://~"}}]}
    if references=="":
        chat_history.extend([HumanMessage(content=query), output])
    else:
        chat_history.extend([HumanMessage(content=query), output,AIMessage(content=references)])
    while len(tokenizer.encode(str(chat_history)))>1000:
            chat_history.pop(0)
    save_chat_history(chat_history, sesstionId)
    result_dict={"type":"history","value":sesstionId}
    yield f"data: {json.dumps(result_dict)}\n\n"
    yield "data: {\"end\": true}\n\n"

@app.get("/")
def read_root():
    return {"Hello": "World"}

class StreamRequest(BaseModel):
    """Request body for streaming."""
    question: str
    sesstionId: str
    website: str

@app.post("/stream")
def stream(body: StreamRequest):
    query = body.question
    sesstionId = body.sesstionId
    website=body.website
    chat_history = load_chat_history(sesstionId)
    return StreamingResponse(Askme(query,chat_history,website,sesstionId), media_type="text/event-stream")

@app.post("/gethistory")
def gethistory(sesstionId: str):
    chat_history = load_chat_history(sesstionId)
    return {"chat_history": chat_history}

@app.post("/resethistory")
def resethistory(sesstionId: str):
    chat_history = []
    save_chat_history(chat_history, sesstionId)
    return {"chat_history": chat_history}

if __name__ == "__main__":
    uvicorn.run(app)
