"use client"
import React,{ useState } from 'react'

const ChatBoat = () => {
  let [close,setCLose]=useState(false);
  let [inputMessage,setinputMessage]=useState();
  let [messages,setMessages]=useState([{message:"Hi lets chat with admit",from:"boat"}]);
  // console.log(inputMessage)
  return (
    <>
    <div className="fixed z-40 bottom-0 right-0 mb-4 mr-4">
      <button
        onClick={()=>setCLose(prv=>!prv)}
        id="open-chat"
        className="bg-[#f59f0bd6] text-white py-2 px-4 rounded-md hover:bg-[#f59f0b] transition duration-300 flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Chat with Admin Bot
      </button>
    </div>
    {
      close?
      <div id="chat-container" className="z-40 transition-all duration-1000 fixed bottom-16 right-4 w-96">
        <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
          <div className="p-4 border-b bg-[#172554] text-white rounded-t-lg flex justify-between items-center">
            <p className="text-lg font-semibold">Admin Bot</p>
            <button onClick={()=>setCLose(prv=>!prv)} id="close-chat" className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"  fill="none"  viewBox="0 0 24 24"  stroke="currentColor">
                <path  strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2}  d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div id="chatbox" className="p-4 h-60 overflow-y-auto">
            {/* Chat messages will be displayed here */}
            {
              messages?.map((message,index)=>(
                <div 
                  key={index} 
                  className={`mb-2 ${message.from=="user"? "text-right" : message.from=="boat"?"": ""} `}
                >
                  <p className={`rounded-lg py-2 px-4 inline-block ${message.from=="user"? "bg-[#172554] text-white" : message.from=="boat"?" bg-gray-200 text-gray-700": ""} `}>
                    {message.message}
                  </p>
                </div>
              ))
            }
            
          </div>
          <div className="p-4 border-t flex">
            <input
              onChange={(e)=>{setinputMessage(e.target.value)}}
              id="user-input"
              type="text"
              value={inputMessage}
              placeholder="Type a message"
              className="w-full outline-none px-3 py-2 border rounded-l-md focus:outline-none "
            />
            <button
              onClick={()=>{
                setMessages((prv)=>[...prv,{message:inputMessage,from:"user"}]);
                setinputMessage(prv=>"")
              }}
              id="send-button"
              className="bg-[#172554] text-white px-4 py-2 rounded-r-md hover:bg-[#172554] transition duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </div>:
      ""
    }
  </>
  
  )
}

export default ChatBoat