ASKTOWEB_ASSISTANT_DOM =
  `
<!-- ADD BY ASKTOWEB ASSISTANT CODE -->
 <link rel="stylesheet" href="https://npmcdn.com/tootik@1.0.2/css/tootik.min.css">
<div class="ask-to-website">
<span data-tootik="" id="ask-to-web-tooltip" data-tootik-conf="no-arrow shadow delay">
  <button id="ask-to-website-btn" class="ask-to-website-animation">
    <strong>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    </strong>
    </button>
    </span>
</div>

<div class="ask-to-website-center" id="ask-to-website-win">
  <div class="ask-to-website-chat">
    <div class="contact bar">
      <button class="closebtn" data-tootik="Close" data-tootik-conf="no-arrow shadow delay" id="ask-to-website-close-btn">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>     
 </button>
      <div class="pic robot"></div>
      <div id="ask-to-website-name" class="name"></div>
      <div class="seen">
        Pwered by ASKTOWEB.com 
        <span data-tootik-conf="no-arrow bottom shadow multiline delay" data-tootik="
        Data privacy\n
        All data is encrypted to protect your privacy.\n
        Your conversations will not be used to train the AI. However, your conversations may be shared with the site owner to improve the quality of the website.\n
        Notice\n
        Be sure to check the reference links for correct information.\n
        We are not responsible for any damage or disadvantage caused by AI-generated answers.\n
        ">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
        </span>  
      </div>
    </div>
    <div class="messages" id="chat">
    </div>
    <div class="asktowebinput">
      <button id="ask-to-website-reset-btn" class="asktowebpost" data-tootik="Reset Conversation" data-tootik-conf="no-arrow shadow delay">
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
      </button>
      <div class="ask-to-website-input-container">
        <div class="ask-to-website-hidden-input" id="ask-to-website-hidden-input"></div>
        <textarea id="ask-to-website-input" placeholder="Type your message here!" type="text"></textarea>
      </div>
      <button id="ask-to-website-post-btn" data-tootik="Send" data-tootik-conf="no-arrow shadow delay" class="asktowebpost">
      <svg xmlns="http://www.w3.org/2000/svg"  width="25px" height="25px"  viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
      </button>
    </div>
  </div>
</div>
<link>
<style>
@charset "UTF-8";
@import url("https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,900&display=swap");
.ask-to-website {
  width: 64.0px;
  height: 64.0px;
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
  width: 48.0px;
  height: 48.0px;
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
.ask-to-website-animation strong {
  position:relative;
}
.ask-to-website-animation svg {
  fill: var(--secondary-color);
  width: 16.0px;
  height: 16.0px;
}

.ask-to-website-center svg.spinner {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  width: 56.0px;
  height: 56.0px;
  background-size: cover;
  background-position: center;
  border-radius: 20%;
}

.contact {
  position: relative;
  margin-bottom: 16.0px;
  padding-left: 80.0px;
  height: 72.0px;
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
  margin-bottom: 2.0px;
  display: flex;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
}
.contact .message,
.contact .seen {
  font-size: 9.6px;
  color: #999;
}
.contact .closebtn{
  box-sizing: border-box;
  border: none;
  position: absolute;
  width: 24.0px;
  height: 24.0px;
  text-align: center;
  font-size: 14.4px;
  padding-top: 2.0px;
  border-radius: 16.0px;
  background: #999;
  top: -19.2px;
  right: -24.0px;
  background: transparent;
  color: white;
  cursor: pointer;
}
.contact .badge {
  box-sizing: border-box;
  position: absolute;
  width: 24.0px;
  height: 24.0px;
  text-align: center;
  font-size: 14.4px;
  padding-top: 2.0px;
  border-radius: 16.0px;
  top: 0;
  left: 40.0px;
  background: #333;
  color: white;
}

.ask-to-website-chat {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 384.0px;
  height: 608.0px;
  z-index: 2;
  box-sizing: border-box;
  border-radius: 16.0px;
  background: white;
  box-shadow: 0 0 128.0px 0 rgba(0, 0, 0, 0.1), 0.0px 32.0px 64.0px -48.0px rgba(0, 0, 0, 0.5);
}
.ask-to-website-chat .contact.bar {
  flex-basis: 56.0px;
  flex-shrink: 0;
  margin: 16.0px;
  box-sizing: border-box;
}
.ask-to-website-chat .messages {
  padding: 16.0px;
  background: #f7f7f7;
  flex-shrink: 2;
  overflow-y: auto;
  min-height: 408.0px;
  box-shadow: inset 0 32.0px 32.0px -32.0px rgba(0, 0, 0, 0.05), inset 0 -32.0px 32.0px -32.0px rgba(0, 0, 0, 0.05);
}
.ask-to-website-chat .messages .time {
  font-size: 12.8px;
  background: #eee;
  padding: 4.0px 16.0px;
  border-radius: 32.0px;
  color: #999;
  width: fit-content;
  margin: 0 auto;
}
.ask-to-website-chat .messages .message {
  box-sizing: border-box;
  position: relative;
  padding: 8.0px 16.0px;
  margin: 16.0px;
  background: #fff;
  border-radius: 18.0px 18.0px 18.0px 0;
  min-height: 36.0px;
  width: fit-content;
  max-width: 75%;
  box-shadow: 0 0 32.0px rgba(0, 0, 0, 0.075), 0.0px 16.0px 16.0px -16.0px rgba(0, 0, 0, 0.1);
}
.ask-to-website-chat .messages .message>p{
  margin:0;
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
  margin: 16.0px 16.0px 16.0px auto;
  border-radius: 18.0px 18.0px 0 18.0px;
  background: #333;
  color: white;
}
  .message .source-link{
  border:solid 1px rgba(0,0,0,.1);
  min-width:208.0px;
  min-height:32.0px;
  border-radius:5px;
  display:flex;
  padding:5px;
  cursor:pointer;
  margin:3px;
  color:black;
  text-decoration:none; 
}
.message .source-link .source-fav{
  width:32.0px;
  height:auto;
  background-repeat:no-repeat;
  background-size:contain;
  border-radius:5px;
}
.ask-to-website-chat .message .source-link .source-texts{
  width:calc(100% - 32.0px - 10px);
  padding:0;
  margin-left:10px;
}
.ask-to-website-chat .message .source-link .source-texts .source-title{
  padding:0;
  margin:0;
  font-size:12.8px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ask-to-website-chat .message .source-link .source-texts .source-discription{
  padding:0;
  margin:0;
  font-size:9.6px;
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  line-height: .9;
}
.ask-to-website-chat .messages .message .typing {
  display: inline-block;
  width: 12.8px;
  height: 12.8px;
  margin-right: 0.0px;
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
  flex-basis: 64.0px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 0 8.0px;
  background: white;
  width: 100%;
    justify-content: space-between;
    gap: 5px;
}
.ask-to-website-chat .messages .message .loader-text {
  font-style: italic;
  font-size: 11.2px;
  color: #777;
  width:80px;
  height:11.2px;
}
.ask-to-website-chat .asktowebinput i {
  font-size: 24.0px;
  color: var(--primary-color);
  opacity: 0.7;
  cursor: inherit;
  transition: color 200ms;
}
  .ask-to-website-support-link{
    color: blue;
    text-decoration:underline;  
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
min-height: 20.8px;
font-size: 16.0px;
  line-height: 1.6em;
}
.ask-to-website-chat .asktowebinput .ask-to-website-hidden-input{
  width:calc(100% - 32.0px);
  white-space: pre-wrap;
  word-wrap: break-word;
  height:auto;
  padding: 8.0px 16.0px;
  opacity: 0;
  box-sizing: unset;
  max-height: 104.0px;
}
.ask-to-website-chat .asktowebinput textarea {
  position: absolute;
  border: none;
  background-image: none;
  background-color: white;
  padding: 8.0px 16.0px;
  margin-right: 16.0px;
  border-radius: 18.0px;
  flex-grow: 2;
  box-shadow: 0 0 16.0px rgba(0, 0, 0, 0.1), 0.0px 16.0px 16.0px -16.0px rgba(0, 0, 0, 0.2);
  font-family: Red Hat Display, sans- serif;
  font-weight: 400;
  letter-spacing: 0.025em;
  overflow: hidden;
  resize: none;
  min-height: 20.8px;
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
  font-size:12.8px;
  padding-left:20px;
}


@keyframes typing {
  0%, 75%, 100% {
    transform: translate(0, 4.0px) scale(0.9);
    opacity: 0.5;
  }
  25% {
    transform: translate(0, -4.0px) scale(1);
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
  
.asktoweb-glowing-eft {
  position:absolute;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 50px 15px rgba(255, 255, 255, 0.7);
  overflow: hidden;
}
.asktoweb-glowing-eft::before {
  content: "";
  position: absolute;
  top: -250%;
  left: -250%;
  width: 600%;
  height: 600%;
  background: conic-gradient(
    rgba(255, 255, 255, 0.2) 0deg,
    rgba(255, 255, 255, 0.6) 20deg,
    rgba(255, 255, 255, 0.9) 40deg,
    rgba(255, 255, 255, 1) 60deg,
    rgba(255, 255, 255, 0.9) 110deg,
    rgba(255, 255, 255, 0.6) 130deg,
    rgba(255, 255, 255, 0.2) 150deg,
    transparent 170deg,
    transparent 360deg
  );
  animation: rotate 1.5s linear infinite;
  filter: blur(10px);
}
.asktoweb-glowing-eft::after {
  content: "";
  position: absolute;
  inset: 8px;
  background-color: black;
  border-radius: 50%;
  filter: blur(6px);
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  10% {
    transform: rotate(0deg);
    opacity: 1;
  }
  20% {
    transform: rotate(90deg);
  }
  35% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(540deg);
  }
  65% {
    transform: rotate(630deg);
    opacity: 1;
  }
  80% {
    transform: rotate(690deg);
    opacity: .5;
  }
  100% {
    transform: rotate(720deg);
    opacity: 0;
  }
}

</style>
`

