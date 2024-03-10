import React, {useState} from "react";
import Nav from "./Nav";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Footer from "./Footer";


function WatchLive() {
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function regex(space) {
        space = /\s+/g;        
        let result = space.test(inputText);
        
        return result;
    }
    console.log(regex(" "));

    function sendMessage() {
        if(inputText !== ""){
            setMessages(prevItems => {
                return [...prevItems, inputText];   
            });
        }
        setInputText("");
    }

    function keyListener(event) {
        const key = event.key;
        
        if(key === "Enter"){
            sendMessage();
        }
    }

    return (
        <div>
            <Nav />
            <div className="stream_section">
                <div className="video_section">
                    <video width="750" height="500" controls >
                        <source src="./vids/outlast.mp4" type="video/mp4"/>
                    </video>    
                </div>
                
                <div className="livechat_section">
                    
                    <div className="livechat_field">
                        <ul>
                            {messages.map(message => (
                                <li>{message}</li>
                            ))}        
                        </ul>
                    </div>

                    <input className="chatbar" type="text" onKeyDown={keyListener} onChange={handleChange} value={inputText}/>
                    
                    <button onClick={sendMessage} className="send_button">
                        <SendRoundedIcon />
                    </button>

                </div>
            </div>
            
            <Footer />
        </div>
    );
}
export default WatchLive;