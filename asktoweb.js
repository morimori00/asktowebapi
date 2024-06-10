ASKTOWEB_ASSISTANT_DOM =
    `
<!-- ADD BY ASKTOWEB ASSISTANT CODE -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
<div class="ask-to-website">
  <button id="ask-to-website-btn" class="ask-to-website-animation">
    <strong>ask!</strong>
    </button>
</div>

<div class="center" id="ask-to-website-win">
  <div class="chat">
    <div class="contact bar">
      <div class="pic stark"></div>
      <div class="name">
        AI Support Assistat
      </div>
      <div class="seen">
        your message won't use to train AI
      </div>
    </div>
    <div class="messages" id="chat">
      <div class="time">
        Today
      </div>
      <div class="message stark">
        こんにちは！私は AI チャットボットです。何でも聞いてください。ウェブサイトの情報をもとにお答えします🙂
      </div>
    </div>
    <div class="asktowebinput">
      <button id="ask-to-website-reset-btn" class="asktowebpost"><i class="fas fa-retweet"></i></button><textarea id="ask-to-website-input" placeholder="Type your message here!" type="text"></textarea><button id="ask-to-website-post-btn" class="asktowebpost"><i class="fas fa-paper-plane"></i></button>
    </div>
  </div>
</div>
<link>
<style>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,900&display=swap");
.ask-to-website {
  width: 4rem;
  height: 4rem;
  position: fixed;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ask-to-website-animation {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: black;
  transition: 0.3s;
  color: white;
}

.ask-to-website-animation:hover {
  transform: scale(1.2);
}

.ask-to-website-animation:active {
  transform: scale(0.95);
  box-shadow: 7px 5px 56px -10px #c3d900;
}

body,
html {
  font-family: Red hat Display, sans-serif;
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: 0.025em;
  color: #333;
  background: #f7f7f7;
}

.asktowebpost {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.center {
  position: fixed;
  bottom: 100px;
  right: 30px;
  display: none;
}

.pic {
  width: 4rem;
  height: 4rem;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}

.contact {
  position: relative;
  margin-bottom: 1rem;
  padding-left: 5rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact .pic {
  position: absolute;
  left: 0;
}
.contact .name {
  font-weight: 500;
  margin-bottom: 0.125rem;
}
.contact .message,
.contact .seen {
  font-size: 0.9rem;
  color: #999;
}
.contact .badge {
  box-sizing: border-box;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.125rem;
  border-radius: 1rem;
  top: 0;
  left: 2.5rem;
  background: #333;
  color: white;
}

.chat {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24rem;
  height: 38rem;
  z-index: 2;
  box-sizing: border-box;
  border-radius: 1rem;
  background: white;
  box-shadow: 0 0 8rem 0 rgba(0, 0, 0, 0.1), 0rem 2rem 4rem -3rem rgba(0, 0, 0, 0.5);
}
.chat .contact.bar {
  flex-basis: 3.5rem;
  flex-shrink: 0;
  margin: 1rem;
  box-sizing: border-box;
}
.chat .messages {
  padding: 1rem;
  background: #f7f7f7;
  flex-shrink: 2;
  overflow-y: auto;
  min-height: 25.5rem;
  box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);
}
.chat .messages .time {
  font-size: 0.8rem;
  background: #eee;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  color: #999;
  width: fit-content;
  margin: 0 auto;
}
.chat .messages .message {
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background: #fff;
  border-radius: 1.125rem 1.125rem 1.125rem 0;
  min-height: 2.25rem;
  width: fit-content;
  max-width: 75%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
}
.chat .messages .message.parker {
  margin: 1rem 1rem 1rem auto;
  border-radius: 1.125rem 1.125rem 0 1.125rem;
  background: #333;
  color: white;
}
.chat .messages .message .typing {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0rem;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 50%;
}
.chat .messages .message .typing.typing-1 {
  animation: typing 3s infinite;
}
.chat .messages .message .typing.typing-2 {
  animation: typing 3s 250ms infinite;
}
.chat .messages .message .typing.typing-3 {
  animation: typing 3s 500ms infinite;
}
.chat .asktowebinput {
  box-sizing: border-box;
  flex-basis: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 1.5rem;
}
.chat .asktowebinput i {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #666;
  cursor: pointer;
  transition: color 200ms;
}
.chat .asktowebinput i:hover {
  color: #333;
}
.chat .asktowebinput textarea {
  border: none;
  background-image: none;
  background-color: white;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 1.125rem;
  flex-grow: 2;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.2);
  font-family: Red Hat Display, sans- serif;
  font-weight: 400;
  letter-spacing: 0.025em;
  resize: none;
  /* ユーザーによるリサイズを無効にする
  */
  height: 1.3rem;
  /* 固定の高さを設定 */
  overflow-y: auto;
  /* 縦方向のスクロールを有効にする
  */
}
.chat .asktowebinput textarea:placeholder {
  color: #999;
}

@keyframes typing {
  0%, 75%, 100% {
    transform: translate(0, 0.25rem) scale(0.9);
    opacity: 0.5;
  }
  25% {
    transform: translate(0, -0.25rem) scale(1);
    opacity: 1;
  }
}
.pic.stark {
  background-image: url("https://i.ibb.co/0DpNZ1t/istockphoto-1083322658-612x612.jpg");
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
    /* 下に20px移動 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    /* 元の位置 */
  }
}
@keyframes fadeOutDown {
  0% {
    opacity: 1;
    transform: translateY(0);
    /* 元の位置 */
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
    /* 下に20px移動 */
  }
}
</style>
`
ASKTOWEB_ASSISTANT_TYPING_DOM = `<div id="asktoweb-message-loader" class="message stark">
        <div class="typing typing-1"></div>
        <div class="typing typing-2"></div>
        <div class="typing typing-3"></div>
      </div>`;