var ICON={
  "send":`<svg xmlns="http://www.w3.org/2000/svg"  width="25px" height="25px"  viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>`,
  "arrow":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,
  "retweet":`<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>`,
  "spiner":`<svg class="spinner" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>`,
  "search":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`
};

var USER_LANGUAGE = navigator.language || navigator.userLanguage;
USER_LANGUAGE = USER_LANGUAGE.substring(0, 2);
const diaplayname = new Intl.DisplayNames([USER_LANGUAGE], { type: 'language' });
var LANGAGE_NAME = diaplayname.of(USER_LANGUAGE);

ASKTOWEB_ASSISTANT_TYPING_DOM = `<div id="asktoweb-message-loader" class="message robot">
        <div class="typing typing-1"></div>
        <div class="typing typing-2"></div>
        <div class="typing typing-3"></div>
        <div class="loader-text"><marquee scrollamount="3">Searching infomation from website...</marquee></div>
        </div>`;

// const API_URL = "https://morimori-asktoweb-fgkdbemz.leapcell.dev";

//開発環境と本番環境をURLに応じて自動で切り替え
//URLがローカルホストまたは、ローカルファイルの場合は開発環境と判断
if(location.hostname === "localhost" || location.protocol === "file:"){
  var API_URL = "http://127.0.0.1:8000";
}else{
  var API_URL = "https://api.asktoweb.com";
}

// const API_URL="https://api.asktoweb.com";
// const API_URL = "http://127.0.0.1:8000";

const SUPPORT_LINK="https://asktoweb.com/support";
const NAMESPACE ="fulldepth";
function generateRandomID() {
  let randomID = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 20; i++) {
    randomID += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randomID;
}
function extractNumbers(str) {
  // 正規表現を使って、@と]で囲まれた数字を抽出
  const regex = /\@(.*?)\]/g;
  const matches = str.matchAll(regex);

  // 抽出した数字を配列に格納
  const numbers = [];
  for (const match of matches) {
    //アルファベットが含まれている場合はスキップ
    if (/[a-zA-Z]/.test(match[1])) {continue;}
    numbers.push(parseInt(match[1]));
  }

  return numbers;
}
function replaceSupportLink(text) {
  //replace ail [Support] to SUPPORT_LINK
  elem=`<a class="ask-to-website-support-link" href=${SUPPORT_LINK} target="_blank">${l("message.support")}</a>`
  return text.replace(/\[Support\]/g, elem);
}
function replaceHighlightLink(url,answer) {
  let target=url.split("#:~:text=")[1].substring(0, 30);
  let link=url.split("#:~:text=")[0];
  if(target){
    return encodeURI( API_URL+"/highlight?url="+link+"&message="+answer+"&sessionid="+get_sesstionId()+"&highlight="+target);
  }
  return url;
}
function references_to_dom(references ,answer) {
  let dom = l("message.reference");
  let toolkit= l("tooltip.link");
  refs= extractNumbers(answer)
  if(refs.length==0){
      refs = [...Array(Math.min(references.length, 4)).keys()];
  }
  references.forEach(element => {
    const indexNo=references.indexOf(element)
    if(!refs.includes(indexNo+1)){
      return;
    }
    data = element;
    console.log(data);
    dom += `
    <a class="source-link" href="${replaceHighlightLink(data["source"],answer)}" data-reference="${data["source"]}" rel=”noopener” target="_blank" data-tootik="${toolkit}" id="ask-to-web-tooltip" data-tootik-conf="no-arrow shadow delay">
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
    this.btn = shadowRoot.getElementById("ask-to-website-btn");
    this.btn.innerHTML = '<strong>'+ ICON.search +'</strong>';
    this.win = shadowRoot.getElementById("ask-to-website-win");
    this.tooltip = shadowRoot.getElementById("ask-to-web-tooltip");
    this.postbtn = shadowRoot.getElementById("ask-to-website-post-btn");
    this.postbtn.dataset.tootik = l("tooltip.send");
    this.resetbtn = shadowRoot.getElementById("ask-to-website-reset-btn");
    this.resetbtn.dataset.tootik = l("tooltip.reset");
    this.closebtn = shadowRoot.getElementById("ask-to-website-close-btn");
    this.closebtn.dataset.tootik = l("tooltip.close");
    this.hiddeninput = shadowRoot.getElementById("ask-to-website-hidden-input");
    this.nametext = shadowRoot.getElementById("ask-to-website-name");
    this.nametext.innerHTML = l("title") + ' [' + LANGAGE_NAME + ']';
    this.closebtn.addEventListener("click", this.openaskwin.bind(this));
    this.asktowebtextarea = shadowRoot.getElementById("ask-to-website-input");
    this.asktowebtextarea.placeholder = l("placeholder");
    this.asktowebtextarea.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
          this.postit();
      }
  });
    this.chat = shadowRoot.getElementById('chat');
    this.initchathistory();
    this.btn.addEventListener("click", this.openaskwin.bind(this)); // Bind the function to the class instance
    this.resetbtn.addEventListener("click", this.resetsesstion.bind(this));
    //this.asktowebtextarea.addEventListener("keydown", this.postit.bind(this));
    this.asktowebtextarea.addEventListener('input', e => {
      this.hiddeninput.innerText = e.target.value + "\u200b";
    })
    this.postbtn.addEventListener("click", this.postit.bind(this)); // Bind the function to the class instance
    console.log("AssistantBtn created" + this.openflg);
    setTimeout(() => {
    if(localStorage.getItem("DIKSAR")=="open"){
      this.btn.click();
    }},2000);
  }
  postit() {
    const text = this.asktowebtextarea.value;
    if (text.length < 3) { return; }
    this.hiddeninput.innerText = "";
    this.postbtn.innerHTML = ICON.spiner;
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
        // console.log(data["chat_history"]);
        this.resetbtn.disabled = false;
        this.postbtn.disabled = false;
        this.chat.innerHTML = "";
        let glowingeffect= document.createElement('div');
        glowingeffect.classList.add('asktoweb-glowing-eft');
        this.btn.insertBefore(glowingeffect, this.btn.firstChild);
        setTimeout(() => {
          glowingeffect.remove();
        },1500)
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
            this.currentaimessage= this.aimessage(replaceSupportLink(marked.parse(element.content)));
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
    const loading = shadowRoot.getElementById("asktoweb-message-loader");
    if (loading) { loading.remove(); }
    this.systemmessage(l("system.error"));
    this.aimessage(l("message.error"))
    this.endstreaming();
    this.postbtn.innerHTML = ICON.send;
    this.postbtn.disabled = false;
    this.resetbtn.disabled = false;
  }
  addrefecenses(references) {
    this.endstreaming();
    this.postbtn.innerHTML = ICON.send;
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
      this.currentaimessage.innerHTML = text;
    } else {
      const loading = shadowRoot.getElementById("asktoweb-message-loader");
      if (loading) { loading.remove(); }
      let message = document.createElement('div');
      message.classList.add('message', 'robot',"verifying");
      message.innerHTML = text;
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
    this.resetbtn.innerHTML = ICON.spiner;
    const new_sessionId = generateRandomID();
    localStorage.setItem("DIKSA", new_sessionId);
    this.resetbtn.disabled = false;
    this.postbtn.disabled = false;
    this.resetbtn.innerHTML = ICON.retweet;
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
    // references.forEach((link, index) => {
    //   const placeholder = `\\[${index + 1}\\]`; // 正規表現で使用するためエスケープする
    //   const anchorTag = `<a href="${replaceHighlightLink(link['source'],contentHTML)}" target="_blank" data-tootik="${toolkit}" data-tootik-conf="no-arrow shadow delay" onmouseover="referenceHover('${link['source']}',true)" onmouseout="referenceHover('${link['source']}',false)" >[${n}]</a>`;
    //   const regex = new RegExp(placeholder, 'g'); // 全ての出現箇所を置換するため'g'フラグを付ける
    //   //regexが存在する場合は、nを増やす
    //   if (contentHTML.match(regex)) {
    //     n++;
    //   contentHTML = contentHTML.replace(regex, anchorTag);
    //   }
    // });
    //最新の参照フォーマット(["text"@N])に対応
    contentHTML=contentHTML.replace(/\["([^"]+)"@(\d+)\]/g, (match, p1, p2) => {
      // p1 はタグ内のテキスト、p2 は参照番号
      const ref=references[p2-1];
      const hilighttexturl=ref["source"].split("#:~:text=")[0]+"#:~:text="+p1;
      const url = replaceHighlightLink(hilighttexturl, contentHTML.replace(/\[.*?\]/g, ''));  // URL を取得
      const atag= `<a href="${url}" target="_blank" data-tootik="${toolkit}" data-tootik-conf="no-arrow shadow delay" onmouseover="referenceHover('${ref['source']}',true)" onmouseout="referenceHover('${ref['source']}',false)" >[${p1}]</a>`;
      return atag     // 置換するリンクを生成
    });

    messageelem.innerHTML = contentHTML;
  }
  addloader() {
    const loading = shadowRoot.getElementById("asktoweb-message-loader");
    if (!loading) { this.chat.innerHTML += ASKTOWEB_ASSISTANT_TYPING_DOM; }
    const loader_text = shadowRoot.getElementById("asktoweb-message-loader").querySelector(".loader-text>marquee");
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
    if(verify_result.toString().includes("ok")){
        
    }else{
      this.currentaimessage.innerHTML=verify_result;
    }
  }
  openaskwin() {
    if (this.openflg == 1) {
      this.win.style.display = "block";
      this.btn.querySelector("strong").innerHTML = ICON.arrow;
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
      this.btn.querySelector("strong").innerHTML = ICON.search;
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
  const elements = shadowRoot.querySelectorAll(`.source-link[data-reference="${url}"]`);
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
    // console.log(data["en"]);
    return data;

    // You can process the JSON data here
    // For example, update the DOM or perform other operations with the data
  } catch (error) {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  }
}

