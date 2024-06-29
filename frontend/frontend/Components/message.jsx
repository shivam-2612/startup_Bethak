export default function Message({username,message}){
    let time=Date.now();
    
    return(
        <div className="flex flex-col bg-red-200 m-4 relative top-2 rounded-md p-3">
            <h1 className="text-red-400 text-bold">Vanshaj Tiwari</h1>
            <span className="max-w-[200px]">Message sk ksm skm skm mk mksm sk sent</span>
            <span className="text-[10px]">{time}</span>
        </div>
    )
}