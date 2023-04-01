import React, { useContext, useEffect } from 'react'
import io from "socket.io-client";
import Chatcontext from './Context/Chatcontext';
const socket = io.connect("http://localhost:4500");

const Chat = () => {
    const {info} = useContext(Chatcontext);
    useEffect(()=>{
        socket.emit("roomJoined",info);

    },[socket])
  return (
    <div className='main'>
        <h1>Live Chat</h1>
        <div className="chatBody"></div>
        <div className="input">
            <input type="text" />
            <button>
            send    
            </button>
        </div>
        <div className="joineduser">

        </div>
     
    </div>
  )
}

export default Chat
