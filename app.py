# 必要モジュールのインポート
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv(override=True)

from fastapi import FastAPI
import uvicorn
from starlette.middleware.cors import CORSMiddleware # 追加
from fastapi.staticfiles import StaticFiles

#app = FastAPI()
app = FastAPI(docs_url=None, redoc_url=None, openapi_url=None)
app.mount("/static", StaticFiles(directory="static"), name="static")
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
import os
index_name = os.environ.get("PINECONE_INDEX")
print(index_name)
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
The query should include the content of the user's question, plus at least three sentences guessing the content of the page where the answer is likely to be found.
Generate only queries, do not write any other context.
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

verify_system_prompt = """
You are a verifier who does not tolerate rigid and ambiguous answers.
Given the ai assistant's answer, check for consistency with the context below.
If you find information in the assistant's answer that is not included in the context, you must remove it and generate a new, accurate answer.
After verifying, generate "null"

CONTEXT:
{context}
"""
verify_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", verify_system_prompt),
        ("human", "{answer}"),
    ]
)
verify_a_chain = (verify_prompt | llm | StrOutputParser()).with_config(tags=["verify_chain"])

# template = """
#         INSTRUCTIONS:
#         You are the assistant who answers the questions of the visitors to the website.
#         Answer the users QUESTION using the CONTEXT from the websute text above.
#         Keep your answer ground in the facts of the CONTEXT. Do not provide any information that is not supported by the CONTEXT.
        
#         NOTE:
#         The context provided is only part of the page of the website searched, and the information the user is seeking may be found elsewhere on the page.

