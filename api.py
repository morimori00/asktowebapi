# 必要モジュールのインポート
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv(override=True)

from fastapi import FastAPI, HTTPException,Response
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
from langchain_anthropic import ChatAnthropic
# llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
MODEL_NAME="claude-3-haiku-20240307"
llm= ChatAnthropic(model=MODEL_NAME, temperature=0)
llm2 = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
MAX_REFERENCE=10
# llm = ChatOpenAI(model="gpt-4o", temperature=0)
# MAX_REFERENCE = 10
contextualize_q_system_prompt = """
You are a sub-assistant who answers questions of website visitors.
Given the user and assistant's conversation history and new user questions,
When user input is a greeting or thank you, Generate "It's greeting" or "It's thanks".
From the conversation history (optional) and the user's new question, create a supplementary text explaining what the user wants to ask.

##Example
1: User: "Is it free?"
Explanation: The user is inquiring if there are any charges associated with the service or product being offered. They want to know if they can access it without having to pay any fees or make any purchases.It is related to the pricing plan page and the features page.

##Example2
User: "Tell me one feature of this product."
Assistant: "The product has a feature that allows you to customize the interface."
User: "Tell me another"
Explanation: The user is asking for more information about the product's features. They are interested in learning about the different functionalities that the product offers. It is related to the product features and options page

##important
Generate only explanation of user's question, do not write any other context.
"""
contextualize_q_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", contextualize_q_system_prompt),
        ("human", "{string_chat_history} \n User:{question} \n\nExplanation:"),
    ]
)
contextualize_q_chain = (contextualize_q_prompt | llm | StrOutputParser()).with_config(
    tags=["contextualize_q_chain"]
)

verify_system_prompt = """
You are a strict verifier.
Your task is to verify the accuracy of the search AI's answers using the given context.
You will be provided with the search AI's answer. 
1. If the answer is included in the context, write "ok."
2. If the answer is not included in the context, rewrite the answer.
The search AI's answers must not be vague and should not contain any unsupported assumptions or guesses.
Always rewrite the answer in the same language as the search AI's original answer.
Retain any reference page numbers (e.g., (1), (2)) in the original answer.

Context:
{context}
"""
verify_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", verify_system_prompt),
        ("human", "{answer}"),
    ]
)
verify_a_chain = (verify_prompt | llm2 | StrOutputParser()).with_config(tags=["verify_chain"])
verify_2_system_prompt = """
あなたは厳格な検証者です。
検索AIが生成した、ユーザーへの回答が与えられます。
検索AIの回答の中に、医学または法律に関する専門用語が含まれている場合は、ユーザーに医学的または法的アドバイスを提供できないと伝えてください。
医学的または法的アドバイスが含まれていない場合は、"ok"を書いてください。
"""
verify_2_prompt= ChatPromptTemplate.from_messages(
    [
        ("system", verify_2_system_prompt),
        ("human", "{answer}"),
    ]
)
verify_2_chain = (verify_2_prompt | llm2 | StrOutputParser()).with_config(tags=["verify_2_chain"])

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
To indicate the referenced link, please mention the source number in your response like this.
(1) or (2) or (3) ... etc.
Ex: The product has a feature that allows you to customize the interface.(1) If you need to contact support, you can do so by visiting the contact page (2).

If sufficient information is not included in the context, please use the examples below to answer the question.
That information may not appear on this website. Please check the following highly relevant pages, or visit [Support] 
NOTE:
The context provided is only part of the page of the website searched, and the information the user is seeking may be found elsewhere on the page.
You cannot answer legal or medical questions.
Answer in the same language as the user's question text.
CONTEXT:
{context}
"""
# template="""
# INSTRUCTIONS:
# You are the assistant for the website visitors.
# Please tell the user the page and the part that contains the answer to the user's question.
# To indicate the referenced link, please write the source number in your response like this.
# (1) or (2) ... etc.
# Keep your answers short and concise, and limit them to 100 letters.
# Always base your answers on context, don't make up facts! If you don't know the answer, say like "I couldn't find the information on the website."
# If the question is about legal or medical matters, answer, "I cannot answer that question."
# Don't Mention other services.
# Answer in the same language as the user's question text.

