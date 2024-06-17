ASKTOWEB_ASSISTANT_DOM =
  `
<!-- ADD BY ASKTOWEB ASSISTANT CODE -->
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
 <link rel="stylesheet" href="https://npmcdn.com/tootik@1.0.2/css/tootik.min.css">
<div class="ask-to-website">
<span data-tootik="" id="ask-to-web-tooltip" data-tootik-conf="no-arrow shadow delay">
  <button id="ask-to-website-btn" class="ask-to-website-animation">
    <strong><i class="fas fa-spinner fa-spin"></i></strong>
    </button>
    </span>
</div>

<div class="ask-to-website-center" id="ask-to-website-win">
  <div class="ask-to-website-chat">
    <div class="contact bar">
      <button class="closebtn" data-tootik="Close" data-tootik-conf="no-arrow shadow delay" id="ask-to-website-close-btn">
        <i class="fas fa-times"></i>
      </button>
      <div class="pic robot"></div>
      <div id="ask-to-website-name" class="name"></div>
      <div class="seen">
        Pwered by ASKTOWEB.ai 
        <span data-tootik-conf="no-arrow bottom shadow multiline delay" data-tootik="
        Data privacy\n
        All data is encrypted to protect your privacy.\n
        Your conversations will not be used to train the AI. However, your conversations may be shared with the site owner to improve the quality of the website.\n
        Notice\n
        Be sure to check the reference links for correct information.\n
        We are not responsible for any damage or disadvantage caused by AI-generated answers.\n
        ">
        <i class="fas fa-circle-info"></i>
        </span>  
      </div>
    </div>
    <div class="messages" id="chat">
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
  font-family: Red hat Display, sans-serif;
  font-weight: 400;
  line-height: 1.25em;
  letter-spacing: 0.025em;
  z-index: 99000;
  --primary-color: black;
  --secondary-color: #fff;
}
  
.ask-to-website-animation {
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: none;
  /*background: #333;*/
  /* set background as blue cool gradinent */
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  color: var(--secondary-color);
}

.ask-to-website-animation:hover {
  transform: scale(1.2);
}

.ask-to-website-animation:active {
  transform: scale(0.95);
  box-shadow: 7px 5px 56px -10px #777;
}

.ask-to-website-chat button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
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

.ask-to-website-center {
  position: fixed;
  bottom: 100px;
  right: 30px;
  display: none;
  line-height: normal;
  z-index:99999999999;
  box-sizing: unset;
}

.pic {
  width: 3.5rem;
  height: 3.5rem;
  background-size: cover;
  background-position: center;
  border-radius: 20%;
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
  font-size: 0.6rem;
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

.ask-to-website-chat {
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
.ask-to-website-chat .contact.bar {
  flex-basis: 3.5rem;
  flex-shrink: 0;
  margin: 1rem;
  box-sizing: border-box;
}
.ask-to-website-chat .messages {
  padding: 1rem;
  background: #f7f7f7;
  flex-shrink: 2;
  overflow-y: auto;
  min-height: 25.5rem;
  box-shadow: inset 0 2rem 2rem -2rem rgba(0, 0, 0, 0.05), inset 0 -2rem 2rem -2rem rgba(0, 0, 0, 0.05);
}
.ask-to-website-chat .messages .time {
  font-size: 0.8rem;
  background: #eee;
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  color: #999;
  width: fit-content;
  margin: 0 auto;
}
.ask-to-website-chat .messages .message {
  box-sizing: border-box;
  position: relative;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background: #fff;
  border-radius: 1.125rem 1.125rem 1.125rem 0;
  min-height: 2.25rem;
  width: fit-content;
  max-width: 75%;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.075), 0rem 1rem 1rem -1rem rgba(0, 0, 0, 0.1);
}
.ask-to-website-chat .messages .message.verifying::after{
  content:"";
  position:absolute;
  width:15px;
  height:15px;
  right:-25px;
  bottom:5px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #777;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
.ask-to-website-chat .messages .message.mankind {
  margin: 1rem 1rem 1rem auto;
  border-radius: 1.125rem 1.125rem 0 1.125rem;
  background: #333;
  color: white;
}
  .message .source-link{
  border:solid 1px rgba(0,0,0,.1);
  min-width:13rem;
  min-height:2rem;
  border-radius:5px;
  display:flex;
  padding:5px;
  cursor:pointer;
  margin:3px;
  color:black;
  text-decoration:none; 
}
.message .source-link .source-fav{
  width:2rem;
  height:auto;
  background-repeat:no-repeat;
  background-size:contain;
  border-radius:5px;
}
.ask-to-website-chat .message .source-link .source-texts{
  width:calc(100% - 2rem - 10px);
  padding:0;
  margin-left:10px;
}
.ask-to-website-chat .message .source-link .source-texts .source-title{
  padding:0;
  margin:0;
  font-size:.8rem;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ask-to-website-chat .message .source-link .source-texts .source-discription{
  padding:0;
  margin:0;
  font-size:.6rem;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  line-height: .9;
}
.ask-to-website-chat .messages .message .typing {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0rem;
  box-sizing: border-box;
  background: #ccc;
  border-radius: 50%;
}
.ask-to-website-chat .messages .message .typing.typing-1 {
  animation: typing 3s infinite;
}
.ask-to-website-chat .messages .message .typing.typing-2 {
  animation: typing 3s 250ms infinite;
}
.ask-to-website-chat .messages .message .typing.typing-3 {
  animation: typing 3s 500ms infinite;
}
.ask-to-website-chat .asktowebpost {
    flex-shrink: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3em;
    height: 3em;
}
.ask-to-website-chat .asktowebinput {
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
.ask-to-website-chat .messages .message .loader-text {
  font-style: italic;
  font-size: 0.7rem;
  color: #777;
  width:80px;
  height:0.7rem;
}
.ask-to-website-chat .asktowebinput i {
  font-size: 1.5rem;
  color: var(--primary-color);
  opacity: 0.7;
  cursor: inherit;
  transition: color 200ms;
}
.ask-to-website-chat .asktowebinput i:hover {
  opacity: 1;
}
.ask-to-website-chat .asktowebinput .ask-to-website-input-container{
width:100%;
position:relative;
}
.ask-to-website-chat .asktowebinput .ask-to-website-input-container > * {
z-index: 0;
min-height: 1.3rem;
font-size: 1rem;
  line-height: 1.6em;
}
.ask-to-website-chat .asktowebinput .ask-to-website-hidden-input{
  width:calc(100% - 2rem);
  white-space: pre-wrap;
  word-wrap: break-word;
  height:auto;
  padding: 0.5rem 1rem;
  opacity: 0;
  box-sizing: unset;
  max-height: 6.5rem;
}
.ask-to-website-chat .asktowebinput textarea {
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
  overflow: hidden;
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
.ask-to-website-chat .asktowebinput textarea:focus {
  border:solid 1px #444;
}
.ask-to-website-chat .asktowebinput textarea:placeholder {
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
.pic.robot {
  /*background-image: url("https://i.ibb.co/k6q414b/2024-06-13-235132.png");*/
  /*background-image: url("https://i.ibb.co/pbWCkhM/1.png");*/
  /*background-image: url("https://i.ibb.co/VvZmGxw/2024-06-17-081619.png");*/
  background-image: url("https://i.ibb.co/D44kXwy/2024-06-17-082934.png");
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

var USER_LANGUAGE = navigator.language || navigator.userLanguage;
var USER_LANGUAGE = USER_LANGUAGE.substring(0, 2);
const diaplayname = new Intl.DisplayNames([USER_LANGUAGE], { type: 'language' });
var LANGAGE_NAME = diaplayname.of(USER_LANGUAGE);

ASKTOWEB_ASSISTANT_TYPING_DOM = `<div id="asktoweb-message-loader" class="message robot">
        <div class="typing typing-1"></div>
        <div class="typing typing-2"></div>
        <div class="typing typing-3"></div>
        <div class="loader-text"><marquee scrollamount="3">Searching infomation from website...</marquee></div>
        </div>`;

const API_URL = "https://morimori-asktoweb-fgkdbemz.leapcell.dev";
//const API_URL = "http://127.0.0.1:8000";
const SUPPORT_LINK="https://asktoweb.ai/support";
function generateRandomID() {
  let randomID = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++) {
    randomID += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomID;
}
function extractNumbers(str) {
  // 正規表現を使って、[]で囲まれた数字を抽出
  const regex = /\[(.*?)\]/g;
  const matches = str.matchAll(regex);

  // 抽出した数字を配列に格納
  const numbers = [];
  for (const match of matches) {
    numbers.push(parseInt(match[1]));
  }

  return numbers;
}
function replaceSupportLink(text) {
  //replace ail [Support] to SUPPORT_LINK
  elem=`<a href=${SUPPORT_LINK} target="_blank">${l("message.support")}</a>`
  return text.replace(/\[Support\]/g, elem);
}
function references_to_dom(references ,answer) {
  let dom = l("message.reference");
  let toolkit= l("tooltip.link");
  refs= extractNumbers(answer)
  if(refs.length==0){
      refs=[...Array(references.length).keys()]
  }
  references.forEach(element => {
    const indexNo=references.indexOf(element)
    if(!refs.includes(indexNo+1)){
      return;
    }
    data = element;
    console.log(data);
    dom += `
    <a class="source-link" href="${data["source"]}" rel=”noopener” target="_blank" data-tootik="${toolkit}" id="ask-to-web-tooltip" data-tootik-conf="no-arrow shadow delay">
          <div style="background-image:url('https://www.google.com/s2/favicons?domain=${data["source"]}');" class="source-fav"></div>
          <div class="source-texts">
            <p class="source-title">${data["title"]}</p>
            <p class="source-discription">${data["discription"]}</p>
          </div>
        </a>
    `;
  });
  return dom;
}

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
    this.btn.innerHTML = '<strong><i class="fas fa-search"></i></strong>';
    this.win = document.getElementById("ask-to-website-win");
    this.tooltip = document.getElementById("ask-to-web-tooltip");
    this.postbtn = document.getElementById("ask-to-website-post-btn");
    this.postbtn.dataset.tootik = l("tooltip.send");
    this.resetbtn = document.getElementById("ask-to-website-reset-btn");
    this.resetbtn.dataset.tootik = l("tooltip.reset");
    this.closebtn = document.getElementById("ask-to-website-close-btn");
    this.closebtn.dataset.tootik = l("tooltip.close");
    this.hiddeninput = document.getElementById("ask-to-website-hidden-input");
    this.nametext = document.getElementById("ask-to-website-name");
    this.nametext.innerHTML = l("title") + ' [' + LANGAGE_NAME + ']';
    this.closebtn.addEventListener("click", this.openaskwin.bind(this));
    this.asktowebtextarea = document.getElementById("ask-to-website-input");
    this.asktowebtextarea.placeholder = l("placeholder");
    this.asktowebtextarea.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
          this.postit();
      }
  });
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
    this.hiddeninput.innerText = "";
    this.postbtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    this.postbtn.disabled = true;
    this.resetbtn.disabled = true;
    console.log("sended" + text);
    this.asktowebtextarea.value = "";
    this.humanmessage(text);
    this.addloader();
    this.sclchat();
    FetchAPI(text, this.streamingaimessage.bind(this), this.addrefecenses.bind(this), this.errormessage.bind(this), this.verify.bind(this));
  }
  initchathistory() {
    this.resetbtn.disabled = true;
    this.postbtn.disabled = true;
    this.systemmessage(l("system.loading"));
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
        this.resetbtn.disabled = false;
        this.postbtn.disabled = false;
        this.chat.innerHTML = "";
        if (data["chat_history"].length == 0) {
          this.resetbtn.disabled = true;
          const date = new Date();
          const datestring = date.toLocaleDateString() + " " + date.toLocaleTimeString().substring(0, 5);
          this.systemmessage(datestring);
          this.aimessage(l("message.hello"));
          return;
        }
        const formated_date = data["date"].split("T")[0] + " " + data["date"].split("T")[1].split(".")[0].substring(0, 5);
        console.log(formated_date);
        this.systemmessage(formated_date);
        this.aimessage(l("message.hello"));
        data["chat_history"].forEach(element => {
          if (element.type == "human") {
            this.humanmessage(element.content);
          } else if (element.type == "ai") {
            this.currentaimessage= this.aimessage(replaceSupportLink(element.content));
          } else if (element.type == "references") {
            const referencesdirs=element.content.split("$")
            this.aimessage(references_to_dom(referencesdirs.map(d => JSON.parse(d)),this.currentaimessage.innerText));
            this.refinanswer(this.currentaimessage, referencesdirs.map(d => JSON.parse(d)));
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
    this.systemmessage(l("system.error"));
    this.aimessage(l("message.error"))
    this.endstreaming();
    this.postbtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
    this.postbtn.disabled = false;
    this.resetbtn.disabled = false;
  }
  addrefecenses(references) {
    this.endstreaming();
    this.postbtn.innerHTML = '<i class="fas fa-paper-plane"></i>'
    this.postbtn.disabled = false;
    this.resetbtn.disabled = false;
    if (references.length == 0) { return; }
    this.aimessage(references_to_dom(references,this.currentaimessage.innerText));
    this.refinanswer(this.currentaimessage, references);
  }
  humanmessage(text) {
    this.resetbtn.disabled = false;
    let message = document.createElement('div');
    message.classList.add('message', 'mankind');
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
    message.classList.add('message', 'robot');
    message.innerHTML = text;
    this.chat.appendChild(message);
    this.sclchat();
    return message;
  }
  currentaimessage;
  streamingflg = false;
  streamingaimessage(text) {
    console.log("streaming:"+text);
    if (this.streamingflg) {
      this.currentaimessage.innerText = text;
    } else {
      const loading = document.getElementById("asktoweb-message-loader");
      if (loading) { loading.remove(); }
      let message = document.createElement('div');
      message.classList.add('message', 'robot',"verifying");
      message.innerText = text;
      this.chat.appendChild(message);
      this.sclchat();
      this.currentaimessage = message;
      this.streamingflg = true;
    }
    this.sclchat();
  }
  resetsesstion() {
    //resetしたばかりの時は、resetボタンを無効にする
    this.resetbtn.disabled = true;
    this.postbtn.disabled = true;
    this.resetbtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'
    const new_sessionId = generateRandomID();
    localStorage.setItem("DIKSA", new_sessionId);
    this.resetbtn.disabled = false;
    this.postbtn.disabled = false;
    this.resetbtn.innerHTML = '<i class="fas fa-retweet"></i>'
    const messages = document.getElementsByClassName("message");
    for (let i = 0; i < messages.length; i++) {
      messages[i].style.opacity = 0.5;
    }
    this.systemmessage(l("system.reset"));
    this.aimessage(l("message.reset"));
  }
  endstreaming() {
    this.streamingflg = false;
  }
  refinanswer(messageelem, references) {
    let contentHTML = messageelem.innerHTML;
    let n=1;
    let toolkit= l("tooltip.link");
    references.forEach((link, index) => {
      const placeholder = `\\[${index + 1}\\]`; // 正規表現で使用するためエスケープする
      const anchorTag = `<a href="${link['source']}" target="_blank" data-tootik="${toolkit}" data-tootik-conf="no-arrow shadow delay" onmouseover="referenceHover('${link['source']}',true)" onmouseout="referenceHover('${link['source']}',false)" >[${n}]</a>`;
      const regex = new RegExp(placeholder, 'g'); // 全ての出現箇所を置換するため'g'フラグを付ける
      //regexが存在する場合は、nを増やす
      if (contentHTML.match(regex)) {
        n++;
      contentHTML = contentHTML.replace(regex, anchorTag);
      }
    });
    messageelem.innerHTML = contentHTML;
  }
  addloader() {
    const loading = document.getElementById("asktoweb-message-loader");
    if (!loading) { this.chat.innerHTML += ASKTOWEB_ASSISTANT_TYPING_DOM; }
    const loader_text = document.getElementById("asktoweb-message-loader").querySelector(".loader-text>marquee");
    loader_text.innerText = l("loading.1");
    setTimeout(() => {
      loader_text.innerText = l("loading.2");
      setTimeout(() => {
        loader_text.innerText = l("loading.3");
        setTimeout(() => {
          loader_text.innerText = l("loading.4");
          setTimeout(() => {
            loader_text.innerText = l("loading.5");
          }, 13000);
        }, 10000);
      }, 6000);
    }, 7000);
  }
  verify(verify_result){
    console.log("verify"+verify_result);
    this.currentaimessage.classList.remove("verifying");
    if(verify_result.toString().includes("ok") || verify_result.toString().includes("Ok") || verify_result.toString().includes("OK")){
        
    }else{
      this.currentaimessage.innerHTML=verify_result;
    }
  }
  openaskwin() {
    if (this.openflg == 1) {
      this.win.style.display = "block";
      this.btn.children[0].innerHTML = '<i class="fas fa-arrow-down"></i>';
      this.win.style.animation = 'fadeInUp 0.3s ease-out forwards';
      this.sclchat();
      this.tooltip.dataset.tootik = "";
      //focus on textarea
      this.asktowebtextarea.focus();
      setTimeout(() => {
        this.tooltip.dataset.tootik = "";
        this.openflg = 0
      }, 500);
    } else if (this.openflg == 0) {
      this.btn.children[0].innerHTML = '<i class="fas fa-search"></i>';
      this.tooltip.dataset.tootik = "";
      this.win.style.animation = 'fadeOutDown 0.3s ease-out forwards';
      setTimeout(() => {
        this.win.style.display = "none"
        this.tooltip.dataset.tootik = l("tooltip.ready");
        this.openflg = 1
      }, 500);
    } else {
      return;
    }
    this.openflg = 3;
  }
  sclchat() { this.chat.scrollTop = this.chat.scrollHeight - this.chat.clientHeight; }

}

function referenceHover(url, flg) {
  //find element which has url in href and .source-link class
  const elements = document.querySelectorAll(`.source-link[href="${url}"]`);
  elements.forEach(element => {
    //elementを光らせる
    if (flg) element.style.backgroundColor = "#f0f0f0";
    else element.style.backgroundColor = "white";
  });
}
// Function to fetch the JSON data
async function fetchJsonData() {
  try {
    // Send a GET request to the URL
    const response = await fetch(API_URL + "/static/localization.json");

    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    // Parse the response as JSON
    const data = await response.json();
    // Log the JSON data
    console.log(data["en"]);
    return data;

    // You can process the JSON data here
    // For example, update the DOM or perform other operations with the data
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
}

var LOCARIZATION = {};
//After Website loaded, Create new Div element from text and append it to the body
document.addEventListener("DOMContentLoaded", async function () {
  //append it to the body
  console.log("AssistantBtn created");
  document.body.innerHTML += ASKTOWEB_ASSISTANT_DOM;
  LOCARIZATION = await fetchJsonData();
  asktoweb = new ASKTOWEB_ASSISTANT();
});
const l = (key) => {
  data = LOCARIZATION[USER_LANGUAGE];
  key = key.split(".")
  let res = data;
  key.forEach(element => {
    res = res[element];
  });
  return res;
}
var references = [];
var finalanswer=""
async function FetchAPI(query, myaimessage, fn, errormessage,verifyfn) {
  references = [];
  finalanswer="";
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
              myaimessage(replaceSupportLink(data.value));
              finalanswer=replaceSupportLink(data.value);
            } else if (data.type == "documents") {
              references.push(data.value);
            }
            else if (data.type == "history") {

            } else if (data.type == "verify") {
                const verify_result = data.value;
                verifyfn(verify_result);
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
