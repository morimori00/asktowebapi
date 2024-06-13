ASKTOWEB_ASSISTANT_DOM =
  `
<!-- ADD BY ASKTOWEB ASSISTANT CODE -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">
 <link rel="stylesheet" href="https://npmcdn.com/tootik@1.0.2/css/tootik.min.css">
<div class="ask-to-website">
<span data-tootik="AI Support is Ready" id="ask-to-web-tooltip" data-tootik-conf="no-arrow shadow delay">
  <button id="ask-to-website-btn" class="ask-to-website-animation">
    <strong>ask!</strong>
    </button>
    </span>
</div>

<div class="center" id="ask-to-website-win">
  <div class="chat">
    <div class="contact bar">
      <button class="closebtn" id="ask-to-website-close-btn">
    <span data-tootik="Close" data-tootik-conf="no-arrow shadow delay">
        <i class="fas fa-times"></i>
      </span>
      </button>
      <div class="pic stark"></div>
      <div id="ask-to-website-name" class="name">
        AI Support Assistant
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
        Thank you for visiting our website. I will find the relevant page to your question.
      </div>
    </div>
    <div class="asktowebinput">
      <button id="ask-to-website-reset-btn" class="asktowebpost" data-tootik="Reset Conversation" data-tootik-conf="no-arrow shadow delay"><i class="fas fa-retweet"></i></button>
      <div class="ask-to-website-input-container">
        <div class="ask-to-website-hidden-input" id="ask-to-website-hidden-input"></div>
        <textarea id="ask-to-website-input" placeholder="Type your message here!" type="text"></textarea>
      </div>
      <button id="ask-to-website-post-btn" data-tootik="Send" data-tootik-conf="no-arrow shadow delay" class="asktowebpost"><i class="fas fa-paper-plane"></i></button>
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
  right: 30px;
  bottom: 20px;
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
  display: flex;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
}
.contact .message,
.contact .seen {
  font-size: 0.9rem;
  color: #999;
}
.contact .closebtn{
  box-sizing: border-box;
  border: none;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.125rem;
  border-radius: 1rem;
  top: -1.2rem;
  right: -1.5rem;
  background: #666;
  color: white;
  cursor: pointer;
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
.chat .messages .message .references-list{
   overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.chat .asktowebpost {
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3em;
    height: 3em;
}
.chat .asktowebinput {
  box-sizing: border-box;
  flex-basis: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  background: white;
  width: 100%;
    justify-content: space-between;
    gap: 5px;
}
.chat .asktowebinput i {
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: color 200ms;
}
.chat .asktowebinput i:hover {
  color: #333;
}
.chat .asktowebinput .ask-to-website-input-container{
width:100%;
position:relative;
}
.chat .asktowebinput .ask-to-website-input-container > * {
z-index: 0;
min-height: 1.3rem;
}
.chat .asktowebinput .ask-to-website-hidden-input{
  width:calc(100% - 2rem);
  white-space: pre-wrap;
  word-wrap: break-word;
  height:auto;
  padding: 0.55rem 1rem;
  opacity: 0;
  max-height: 6.5rem;
}
.chat .asktowebinput textarea {
  position: absolute;
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
  /* ユーザーによるリサイズを無効にする
  */
  resize: none;
  min-height: 1.3rem;
  height: 100%;
width:100%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}
.chat .asktowebinput textarea:focus {
  border:solid 1px #444;
}
.chat .asktowebinput textarea:placeholder {
  color: #999;
}
.message ol{
  margin:5px 0;
  font-size:0.8rem;
  padding-left:20px;
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

const API_URL = "https://morimori-asktoweb-fgkdbemz.leapcell.dev";
//const API_URL = "http://127.0.0.1:8000";
function generateRandomID() {
  let randomID = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++) {
    randomID += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomID;
}
function references_to_dom(references) {
  let dom = "参照リンク";
  dom += "<ol>";
  references.forEach(element => {
    dom += "<li><div class='references-list'>" + element + "<div></li>";
  });
  dom += "</ol>";
  return dom;
}

console.log(generateRandomID());
//const API_URL = "https://morimori-asktoweb-fgkdbemz.leapcell.dev/";
//Save sesstionId in localstrage and get it
function get_sesstionId() {
  //IF sesstionId is not exist, create new sesstionId
  if (localStorage.getItem("DIKSA") === null) {
    //create random id by time and random number
    localStorage.setItem("DIKSA", generateRandomID());
  }
  return localStorage.getItem("DIKSA");
}

class ASKTOWEB_ASSISTANT {
  constructor() {
    // 初期化
    this.openflg = 1;
    this.btn = document.getElementById("ask-to-website-btn");
    this.win = document.getElementById("ask-to-website-win");
    this.tooltip = document.getElementById("ask-to-web-tooltip");
    this.postbtn = document.getElementById("ask-to-website-post-btn");
    this.resetbtn = document.getElementById("ask-to-website-reset-btn");
    this.closebtn = document.getElementById("ask-to-website-close-btn");
    this.hiddeninput = document.getElementById("ask-to-website-hidden-input");
    this.nametext = document.getElementById("ask-to-website-name");
    this.nametext.innerHTML = 'AI Support Assistant　 <img style="border:solid 1px #777;" src="https://flagsapi.com/JP/flat/24.png">';
    this.closebtn.addEventListener("click", this.openaskwin.bind(this));
    this.asktowebtextarea = document.getElementById("ask-to-website-input");

    this.asktowebtextarea.addEventListener("keydown", function (e) {
      if (e.key === 'Enter' && e.shiftKey) {
        this.postit.bind(this)();
      }
    })
    this.chat = document.getElementById('chat');
    this.initchathistory();
    this.btn.addEventListener("click", this.openaskwin.bind(this)); // Bind the function to the class instance
    this.resetbtn.addEventListener("click", this.resetsesstion.bind(this));
    //this.asktowebtextarea.addEventListener("keydown", this.postit.bind(this));
    this.asktowebtextarea.addEventListener('input', e => {
      this.hiddeninput.innerText = e.target.value + "\u200b";
    })
    this.postbtn.addEventListener("click", this.postit.bind(this)); // Bind the function to the class instance
    console.log("AssistantBtn created" + this.openflg);

  }
  postit() {
    const text = this.asktowebtextarea.value;
    if (text.length < 3) { return; }
    this.postbtn.innerHTML = '<i class="fas fa-spinner fa-spin">'
    this.postbtn.disabled = true;
    console.log("sended" + text);
    this.asktowebtextarea.value = "";
    this.humanmessage(text);
    this.addloader();
    this.sclchat();
    FetchAPI(text, this.streamingaimessage.bind(this), this.addrefecenses.bind(this), this.errormessage.bind(this));
  }
  initchathistory() {
    fetch(API_URL + '/gethistory?sesstionId=' + get_sesstionId(), {
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
          if (element.type == "human") {
            this.humanmessage(element.content);
          } else if (element.type == "ai"){
            this.aimessage(element.content);
          } else if (element.type == "references") {
            this.aimessage(references_to_dom(element.content.split(",")));
          }
        });
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }
  errormessage() {
    const loading = document.getElementById("asktoweb-message-loader");
    if (loading) { loading.remove(); }
    this.systemmessage("Something get wrong. Please try again.");
    this.aimessage("Could not connect to server.<br> Sorry for not being able to answer your question.")
    this.endstreaming();
    this.postbtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
    this.postbtn.disabled = false;
  }
  addrefecenses(references) {
    this.endstreaming();
    this.postbtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
    this.postbtn.disabled = false;
    if (references.length == 0) { return; }
    this.aimessage(references_to_dom(references));
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
    //console.log(text);
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
  resetsesstion() {
    fetch(API_URL + '/resethistory?sesstionId=' + get_sesstionId(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        //console.log("sesstion reseted");
        this.systemmessage("Context deleted.");
      })
      .catch(error => {
        // Handle any errors that occur during the request
        //console.error(error);
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
    if (this.openflg == 1) {
      this.win.style.display = "block";
      this.btn.children[0].innerHTML = '<i class="fas fa-arrow-down"></i>';
      this.win.style.animation = 'fadeInUp 0.3s ease-out forwards';
      this.sclchat();
      this.tooltip.dataset.tootik = "";
      setTimeout(() => {
        this.tooltip.dataset.tootik = "Close";
        this.openflg = 0
      }, 500);
    } else if (this.openflg == 0) {
      this.btn.children[0].innerHTML = "ask!";
      this.tooltip.dataset.tootik = "";
      this.win.style.animation = 'fadeOutDown 0.3s ease-out forwards';
      setTimeout(() => {
        this.win.style.display = "none"
        this.tooltip.dataset.tootik = "AI Support is Ready";
        this.openflg = 1
      }, 500);
    } else {
      return;
    }
    this.openflg = 3;
  }
  sclchat() { this.chat.scrollTop = this.chat.scrollHeight - this.chat.clientHeight; }

}
//console.log("AssistantBtn loaded");

//After Website loaded, Create new Div element from text and append it to the body
document.addEventListener("DOMContentLoaded", function () {
  //append it to the body
  console.log("AssistantBtn created");
  document.body.innerHTML += ASKTOWEB_ASSISTANT_DOM;
  asktoweb = new ASKTOWEB_ASSISTANT();
})

var references = [];
async function FetchAPI(query, myaimessage, fn, errormessage) {
  fetch(API_URL + "/stream", {
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
          //console.log("Stream ended.");
          return;
        }
        buffer += decoder.decode(value, { stream: true });
        let events = buffer.split("\n\n");
        // 保留されたバッファの最後の要素を処理しないようにする
        buffer = events.pop();

        for (const event of events) {
          if (event.trim() === "") continue;
          const data = JSON.parse(event.replace("data: ", ""));
          if (data.end) {
            //console.log("Stream ended.");
            //ADD RFERENCE MESSGAGE
            fn(references);
            return;
          } else {
            console.log(`Received: ${data.value}`);
            if (data.type == "text") {
              myaimessage(data.value);
            } else if (data.type == "documents") {
              references.push(data.value);
            }
            else if (data.type == "history") {

            }

          }
        }

        return reader.read().then(processText);
      });
    } else {
      console.error("Streaming request failed:", response.statusText);
      errormessage();
    }
  }).catch(error => {
    console.error("Streaming request failed:", error);
    errormessage();
  });
}
