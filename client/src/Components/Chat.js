import React, { useContext, useEffect, useState } from 'react'
import io from "socket.io-client";
import Chatcontext from './Context/Chatcontext';
import "./ChatCss.css"
import ScrollToBottom from 'react-scroll-to-bottom';
const socket = io.connect("http://localhost:4500");

const Chat = () => {
    const [messages, setmessages] = useState([]);
    const { info } = useContext(Chatcontext);
    const [text, settext] = useState("");
    const handleClick = (e) => {
        if (text === "") return;
        let obj = {
            name: info.name,
            message: text,
            roomId: info.roomId
        }
        setmessages([...messages, obj]);
        socket.emit("new-user-message", obj);
        settext("")


    }
    socket.on("message_recived", (data) => {
        setmessages([...messages, data]);
    })
    useEffect(() => {
        socket.emit("roomJoined", info);
    }, [])
    return (
        <div className='main'>
            <h1>Live Chat</h1>
            <ScrollToBottom className="chatBody">
                {
                    messages.map((item) => {
                        return (
                            <div className={`${info.name === item.name ? "mymessage" : "usermessage"}`}>
                                <div className="username">{item.name}</div>
                                <div className="usertext">{item.message}</div>
                            </div>
                        )
                    })
                }
            </ScrollToBottom>
            <div className="input">
                <input type="text" value={text} onKeyDown={(e)=> (e.key=="Enter"?handleClick:null)} onChange={(e) => settext(e.target.value)} />
                <button onClick={handleClick}>
                    send
                </button>
            </div>

        </div>
    )
}

export default Chat