# ANSWER EXAMPLE:
# 1. The pricing plans for the service are listed on the features page (1). Please check the page for details.
# 2. The product's features are listed on the features page (1). Please check the page for details.
# 3. If you want to send a message to the support team, you can do so by visiting the contact page (3).

# CONTEXT:
# {context}
# """

# template="""
# You are a search bot.
# Your job is to find the answer to the user's question in the following *CONTEXT*.
# Instead of answering the user's question, you tell the user where to find the information they need, as in the example below.
# To indicate the referenced link, please write the source number in your response like this.
# (1) or (2) ... etc.
# The link to contact support should appear as follows [Support].

# If the answer to the user's question does not exist in the context, provide the most relevant part of the context.

# ANSWER EXAMPLE:
# 1. The answer to your question could not be found, but we did find several pages that may be relevant. (1)(2)(3) If your question is not resolved after reviewing these pages, we suggest you contact support [Support].
# 2. If you want to send a message to the support team, you can do so by visiting the contact page (3).
# 3. The pricing plans for the service are listed on the features page (1).You can use this service for free or upgrade to a paid plan. Please check the page for details.
# 4. The product's features are listed on the features page (1).Its main features are easy to use and customizable. Please check the page for details.

# NOTE:
# If the question is about legal or medical matters, answer, "I cannot mention that question from legal reasons."
# Provide context in the same language as the user's question text.

# CONTEXT:
# {context}
# """
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
        # elif chat["type"]=="references":
        #     chat_history.append(AIMessage(content="Here are some references: "+chat["content"]))
        
    return chat_history

def chat_history_encode(chat_history):
    chat_history_list = ""
    for chat in chat_history:
        if isinstance(chat, HumanMessage):
            chat_history_list+="User:"+chat.content+"\n"
        elif isinstance(chat, AIMessage):
            chat_history_list+="Assistant:"+chat.content+"\n"
    return chat_history_list

def resize_chat_history(chat_history):
    while len(tokenizer.encode(str(chat_history)))>500:
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

tokenizer = tiktoken.encoding_for_model("gpt-3.5-turbo")
import re

def extractNumbers(string):
  # Use regular expressions to extract numbers surrounded by []
  numbers = re.findall(r'\[(.*?)\]', string)
  # Store extracted numbers in an array
  return numbers

def format_docs(docs):
    if docs == []:
        return "This user's question is one that does not require context for an answer."
    res=""
    for i in range(len(docs)):
        res+="\n=====================\nSource "+ str(i+1) +" ("+docs[i].metadata["source"]+")\n"
        res+=docs[i].metadata["title"]+"\n"
        res+=docs[i].page_content
        res+="\n\n"
    return res
def format_docs_light(docs,mentioned_links):
    if docs == [] or mentioned_links==[]:
        return "This user's question is one that does not require context for an answer."
    res=""
    for i in range(len(docs)):
        if str(i+1) in mentioned_links:
            res+="Source "+ str(i+1) +" ("+docs[i].metadata["source"]+")\n"
            res+=docs[i].metadata["title"]+"\n"
            res+=docs[i].page_content
            res+="\n\n"
    return res

