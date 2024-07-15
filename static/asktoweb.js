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
      <div class="pic robot"><span></span></div>
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
    <div id="asktowebsuggestion" class="asktowebsuggestion">
      <p></p>
      <div class="suggestion">
      </div>
    </div>
    <div class="asktowebinput">
      <button id="ask-to-website-reset-btn" class="asktowebpost" data-tootik="Reset Conversation" data-tootik-conf="no-arrow shadow delay">
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
      </button>
      <div class="ask-to-website-input-container">
        <div class="ask-to-website-hidden-input" id="ask-to-website-hidden-input"><span id="ask-to-website-hidden-input-user"></span><span id="ask-to-website-hidden-input-complete"></span></div>
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
*{
--primary-color: %DESIGN_PRIMARY_COLOR%;
--lighter-primary-color: %DESIGN_LIGHTER_PRIMARY_COLOR%;
--secondary-color: %DESIGN_SECONDARY_COLOR%;
}
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
  width: 384.0px;
  display: none;
  line-height: normal;
  z-index:99999999999;
  box-sizing: unset;
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
.contact .name {
  font-weight: 500;
  margin-top:7px;
  margin-bottom: 2.0px;
  display: flex;
  align-content: stretch;
  justify-content: flex-start;
  align-items: center;
}
.contact .message,
.contact .seen {
  font-size: 9.6px;
  color: gray;
}
 .contact .seen svg{
  opacity:0.5;
  transform:translateY(1.5px);
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
  width: 100%;
  height: 608.0px;
  z-index: 2;
  box-sizing: border-box;
  border-radius: 16.0px;
  background: var(--lighter-primary-color);
  box-shadow: 0 0 128.0px 0 rgba(0, 0, 0, 0.1), 0.0px 32.0px 64.0px -48.0px rgba(0, 0, 0, 0.5);
}
.ask-to-website-chat .contact.bar {
  flex-basis: 56.0px;
  flex-shrink: 0;
  margin: 16.0px;
  box-sizing: border-box;
}
  
