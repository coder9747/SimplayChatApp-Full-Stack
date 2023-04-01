import { useState } from "react";
import Chatcontext from "./Chatcontext";

const Chatstate = (props)=>
{
    const [info,setInfo] = useState({
        name:"",
        roomId:"",
    })
    return(
        <Chatcontext.Provider value={{info,setInfo}}>
            {props.children}
        </Chatcontext.Provider>
    )
}
export default Chatstate;