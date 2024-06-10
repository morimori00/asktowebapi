

from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware # 追加

app = FastAPI()
# CORSミドルウェアの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # すべてのオリジンを許可（開発環境でのみ推奨）
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
import json
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings,ChatOpenAI
index_name = "index"
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

from supabase import Client, create_client
import os
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
database=supabase.table("chat_history")

#chat_history <-> [{"type":"human","content":"~"},{"type":"ai","content":"~"},{"type":"ai","content":"~"}"]
def chat_history_decode(chat_history_list):
    chat_history = []
    for chat in chat_history_list:
        if chat["type"]=="human":
            chat_history.append(HumanMessage(content=chat["content"]))
        else:
            chat_history.append(AIMessage(content=chat["content"]))
    return chat_history

def save_chat_history(chat_history_list, session_id):
    jsondata=json.dumps(chat_history_list)
    # Save the chat history to a json file
    database.upsert({"id":session_id,"content":jsondata}).execute()

def load_chat_history(session_id):
    # Load the chat history from a json file
    data=database.select("*").eq("id",session_id).execute()
    if len(data.data)==0:
        return []
    jsondata = data.data[0]["content"]
    return json.loads(jsondata)

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
        {"question": query, "chat_history": chat_history_decode(chat_history)},
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
                references = "参照リンク<ol>"
                referenced_links=[]
                for doc in documents:
                    if doc["metadata"]["source"] in referenced_links:
                        continue
                    referenced_links.append(doc["metadata"]["source"])
                    references += f'<li><a href="{doc["metadata"]["source"]}" target="_blank">{doc["metadata"]["title"]}</a></li>'
                references += "</ol>"
            result_dict={"type":"documents","value":references}
            yield f"data: {json.dumps(result_dict)}\n\n"
            # {"type":"documents","value":[{"page_content":"~~","metadata":{"discription":"~","title":"~","source":"https://~"}}]}
    if references=="":
        chat_history.extend([{"type":"human","content":query},{"type":"ai","content":output.content}])
    else:
        chat_history.extend([{"type":"human","content":query}, {"type":"ai","content":output.content}, {"type":"ai","content":references}])
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
    uvicorn.run(app, host='0.0.0.0', port=8000)