const API_URL = "http://127.0.0.1:8000";
//Save sesstionId in localstrage and get it
function get_sesstionId() {
    //IF sesstionId is not exist, create new sesstionId
    if (localStorage.getItem("DIKSA") === null) {
        localStorage.setItem("DIKSA", Math.random().toString(36).slice(-8));
    }
    return localStorage.getItem("DIKSA");
}

class ASKTOWEB_ASSISTANT {
    constructor() {
        // 初期化
        this.openflg = 1;
        this.btn = document.getElementById("ask-to-website-btn");
        this.win = document.getElementById("ask-to-website-win");
        this.postbtn = document.getElementById("ask-to-website-post-btn");
        this.resetbtn=document.getElementById("ask-to-website-reset-btn");
        this.asktowebtextarea = document.getElementById("ask-to-website-input");
        this.chat = document.getElementById('chat');
        this.initchathistory();
        this.btn.addEventListener("click", this.openaskwin.bind(this)); // Bind the function to the class instance
        this.resetbtn.addEventListener("click", this.resetsesstion.bind(this));
        this.postbtn.addEventListener("click", function () {
            const text = this.asktowebtextarea.value;
            if (text.length < 3) { return; }
            this.postbtn.innerHTML = '<i class="fas fa-spinner fa-spin">'
            this.postbtn.disabled = true;
            console.log("sended" + text);
            this.asktowebtextarea.value = "";
            this.humanmessage(text);
            this.addloader();
            this.sclchat();
            
            FetchAPI(text, this.streamingaimessage.bind(this), this.addrefecenses.bind(this));

        }.bind(this)); // Bind the function to the class instance
        console.log("AssistantBtn created" + this.openflg);

    }
    initchathistory() {
        fetch(API_URL+'/gethistory?sesstionId='+get_sesstionId(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data here
                console.log(data["chat_history"]);
                console.log(data["chat_history"].length);
                data["chat_history"].forEach(element => {
                    if(element.type=="human"){
                        this.humanmessage(element.content);
                    }else {
                        this.aimessage(element.content);
                    }
                });
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    }
    addrefecenses(references) {
        this.endstreaming();
        this.postbtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
        this.postbtn.disabled = false;
        if (references == "") { return; }
        this.aimessage(references);
    }
    humanmessage(text) {
        let message = document.createElement('div');
        message.classList.add('message', 'parker');
        message.innerText = text;
        this.chat.appendChild(message);
        return message;
    }
    systemmessage(text) {
        let message = document.createElement('div');
        message.classList.add('time');
        message.innerHTML = text;
        this.chat.appendChild(message);
        this.sclchat();
        return message;
    }
    aimessage(text) {
        let message = document.createElement('div');
        message.classList.add('message', 'stark');
        message.innerHTML = text;
        this.chat.appendChild(message);
        this.sclchat();
        return message;
    }
    currentaimessage;
    streamingflg = false;
    streamingaimessage(text) {
        if (this.streamingflg) {
            this.currentaimessage.innerText = text;
        } else {
            const loading = document.getElementById("asktoweb-message-loader");
            if (loading) { loading.remove(); }
            let message = document.createElement('div');
            message.classList.add('message', 'stark');
            message.innerText = text;
            this.chat.appendChild(message);
            this.sclchat();
            this.currentaimessage = message;
            this.streamingflg = true;
        }
        this.sclchat();

    }
    resetsesstion(){
        fetch(API_URL+'/resethistory?sesstionId='+get_sesstionId(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data here
                console.log("sesstion reseted");
                this.systemmessage("会話履歴をリセットしました。");
            })
            .catch(error => {
                // Handle any errors that occur during the request
                console.error(error);
            });
    }
    endstreaming() {
        this.streamingflg = false;
    }
    addloader() {
        const loading = document.getElementById("asktoweb-message-loader");
        if (loading) { return; }
        this.chat.innerHTML += ASKTOWEB_ASSISTANT_TYPING_DOM;
    }
    openaskwin() {
        console.log("AssistantBtn clicked" + this.openflg);
        if (this.openflg == 1) {
            this.win.style.display = "block";
            this.btn.children[0].innerText = "↓";
            this.win.style.animation = 'fadeInUp 0.5s ease-out forwards';
            this.sclchat();
            setTimeout(() => {
                this.openflg = 0
            }, 700);
        } else if (this.openflg == 0) {
            this.btn.children[0].innerText = "ask!";
            this.win.style.animation = 'fadeOutDown 0.5s ease-out forwards';
            setTimeout(() => {
                this.win.style.display = "none"
                this.openflg = 1
            }, 700);
        } else {
            return;
        }
        this.openflg = 3;
    }
    sclchat() { this.chat.scrollTop = this.chat.scrollHeight - this.chat.clientHeight; }

}

//After Website loaded, Create new Div element from text and append it to the body
document.addEventListener("DOMContentLoaded", function () {
    //append it to the body
    document.body.innerHTML += ASKTOWEB_ASSISTANT_DOM;
    asktoweb = new ASKTOWEB_ASSISTANT();
})

var references = "";
async function FetchAPI(query, aimessage, fn) {
    fetch(API_URL+"/stream", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "question": query,
            "sesstionId": get_sesstionId(),
            "website": "yourl"
        })
    }).then(response => {
        if (response.ok) {
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';

            return reader.read().then(function processText({ done, value }) {
                if (done) {
                    console.log("Stream ended.");
                    return;
                }
                buffer += decoder.decode(value, { stream: true });
                let events = buffer.split("\n\n");

                // 保留されたバッファの最後の要素を処理しないようにする
                buffer = events.pop();
                var documents = [];
                for (const event of events) {
                    if (event.trim() === "") continue;
                    const data = JSON.parse(event.replace("data: ", ""));
                    if (data.end) {
                        console.log("Stream ended.");
                        //ADD RFERENCE MESSGAGE
                        fn(references);
                        return;
                    } else {
                        console.log(`Received: ${data.value}`);
                        if (data.type == "text") {
                            aimessage(data.value);
                        } else if (data.type == "documents") {
                            references = data.value;
                        }
                        else if (data.type == "history") {

                        }

                    }
                }

                return reader.read().then(processText);
            });
        } else {
            console.error("Streaming request failed:", response.statusText);
        }
    }).catch(error => {
        console.error("Streaming request failed:", error);
    });
}