var LOCARIZATION = {};
var shadowRoot;
//After Website loaded, Create new Div element from text and append it to the body
document.addEventListener("DOMContentLoaded", async function () {
  //append it to the body
  console.log("AssistantBtn created");
  container= document.createElement("div");
  shadowRoot = container.attachShadow({mode: 'closed'});
  shadowRoot.innerHTML = ASKTOWEB_ASSISTANT_DOM;
  document.body.appendChild(container);
  var script = document.createElement('script');
  script.src = API_URL + "/static/marked.min.js";
  shadowRoot.appendChild(script);
  // document.body.innerHTML += ASKTOWEB_ASSISTANT_DOM;
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
      "website": NAMESPACE
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
          if (data.preend) {
            //console.log("Stream ended.");
            //ADD RFERENCE MESSGAGE
            fn(references);
          }else if(data.end) {
            return;
          } else {
            console.log(`Received: ${data.value}`);
            if (data.type == "text") {
              markdown=marked.parse(data.value);
              myaimessage(replaceSupportLink(markdown));
              finalanswer=replaceSupportLink(markdown);
            } else if (data.type == "documents") {
              references.push(data.value);
            }
            else if (data.type == "history") {

            } else if (data.type == "verify") {
                const verify_result = marked.parse(data.value);
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



