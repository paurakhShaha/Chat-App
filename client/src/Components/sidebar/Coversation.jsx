import React from 'react'
import useConversation from '../../zustand/useCoversation';
import { useSocketContext } from '../../context/SocketContext';

function Coversation( {conversation,emojis}) {
  const {username,profilePic} = conversation;
  const {selectedConversation,setSelectedConversation} = useConversation();
  const {onlineUsers} = useSocketContext();
  console.log(onlineUsers);
  const isOnline = onlineUsers.includes(conversation._id);

  const isSlected = selectedConversation?._id === conversation._id; 
  
  return (
    <>
    <div className={` flex items-center hover:bg-sky-300 rounded gap-2 p-2 py-1 cursor-pointer ${
      isSlected ? "bg-sky-300" : ""
    }`} onClick={() => setSelectedConversation(conversation)}>
    <div className={`avatar ${isOnline ? "online" : ""}`}>
    <div className='w-12 rounded-full'>
        <img src={profilePic} alt="user avatar"/>
    </div>

    </div>
    <div className='flex flex-col flex-1'>
      <div className='flex gap-3 justify-between'>
        <p className='text-gray-200 font-bold'>{username}</p>
        <span className='text-xl'>{emojis}</span>

      </div>
      </div>
    </div>
    <div className='divider py-0 my-0 h-1'></div>
    </>
  )
}

export default Coversation