.ask-to-website-chat::after{
  content:"%DESIGN_ACSENT_CHARACTER%";
  position:absolute;
  z-index:3;
  left:0;
  top:0;
  margin:0;
  padding:0;
  font-family: Red Hat Display, sans-serif;
  font-weight: 1000;
  transform:translate(-3px,-40px);
  font-size: 120.0px;
  color: rgba(0,0,0,.05);
}
.ask-to-website-chat .messages {
  padding: 16px 16px 32px 16px;
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
.asktowebsuggestion {
  position: absolute;
  bottom: 60px;
  display: none;
  transition: max-height .4s ease;
  flex-direction: column;
  justify-content: center;
  left: 0px;
  max-height: 50px;
  width: 100%;
  background: white;
  border-radius: 10px 10px 0 0;
}
.asktowebsuggestion p {
  font-size: 15px;
  margin: 0 20px;
}
 .asktowebsuggestion .suggestion {
  font-size: 15px;
  margin: 0 20px;
  white-space: nowrap;
  overflow: auto;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
.asktowebsuggestion .suggestion a {
  color:black;
  text-decoration: none;
  display: inline-block;
  border:1px solid #999;
  padding:2px;
  border-radius: 7px;
  margin-right: 5px;
  background: #f7f7f7;
}
.suggestion a .suggestion-fav {
  width:15px;
  height:15px;
  display:inline-block;
  background-repeat:no-repeat;
  background-size:contain;
  border-radius:1px;
}
.asktowebsuggestion .suggestion::-webkit-scrollbar {
  display: none;
}
.asktowebsuggestion:hover {
  max-height: 100px;
}
 .asktowebsuggestion:hover .suggestion {
  white-space: normal;
  overflow-wrap: anywhere;
}
   .asktowebsuggestion:hover .suggestion a {
  margin-bottom:3px;
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
  background: var(--lighter-primary-color);
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
  opacity: 1;
  color:transparent;
  box-sizing: unset;
  max-height: 104.0px;
}
.ask-to-website-chat .asktowebinput .ask-to-website-hidden-input #ask-to-website-hidden-input-use{
  color:transparent;
}
  .ask-to-website-chat .asktowebinput .ask-to-website-hidden-input #ask-to-website-hidden-input-complete{
  color:rgba(0,0,0,.5);
}
.ask-to-website-chat .asktowebinput textarea {
  position: absolute;
  border: none;
  background-image: none;
  background-color: transparent;
  color:black;
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
  border:solid 1px var(--primary-color);
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
  position: absolute;
  left: 0;
  width: 56.0px;
  background-color:var(--primary-color);
  height: 56.0px;
  mask-repeat: no-repeat;
mask-position: center;
mask-size: 200%;
 mask-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTAwLjAwMDAwMHB0IiBoZWlnaHQ9IjUwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUwMC4wMDAwMDAgNTAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsNTAwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE0MzcgMzY2NyBjLTMgLTkgLTExIC01NiAtMTggLTEwNCAtMTUgLTExMCAtNiAtMjg4IDIxIC00MDcgMTEgLTQ5CjE4IC05MSAxNyAtOTMgLTUgLTUgLTkwIDk3IC0xMzggMTY3IC0yNSAzNiAtNjEgMTAzIC04MSAxNDggbC0zNiA4NCAtNCAtNTQKYy0xMiAtMTgwIDc2IC00MDYgMjE2IC01NTEgNDggLTUxIDUxIC01NiAyOCAtNTEgLTM4IDggLTIwOCA5MyAtMjY3IDEzMyAtMjcKMTkgLTcyIDUyIC05OSA3NSBsLTQ5IDQxIDcgLTMwIGM3IC0yOSA0MiAtMTA1IDcwIC0xNTQgNDkgLTgzIDIwMiAtMTk3IDM0NQotMjU2IDUwIC0yMSA5MSAtMzkgOTEgLTQwIDAgLTQgLTEwMSA2IC0yMjUgMjEgLTExNyAxNSAtMjg4IDY0IC0zNDIgOTkgLTY4CjQ1IDQxIC02NyAxMzIgLTEzNCA2NyAtNTAgMjAzIC0xMjAgMjgwIC0xNDQgNTcgLTE4IDI5MyAtNjYgMzMzIC02OCAxNiAtMSA2Ci01IC0yMiAtMTAgLTY5IC0xMSAtMzMyIC0xNyAtNDUzIC0xMCAtNTYgMyAtOTkgMyAtOTUgLTEgMTUgLTE1IDI0MyAtNjggMzM0Ci03OCA1NCAtNSAxNzggLTEwIDI3NyAtMTAgMzE4IDAgNTY0IC00NSA3OTYgLTE0NSBsNDAgLTE3IC03MCAtMjYgYy0zOSAtMTUKLTkxIC0zOSAtMTE1IC01MyAtMTIyIC03MiAtMzEyIC0xNTcgLTQwMCAtMTc5IC0xOSAtNCAtNjIgLTE1IC05NSAtMjQgLTMzIC04Ci05NiAtMjEgLTE0MCAtMzAgLTE3NiAtMzIgLTE2OSAtMjkgLTkwIC0zNyAxMjEgLTE0IDQ0OSAxMCA1ODAgNDEgMjIgNSA0NSA5CjUwIDkgMTMgMCAtODYgLTQ4IC0xMDEgLTQ4IC01IC0xIC0zNSAtMTMgLTY1IC0yNyAtMTE5IC01OCAtMzY4IC0xNDQgLTQxNgotMTQ0IC0xMiAwIC0yNCAtMyAtMjYgLTggLTE2IC0yNSAzNzcgMTkgNDc2IDUzIDgxIDI5IDgwIDI4IDcyIDE1IC0xOCAtMjkKLTI0OSAtMTYyIC0zNDAgLTE5NiAtMTggLTcgLTE3IC04IDYgLTExIDE1IC0yIDY0IDYgMTEwIDE3IDczIDE5IDExOSA0MCAyODcKMTMwIDE4IDEwIDUyIDM0IDc1IDUyIDIzIDE5IDY5IDUwIDEwMiA2OSA1NCAzMSA2NyAzNCAxMzUgMzQgNDkgLTEgMTAxIC05CjE1MCAtMjQgNDEgLTEzIDEwMSAtMjQgMTM1IC0yNCBsNjAgLTIgMyA2OSAzIDY4IC0yNyAtMjEgYy0zMyAtMjYgLTU0IC0yNwotODcgLTEgLTE0IDExIC0zMCAyMCAtMzYgMjAgLTYgMCAtMTEgOSAtMTEgMjAgMCAxMSA0IDIwIDEwIDIwIDUgMCAyNyAxNSA0NwozNCA3NiA2OCAxODEgOTYgMjc5IDc2IDg3IC0xOCAxNTMgLTY2IDE4MCAtMTMwIGwxNSAtMzUgMTQgMjUgYzIxIDM2IDE4IDkwCi02IDEzNSAtMTIgMjIgLTM3IDc2IC01NiAxMjAgbC0zMyA4MCA0NSAtNTAgYzI1IC0yNyA1OCAtNzYgNzQgLTEwOCAxOCAtMzcKMzAgLTUzIDM0IC00NCA3IDE4IC05IDkwIC0yNyAxMjYgLTE5IDM1IC04OSAxMDIgLTE1MiAxNDQgLTY5IDQ2IC0yNzAgMTE4Ci00MjQgMTUyIC0xNjUgMzYgLTMxMCA4MCAtMzkwIDExNyAtNzggMzcgLTIyMSAxMjEgLTI3MCAxNjAgLTEzNyAxMDkgLTI5NgoyNzQgLTM4MyAzOTkgLTEwMiAxNDcgLTE4MSAyNzUgLTIwOCAzMzkgLTYgMTQgLTI0IDUxIC00MSA4MyAtMTYgMzEgLTQyIDk0Ci01NyAxMzkgLTE4IDU0IC0zMCA3NiAtMzQgNjV6IG0xMzMzIC0xODg1IGMwIC01IC02IC0xNiAtMTMgLTI3IC0xMSAtMTQgLTIxCi0xNiAtNTAgLTExIC00OSA5IC00NyAyMSA2IDMzIDU3IDE0IDU3IDE0IDU3IDV6Ii8+CjxwYXRoIGQ9Ik0zNjkyIDI5MjEgYy0yMyAtMjQgLTQyIC00NyAtNDIgLTUyIDAgLTUgLTkgLTkgLTE5IC05IC0xOCAwIC01NAotMzkgLTk2IC0xMDUgLTE3IC0yNyAtMjAgLTI4IC0yMyAtMTAgLTIgMTEgLTExIDI4IC0yMCAzOCAtMjkgMzIgLTQwIDIwIC00NwotNTIgLTggLTc3IC0xOCAtODIgLTUwIC0yOCBsLTE5IDMyIC02IC0zNSBjLTggLTQ1IC0yNSAtNzUgLTUyIC05NCAtMzUgLTI1Ci0zOCAtMjAgLTIzIDMyIDggMjYgMTUgNjEgMTUgNzcgbDAgMzAgLTE5IC0zMSBjLTEwIC0xNyAtMzEgLTQwIC00NSAtNTEgLTE0Ci0xMiAtMjYgLTI1IC0yNiAtMzAgMCAtNSAtMjAgLTI4IC00NCAtNTIgbC00NCAtNDMgLTY2IDM3IGMtMzcgMjEgLTcwIDM1IC03MwozMSAtMyAtMyAtMSAtMTggNiAtMzMgNiAtMTUgMTEgLTM5IDEwIC01MyAtMSAtMTQgMCAtMzIgMiAtNDAgMyAtMTIgLTUgLTE0Ci00NiAtMTIgLTUwIDQgLTExMCAyNiAtMTUzIDU4IGwtMjIgMTYgMTQgLTMzIGMxOSAtNDcgNTYgLTcwIDIwOSAtMTMwIDczIC0yOAoxNDMgLTU5IDE1NyAtNjggNDkgLTMxIDExMiAtODIgMTMwIC0xMDQgbDE4IC0yMiAxMSAyOCBjNiAxNiAxMSAzMyAxMSAzOCAwCjE2IDM4IDg2IDgzIDE1MiA0OCA3MSA2NyA5MyAxNTYgMTg4IDEyMyAxMzEgMTkxIDI3NiAxNjMgMzQ4IGwtOSAyNCAtNDEgLTQyeiIvPgo8L2c+Cjwvc3ZnPgo=");
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
  background-color: var(--primary-color);
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

@media screen and (max-width: 480px) {
  .ask-to-website{
    right: 5px;
    bottom: 5px;
  }
  .ask-to-website-center {
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
  .ask-to-website-chat .contact .closebtn {
    right: -15px;
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

var DESIGN_PRIMARY_COLOR = "$PRIMARY_COLOR$";
var DESIGN_LIGHTER_PRIMARY_COLOR = "$LIGHTER_PRIMARY_COLOR$";
var DESIGN_SECONDARY_COLOR = "$SECONDARY_COLOR$";
var DESIGN_ACSENT_CHARACTER = "$ACSENT_CHARACTER$";
var SUPPORT_LINK = "$SUPPORT_LINK$";

//set default value
if (DESIGN_PRIMARY_COLOR.includes("$")){DESIGN_PRIMARY_COLOR = "black";}
if (DESIGN_LIGHTER_PRIMARY_COLOR.includes("$")){DESIGN_LIGHTER_PRIMARY_COLOR = "#fff";}
if (DESIGN_SECONDARY_COLOR.includes("$")){DESIGN_SECONDARY_COLOR = "#fff";}
if (DESIGN_ACSENT_CHARACTER.includes("$")){DESIGN_ACSENT_CHARACTER = " A";}

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

const NAMESPACE ="$site_id$";
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
    console.debug(data);
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
    this.hiddeninput_user = shadowRoot.getElementById("ask-to-website-hidden-input-user");
    this.hiddeninput_complete= shadowRoot.getElementById("ask-to-website-hidden-input-complete");
    this.nametext = shadowRoot.getElementById("ask-to-website-name");
    this.nametext.innerHTML = l("title") + ' [' + LANGAGE_NAME + ']';
    this.closebtn.addEventListener("click", this.openaskwin.bind(this));
    this.asktowebtextarea = shadowRoot.getElementById("ask-to-website-input");
    this.asktowebtextarea.placeholder = l("placeholder");
    this.asktowebtextarea.addEventListener("keydown", (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
          this.postit();
      }
      //tabキーでplaceholderを補完
      if (e.key === 'Tab') {
        e.preventDefault();
        if(this.hiddeninput_complete.innerText.length>0){
          this.asktowebtextarea.value +=  this.hiddeninput_complete.innerText;
          this.hiddeninput_user.innerText += this.hiddeninput_complete.innerText+ "\u200b";
          this.hiddeninput_complete.innerText = "";
        }
      }
  });
    this.chat = shadowRoot.getElementById('chat');
    this.initchathistory();
    this.btn.addEventListener("click", this.openaskwin.bind(this)); // Bind the function to the class instance
    this.resetbtn.addEventListener("click", this.resetsesstion.bind(this));
    //this.asktowebtextarea.addEventListener("keydown", this.postit.bind(this));
    this.suggestion = shadowRoot.getElementById("asktowebsuggestion");
    this.suggestion.querySelector("p").innerText = l("suggestion");
    this.asktowebtextarea.addEventListener('input', e => {
      this.hiddeninput_user.innerText = e.target.value + "\u200b";
      if(this.hiddeninput.clientHeight>50){
        this.suggestion.style.paddingBottom = "16px";
      }else{
        this.suggestion.style.paddingBottom = "0";
      }
      this.hiddeninput_complete.innerText = "";
      if(e.target.value.length>1){
        this.querypages(e.target.value);
        this.completequery(e.target.value);
      }else{
        this.suggestion.style.display = "none";
      }
    })
    this.postbtn.addEventListener("click", this.postit.bind(this)); // Bind the function to the class instance
    console.debug("AssistantBtn created" + this.openflg);
    setTimeout(() => {
    if(localStorage.getItem("DIKSAR")=="open"){
      this.btn.click();
    }},2000);
  }
  postit() {
    const text = this.asktowebtextarea.value;
    if (text.length < 3) { return; }
    this.suggestion.style.display = "none";
    this.hiddeninput_complete.innerText="";
    this.hiddeninput_user.innerText="";
    this.postbtn.innerHTML = ICON.spiner;
    this.postbtn.disabled = true;
    this.resetbtn.disabled = true;
    console.debug("sended" + text);
    this.asktowebtextarea.value = "";
    this.humanmessage(text);
    this.addloader();
    this.sclchat();
    FetchAPI(text, this.streamingaimessage.bind(this), this.addrefecenses.bind(this), this.errormessage.bind(this), this.verify.bind(this));
  }
  completequery(query){
    if(query.length < 3){return;}
    if(this.ifcompletequery){return;}
    this.ifcompletequery=true;
    fetch(API_URL + '/complete?query=' + query,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data here
      this.ifcompletequery=false;
      if(this.asktowebtextarea.value!=query){
        this.completequery(this.asktowebtextarea.value);
        return;
      }

      this.hiddeninput_complete.innerText = data.replaceAll(query,"");
      if(this.hiddeninput.clientHeight>50){
        this.suggestion.style.paddingBottom = "16px";
      }else{
        this.suggestion.style.paddingBottom = "0";
      }
      console.debug(data);
    })
    .catch(error => {
      console.error(error);
      this.ifcompletequery=false;
    });
  }
  querypages(query) {
    if(this.isquerying){return;}
    this.isquerying = true;
    fetch(API_URL + '/querypages?query=' + query +"&website="+NAMESPACE, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data here
        //update the suggestion
        if(data.length==0){
          this.suggestion.style.display = "none";
          this.isquerying = false;
          if(query!=this.asktowebtextarea.value){
            this.querypages(this.asktowebtextarea.value);
          }
          return;
        }
        console.debug(data[0].url);
        this.suggestion.style.display = "flex";
        this.suggestion.querySelector(".suggestion").innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let a = document.createElement('a');
          a.href = data[i]["url"];
          a.innerHTML = `<div class="suggestion-fav" style="background-image:url('https://www.google.com/s2/favicons?domain=${data[i]["url"]}');"></div>`;
          if(data[i]["url"].includes("#:~:text=") && data[i]["url"].split("#:~:text=")[1].length>3){
            a.innerHTML += data[i]["url"].split("#:~:text=")[1];
          }else{
            a.innerHTML += data[i]["title"];
          }
          a.target = "_blank";
          this.suggestion.querySelector(".suggestion").appendChild(a);
        }
        this.isquerying = false;
        if(query!=this.asktowebtextarea.value){
          this.querypages(this.asktowebtextarea.value);
        }
      })
      .catch(error => {
        // Handle any errors that occur during the request
        this.isquerying
        console.error(error);
      });
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
        // console.debug(data["chat_history"]);
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
        console.debug(formated_date);
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
    console.debug("streaming:"+text);
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
    // contentHTML=contentHTML.replace(/\["([^"]+)"@(\d+)\]/g, (match, p1, p2) => {
    //   // p1 はタグ内のテキスト、p2 は参照番号
    //   const ref=references[p2-1];
    //   const hilighttexturl=ref["source"].split("#:~:text=")[0]+"#:~:text="+p1;
    //   const url = replaceHighlightLink(hilighttexturl, contentHTML.replace(/\[.*?\]/g, ''));  // URL を取得
    //   const atag= `<a href="${url}" target="_blank" data-tootik="${toolkit}" data-tootik-conf="no-arrow shadow delay" onmouseover="referenceHover('${ref['source']}',true)" onmouseout="referenceHover('${ref['source']}',false)" >${p1}[${p2}]</a>`;
    //   return atag     // 置換するリンクを生成
    // });
    //参照フォーマット(["text"@N,@N2,@N3])に対応
    contentHTML=contentHTML.replace(/\[.*?\]/g, (match) => {
      // マッチした部分から[]を取り除く
      let content = match.slice(1, -1);
      let p1,p2;
      if(!content.includes("@")){
        //contentの中に含まれている数字を一つ見つける
         p1= "";
         p2= content.match(/\d+/);
      }else{
       p1= content.split("@")[0].replace(/"/g, '');
      //contentの空白を削除
       p2= content.split("@")[1].replace(/\s+/g, '');
      }
      const ref=references[p2-1];
      const hilighttexturl=ref["source"].split("#:~:text=")[0]+"#:~:text="+p1;
      const url = replaceHighlightLink(hilighttexturl, contentHTML.replace(/\[.*?\]/g, ''));  // URL を取得
      const atag= `<a href="${url}" target="_blank" data-tootik="${toolkit}" data-tootik-conf="no-arrow shadow delay" onmouseover="referenceHover('${ref['source']}',true)" onmouseout="referenceHover('${ref['source']}',false)" >${p1}[${p2}]</a>`;
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
    console.debug("verify"+verify_result);
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
    // console.debug(data["en"]);
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

async function ONLOAD(){
  //append it to the body
  console.debug("AssistantBtn created");
  container= document.createElement("div");
  shadowRoot = container.attachShadow({mode: 'closed'});
  shadowRoot.innerHTML = 
  ASKTOWEB_ASSISTANT_DOM
  .replace("%DESIGN_PRIMARY_COLOR%",DESIGN_PRIMARY_COLOR)
  .replace("%DESIGN_SECONDARY_COLOR%",DESIGN_SECONDARY_COLOR)
  .replace("%DESIGN_ACSENT_CHARACTER%",DESIGN_ACSENT_CHARACTER)
  .replace("%DESIGN_LIGHTER_PRIMARY_COLOR%",DESIGN_LIGHTER_PRIMARY_COLOR);
  document.body.appendChild(container);
  var script = document.createElement('script');
  script.src = API_URL + "/static/marked.min.js";
  shadowRoot.appendChild(script);
  // document.body.innerHTML += ASKTOWEB_ASSISTANT_DOM;
  LOCARIZATION = await fetchJsonData();
  asktoweb = new ASKTOWEB_ASSISTANT();
  
}
if (document.readyState === "loading") {
  // Loading hasn't finished yet
//After Website loaded, Create new Div element from text and append it to the body
document.addEventListener("DOMContentLoaded", async function () {
  ONLOAD();
});
} else {
  // `DOMContentLoaded` has already fired
  ONLOAD();
}


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
          //console.debug("Stream ended.");
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
            //console.debug("Stream ended.");
            //ADD RFERENCE MESSGAGE
            fn(references);
          }else if(data.end) {
            return;
          } else {
            console.debug(`Received: ${data.value}`);
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



