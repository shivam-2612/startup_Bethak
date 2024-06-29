import { useState } from "react";
import Message from "./message";

function handleMessageSend(){

}


export default function ChatFrame(){
    const username="Vanshaj Tiwari";
    const [msgs,setMsg]=useState("");

    return(
        <div className="h-[590px] bg-blue-400">
            <div className=" h-full">
                <Message/>
                {
                    // msgs.map(value=><Message username={value.username} message={value.message} />)
                }
            </div>
            <div className="absolute bottom-14 flex">
                <input type="text" className="w-[197.5px]" value={msgs} onChange={(e)=>e.target.value} />
                <button className="bg-black text-white w-[100px]">Chat</button>
            </div>
        </div>
    )
}