#Max lengh =>4000
#system prompt => 150
#question max => 500
#history=> 500
#context max <= 2750
#context per doc => 500
# max doc => 5
from langchain.retrievers.contextual_compression import ContextualCompressionRetriever
from langchain_cohere import CohereRerank
manyOK=["ok","OK","Ok","ok.","OK.","Ok.","ok!","OK!","Ok!","ok?","OK?","Ok?","ok!","OK!","Ok!"]
async def Askme(query,chat_history,website,sesstionId):
    output = {}
    vectorstore = PineconeVectorStore(index_name=index_name, embedding=embeddings, namespace=website)
    retriever = vectorstore.as_retriever(search_type="similarity_score_threshold", search_kwargs={"score_threshold": 0.7,"k":20})
    compression_retriever = ContextualCompressionRetriever(
    base_compressor=CohereRerank(top_n=MAX_REFERENCE),  # Rerankで3個取得
    base_retriever=retriever
    )
    def wrapedretriever(query):
        if "It's greeting" in query or "It's thanks" in query:
            print("No reference needed")
            return []
        return compression_retriever.invoke(query)
    #wrap the retriver.
    rag_chain = (
    RunnablePassthrough.assign(context=contextualize_q_chain|printme | wrapedretriever | format_docs | printme)
     | qa_prompt
     | llm
    )
    context=""
    chat_history_data=resize_chat_history(chat_history_decode(chat_history))
    async for jsonpatch_op in rag_chain.astream_log(
        {"question": query, "chat_history":chat_history_data ,"string_chat_history":chat_history_encode(chat_history_data)},
        include_names=["wrapedretriever"],
        with_streamed_output_list=False,
    ):  
        # print(jsonpatch_op.ops[0])
        if jsonpatch_op.ops[0]["path"] == "/final_output":
            response_metadata = getattr(jsonpatch_op.ops[0]['value'], 'response_metadata', None)
            # if response_metadata and response_metadata.get('finish_reason') == 'stop':
            #         yield "data: {\"preend\": true}\n\n"
            output = jsonpatch_op.ops[0]["value"]
            #print(output.content, flush=True)
            result_dict = {"type":"text","value":output.content}
            yield f"data: {json.dumps(result_dict)}\n\n"
            # {"type":"text","value":"~"}
        if jsonpatch_op.ops[0]["path"] == "/logs/wrapedretriever/streamed_output/-":
            print("\n" + "-" * 30 + "\n")
            # print(jsonpatch_op.ops[0]["value"])
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
        #chat_history.extend([{"type":"human","content":query},{"type":"ai","content":output.content}])
    #then, verify the answer    
    yield "data: {\"preend\": true}\n\n"
    assistant_answer=output.content
    verify_final_result="ok"
    mentioned_links=extractNumbers(assistant_answer)
    if len(context)==0:
        # verify_result= verify_a_chain.invoke({"answer":output.content,"context":"null\n\n There is no context for this conversation. If the assistant's response makes up a fact, please rewrite it."})
        verify_result="ok"
    else:
        verify_result= verify_a_chain.invoke({"answer":output.content,"context":format_docs(context)})
    print("verify_first_result:"+verify_result)
    if verify_result in manyOK:
        assistant_answer=output.content
        verify_result_2= verify_2_chain.invoke({"answer":output.content})
    else:
        assistant_answer=verify_result
        verify_final_result=verify_result
        verify_result_2= verify_2_chain.invoke({"answer":verify_result})
    if verify_result_2 in manyOK:
        verify_result_2="ok"
        print("legal and medical check passed")
    else:
        verify_final_result=verify_result_2
        assistant_answer=verify_result_2
    verify_result_dict={"type":"verify","value":verify_final_result}
    print("verify_final_result:"+verify_final_result)
    # print("##### Total Cost ######\n"+str(cb))
    yield f"data: {json.dumps(verify_result_dict)}\n\n"
    if len(referenced_links)==0:
        chat_history.extend([{"type":"human","content":query},{"type":"ai","content":assistant_answer}])
    else:
        chat_history.extend([{"type":"human","content":query}, {"type":"ai","content":assistant_answer}, {"type":"references","content":"$".join(referenced_links)}])
    save_chat_history(chat_history, sesstionId)
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

##ハイライトページの作成
import requests
from html import escape
from urllib.parse import urljoin
def fix_relative_paths(html_content, base_url):
    """
    HTML内の相対パスを絶対パスに変換します
    """
    # リンクタグを修正
    html_content = re.sub(r'(<(?:link|script|img)[^>]+(?:href|src)=")([^:"]+)"', lambda m: f'{m.group(1)}{urljoin(base_url, m.group(2))}"', html_content)
    # CSSインポートを修正
    html_content = re.sub(r'(url\()([\'"]?)([^:\)\'"]+)([\'"]?\))', lambda m: f'{m.group(1)}{m.group(2)}{urljoin(base_url, m.group(3))}{m.group(4)}', html_content)
    return html_content

