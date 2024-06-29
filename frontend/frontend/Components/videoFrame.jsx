import { useEffect, useRef, useState } from "react"

export default function VideoFrame(){
        const [isRecording, setIsRecording] = useState(false);
        const [mediaBlobUrl, setMediaBlobUrl] = useState(null);
        const mediaRecorderRef = useRef(null);
        const mediaStreamRef = useRef(null);
        const chunksRef = useRef([]);
    
        useEffect(() => {
            const getMedia = async () => {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                    mediaStreamRef.current.srcObject = stream;
                    mediaStreamRef.current.play();
                } catch (error) {
                    console.error("Error accessing media devices.", error);
                }
            };
    
            getMedia();
    
            return () => {
                if (mediaStreamRef.current && mediaStreamRef.current.srcObject) {
                    const tracks = mediaStreamRef.current.srcObject.getTracks();
                    tracks.forEach(track => track.stop());
                }
            };
        }, []);
    
        const startRecording = () => {
            if (mediaStreamRef.current && mediaStreamRef.current.srcObject) {
                mediaRecorderRef.current = new MediaRecorder(mediaStreamRef.current.srcObject);
                mediaRecorderRef.current.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        chunksRef.current.push(event.data);
                    }
                };
                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(chunksRef.current, { type: 'video/webm' });
                    setMediaBlobUrl(URL.createObjectURL(blob));
                    chunksRef.current = [];
                };
                mediaRecorderRef.current.start();
                setIsRecording(true);
            }
        };
    
        const stopRecording = () => {
            if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stop();
                setIsRecording(false);
            }
        };
    return(
        <div className="h-[200px] w-[200px] bg-red-400 m-4 rounded-lg flex flex-col justify-center items-center">
            <h1>Vanshaj Tiwari</h1>
            <div className="flex justify-center items-center">
             <video src={mediaBlobUrl} controls style={{ width: '500px', height: 'auto' }} autoPlay></video>
                <div className=" fixed left-[50%] bottom-8 w-0">
                    <div className="flex justify-center bg-red-200">

        
                    <button className="p-3 border-2 border-black bg-white rounded-lg text-[25px] m-3 hover:pointer">
                        <i className="fa-solid fa-video"></i>
                        <i className="fa-solid fa-video-slash"></i>
                        
                    </button>
                    <button className="p-3 border-2 border-black bg-white rounded-lg  text-[25px] m-3 hover:pointer">
                        <i className="fa-solid fa-volume-high"></i>
                        <i class="fa-solid fa-volume-xmark"></i>
                        
                    </button>
                    <button className="p-3 border-2 border-black bg-white rounded-lg  text-[25px] m-3 hover:pointer" >
                        <i className="fa-solid fa-desktop"></i>
                    </button>
                    <button className="p-3 border-2  relative border-black bg-white rounded-lg  text-[25px] m-3 hover:pointer" >
                                    <div>
                                {isRecording ? (
                                    <button onClick={stopRecording}>Stop Recording</button>
                                ) : (
                                    <button onClick={startRecording}>Start Recording</button>
                                )}
                                    </div>
                    </button>
                    <button className="p-3 border-2 border-black bg-white rounded-lg  text-[25px] m-3 hover:pointer">
                        <i className="fa-solid fa-camera-retro"></i>
                    </button>
                    <button className="p-3 border-2 border-black rounded-lg text-white bg-red-400 flex justify-center items-center m-3  hover:pointer">
                        <i className="fa-solid fa-x"></i>&nbsp;
                        <span className="font-bold">END</span>
                    </button>
        </div>
    </div>
            </div>
        </div>
    )
}