#         CONTEXT:
#         {context}
#         """
template="""
INSTRUCTIONS:
You are the assistant who answers the questions of the website visitors.
Please tell the user the page and the part that contains the answer to the user's question.


To indicate the referenced link, please write the source number in your response like this.
[1] or [2] ... etc.

If sufficient information is not included in the context, please use the examples below to answer the question.
*That information may not appear on this website. Please check the following highly relevant pages.*

NOTE:
The context provided is only part of the page of the website searched, and the information the user is seeking may be found elsewhere on the page.
Answer in the same language as the user's question text.

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
        elif chat["type"]=="ai":
            chat_history.append(AIMessage(content=chat["content"]))
        elif chat["type"]=="references":
            chat_history.append(AIMessage(content="Here are some references: "+chat["content"]))
        
    return chat_history

def resize_chat_history(chat_history):
    while len(tokenizer.encode(str(chat_history)))>1000:
            chat_history.pop(0)
    return chat_history

def save_chat_history(chat_history_list, session_id):
    jsondata=json.dumps(chat_history_list)
    # Save the chat history to a json file
    database.upsert({"id":session_id,"content":jsondata}).execute()

def load_chat_history(session_id):
    # Load the chat history from a json file
    data=database.select("*").eq("id",session_id).execute()
    if len(data.data)==0:
        return [[],""]
    jsondata = data.data[0]["content"]
    date=data.data[0]["created_at"]
    return [json.loads(jsondata) , date]

def printme(input):
    print(input)
    return input

def format_docs(docs):
    if docs == []:
        return "This user's question is one that does not require context for an answer."
    res=""
    for i in range(len(docs)):
        res+="Source "+ str(i+1) +" ("+docs[i].metadata["source"]+")\n"
        res+=docs[i].metadata["title"]+"\n"
        res+=docs[i].page_content
        res+="\n\n"
    return res
def format_docs_light(docs):
    if docs == []:
        return "This user's question is one that does not require context for an answer."
    res=""
    for i in range(len(docs)):
        res+="Source "+ str(i+1) +" ("+docs[i].metadata["source"]+")\n"
        res+=docs[i].page_content
        res+="\n\n"
    return res
tokenizer = tiktoken.encoding_for_model("gpt-3.5-turbo")
async def Askme(query,chat_history,website,sesstionId):
    ct = 0
    output = {}
    vectorstore = PineconeVectorStore(index_name=index_name, embedding=embeddings, namespace=website)
    retriever = vectorstore.as_retriever(search_type="similarity_score_threshold", search_kwargs={"score_threshold": 0.85,"k":5})
    def wrapedretriever(query):
        if(query=="null"):
            print("No reference needed")
            return []
        return retriever.invoke(query)
    #wrap the retriver.
    rag_chain = (
    RunnablePassthrough.assign(context=contextualize_q_chain | printme | wrapedretriever | format_docs)
     | qa_prompt
     | llm
    )
    context=""
    async for jsonpatch_op in rag_chain.astream_log(
        {"question": query, "chat_history": resize_chat_history(chat_history_decode(chat_history))},
        include_names=["wrapedretriever"],
        with_streamed_output_list=False,
    ):  
        print(jsonpatch_op.ops[0])
        if jsonpatch_op.ops[0]["path"] == "/final_output":
            response_metadata = getattr(jsonpatch_op.ops[0]['value'], 'response_metadata', None)
            if response_metadata and response_metadata.get('finish_reason') == 'stop':
                    yield "data: {\"preend\": true}\n\n"
            output = jsonpatch_op.ops[0]["value"]
            #print(output.content, flush=True)
            result_dict = {"type":"text","value":output.content}
            yield f"data: {json.dumps(result_dict)}\n\n"
            # {"type":"text","value":"~"}
        if jsonpatch_op.ops[0]["path"] == "/logs/wrapedretriever/streamed_output/-":
            print("\n" + "-" * 30 + "\n")
            print("Used documents:")
            print(jsonpatch_op.ops[0]["value"])
            context = jsonpatch_op.ops[0]["value"]
            if jsonpatch_op.ops[0]["value"]==[]:
                referenced_links=[]
            else:
                documents = [{"page_content": doc.page_content, "metadata": doc.metadata} for doc in jsonpatch_op.ops[0]["value"]]
                referenced_links=[]
                if len(documents) != 0:
                    for doc in documents:
                        if doc["metadata"]["source"] in referenced_links:
                            continue
                        # referenced_links.append(doc["metadata"]["source"])
                        #reference = f'<a href="{doc["metadata"]["source"]}" target="_blank">{doc["metadata"]["title"]}</a>'
                        reference_data={"title":doc["metadata"]["title"],"source":doc["metadata"]["source"],"discription":doc["page_content"][:50]}
                        result_dict={"type":"documents","value":reference_data}
                        referenced_links.append(json.dumps(reference_data))
                        yield f"data: {json.dumps(result_dict)}\n\n"
                # {"type":"documents","value":[{"page_content":"~~","metadata":{"discription":"~","title":"~","source":"https://~"}}]}
    if len(referenced_links)==0:
        chat_history.extend([{"type":"human","content":query},{"type":"ai","content":output.content}])
    else:
        chat_history.extend([{"type":"human","content":query}, {"type":"ai","content":output.content}, {"type":"references","content":"$".join(referenced_links)}])
        #chat_history.extend([{"type":"human","content":query},{"type":"ai","content":output.content}])
    #then, verify the answer
    if len(context)==0:
        verify_result= verify_a_chain.invoke({"answer":output.content,"context":"null\n\n There is no context for this conversation. If the assistant's response makes up a fact, please rewrite it."})
        verify_result_dict={"type":"verify","value":verify_result}
        print("verify_result:"+verify_result)
        yield f"data: {json.dumps(verify_result_dict)}\n\n"
    else:
        verify_result= verify_a_chain.invoke({"answer":output.content,"context":format_docs_light(context)})
        verify_result_dict={"type":"verify","value":verify_result}
        print("verify_result:"+verify_result)
        yield f"data: {json.dumps(verify_result_dict)}\n\n"
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

async def say_error(message):
    res={"type":"text","value":message}
    yield f"data: {json.dumps(res)}\n\n"
    yield "data: {\"end\": true}\n\n"

@app.post("/stream")
def stream(body: StreamRequest):
    query = body.question
    if len(query)<3 or len(query)>1000:
        say_error("Please enter a question between 3 and 1000 characters.")
        return 
    sesstionId = body.sesstionId
    website=body.website
    chat_history = load_chat_history(sesstionId)[0]
    return StreamingResponse(Askme(query,chat_history,website,sesstionId), media_type="text/event-stream")

@app.post("/gethistory")
def gethistory(sesstionId: str):
    chat_history  = load_chat_history(sesstionId)
    return {"chat_history": chat_history[0], "date": chat_history[1]}

@app.post("/resethistory")
def resethistory(sesstionId: str):
    chat_history= load_chat_history(sesstionId)[0]
    if chat_history==[]:
        return {"chat_history": []}
    chat_history = []
    save_chat_history(chat_history, sesstionId)
    return {"chat_history": chat_history}

if __name__ == "__main__":
    uvicorn.run(app)
