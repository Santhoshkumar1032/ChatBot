
import React,{ useState } from "react";
import { Button } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import {ChatQuoteFill, SendFill } from "react-bootstrap-icons";
import { analyze } from "./utils";
import { fetchWeather } from "./fetchWeather";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi,May i have your Name?",
    },
  ]);

  const[text,setText]=useState('');

  const onSend= () => {
    let list=[...messages,{message: text,user: true}];
    if(list.length > 2)
        {
            const reply= analyze(text);
            list = [
                ...list,{message: reply}
            ];
        }
        else{
            list=[...list,
                {
                    message:`Hi,${text}`,
                },
                {
                    message:"How can i help you?",
                },
               
            ];
        }
            setMessages(list);
            setText("");
            setTimeout(()=>{
                document.querySelector("#copyrights").scrollIntoView();
            },1);
        
  };
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <div className="top-buttons">
          <button className="top-button" >LOGIN</button>
          <button className="top-button" >SIGN UP</button>
          <button className="top-button" >HELP</button>
          <button className="top-button" >CONTACT US</button>
        </div>
      </header>
</div>
      <div className="display-flex align-items-center justify-content-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/WhatsApp-BOT-Image-2_2.gif"
          alt="https://i.pinimg.com/736x/a5/39/07/a53907b134abfe7fdc26da8eeef1e268.jpg"
          height={250}
          width={400}
        ></img>
        <h4 color="black">Santhoshkumar</h4>
        <h2 className="text-primary">ChatBot <ChatQuoteFill/></h2>
      </div>
      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data) => <ChatMessage {...data} />)}
        <div className="d-flex mt-2">
          <input type="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)}></input>
          <Button type="primary" className="ms-3 display-flex align-items-center justify-content-center" onClick={onSend}>
            <SendFill/>
          </Button>
        </div>
        <div id="copyrights" className="mt-3">
          copyrights reserved content by @Santhoshkumar
        </div>
      </div>
    </div>
  );
}