def highlight_and_scroll(url, target_text="", message="", sessionid=""):
    # URLからHTMLを取得
    response = requests.get(url)
    html_content = response.text
    # HTMLの相対パスを修正
    html_content = fix_relative_paths(html_content, url)
    
    if sessionid == "":
        chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        sessionid = "".join([chars[ord(os.urandom(1)) % len(chars)] for i in range(20)])

    # 特定の文字列を探してspanタグで囲む
    highlight_count = 0
    pattern = re.compile(re.escape(target_text), re.IGNORECASE)
    
    def replace_func(match):
        nonlocal highlight_count
        highlight_count += 1
        return f'<span id="highlight-{highlight_count}" style="box-shadow: inset 0 -0.7em 0 rgb(255 203 86);" class="asktoweb-highlight">{escape(match.group(0))}</span>'
    
    modified_content = pattern.sub(replace_func, html_content)

    # メッセージボックスを追加
    message_box_html = f'''
    <div id="message-box" style="position: absolute; background-color: white; color: black; padding: 10px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 400px; z-index: 1000; transition: opacity 0.3s ease;" 
    onmouseover="this.style.opacity='0';" onmouseout="this.style.opacity='1';">{escape(message)}</div>
    '''
    modified_content = modified_content.replace('</body>', message_box_html + '</body>')

    # スクロール用のJavaScriptを追加
    script_content = f"""
    document.addEventListener('DOMContentLoaded', function() {{
        localStorage.setItem("DIKSA", "{sessionid}");
        localStorage.setItem("DIKSAR", "open");
        var highlight = document.querySelector('.asktoweb-highlight');
        const messageBox = document.getElementById('message-box');

        if (highlight && messageBox) {{
            const highlightRect = highlight.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            // 画面の左右どちらにスペースがあるか判断
            const spaceOnRight = windowWidth - (highlightRect.right + 10);
            const spaceOnLeft = highlightRect.left - 10;

            let left, top;

            if (spaceOnRight > spaceOnLeft) {{
                // 右側にスペースがある場合
                left = highlightRect.right + 10;
            }} else {{
                // 左側にスペースがある場合
                left = highlightRect.left - messageBox.offsetWidth - 10;
            }}

            top = highlightRect.top;

            // メッセージボックスの位置とスタイルを設定
            messageBox.style.left = `${{left}}px`;
            messageBox.style.top = `${{top}}px`;
            messageBox.style.display = 'block';
            messageBox.style.opacity = '1';
            messageBox.scrollIntoView({{behavior: 'smooth', block: 'center'}});
        }}
    }});

    // リンクのクリックイベントを監視
        document.querySelectorAll('a').forEach(function(link) {{
            link.addEventListener('click', function(event) {{
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('https')) {{
                    event.preventDefault();
                    const absoluteUrl = new URL(href, '{url}').href;
                    window.location.href = "https://api.asktoweb.com/highlight?url="+absoluteUrl+"&sessionid="+localStorage.getItem("DIKSA");
                }}
            }});
        }});
    """
    script_tag = f'<script>{script_content}</script>'
    modified_content = modified_content.replace('</body>', script_tag + '</body>')

    asktoweb_script_tag = '<script src="https://api.asktoweb.com/static/asktoweb.js"></script>'
    modified_content = modified_content.replace('</head>', asktoweb_script_tag + '</head>')

    # 修正されたHTMLを返す
    return modified_content

@app.get("/highlight/")
def fetch_html(url: str, highlight: str = "vbieocwec", message: str = "", sessionid: str = ""):
    try:
        modified_html = highlight_and_scroll(url, highlight, message, sessionid)
        return Response(content=modified_html, media_type="text/html")
    except requests.HTTPError as e:
        raise HTTPException(status_code=response.status_code, detail=f"HTTP error: {e}")
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Request error: {e}")
    
if __name__ == "__main__":
    uvicorn.run(app)