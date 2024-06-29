import ChatFrame from "../../Components/ChatFrame";
import VideoFrame from "../../Components/videoFrame";
export default function Meeting(){
    const roomID="aldmaskdsamd";
    return(
        <div className="w-screen h-screen bg-yellow-400">
                <h1 className="text-center text-[25px]">MeetingId {roomID}</h1>
            <div className="flex bg-red-300 w-full h-[90%]">
                <div className="w-[80%] h-full flex flex-col justify-center items-center">
                    <h1>Video Conferencing</h1>
                    <div>
                        <VideoFrame></VideoFrame>
                    </div>
                </div>
                <div className="w-[20%] h-full">
                    <h1>Chatting Room</h1>
                    <div>
                        <ChatFrame/>
                    </div>
                </div>
            </div>
        </div>
    )
}