# 必要モジュールのインポート
from dotenv import load_dotenv

# .envファイルの内容を読み込見込む
load_dotenv(override=True)

from langchain_core.prompts import ChatPromptTemplate
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage, AIMessage,SystemMessage

chat = ChatGroq(
    temperature=0,
    model="llama3-8b-8192"
)

prompt = [
    SystemMessage(content="Complete the user's question."),
    HumanMessage(content="この製品は無"),
    AIMessage(content="この製品は無料ですか？"),
    HumanMessage(content="How much"),
    AIMessage(content="How much does this product cost?"),
    HumanMessage(content="カスタマ"),
    AIMessage(content="カスタマーサポートに問い合わせる方法は？"),
    HumanMessage(content="自治体でこのドローンを"),
    ]

print(chat.invoke(prompt))