import Chatcontext from "./Chatcontext";

const Chatstate = (props)=>
{

    return(
        <Chatcontext.Provider value={"hey"}>
            {props.children}
        </Chatcontext.Provider>
    )
}
export default Chatstate;