import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useCoversation';
import { extractTime } from '../../utils/extracttime';
function Message({message}) {
  const{authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
  const profileImage = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const chatBubble = fromMe ? 'bg-blue-400' : 'bg-gray-300';
  return (
    <div className={chatClassName}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profileImage} alt="Avatar" />
        </div>

      </div>
      <div className={`chat-bubble text-white  ${chatBubble}`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{extractTime(message.createdAt)}</div>
    </div>
  )
}

export default Message