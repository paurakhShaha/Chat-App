import React from 'react'
import Conversation from './Coversation.jsx'
import useGetConversation from '../../hooks/useGetConversation.js'
import { getRandomEmoji } from '../../utils/emojis.js';
function ConversationList() {
  const {conversation,loading}= useGetConversation();
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversation.map((conv) => {
        return <Conversation key={conv._id} conversation={conv}  emojis={getRandomEmoji()}/>
      })}

      {loading ? <span className='loading loading-spinner mx auto'></span> : null}
      </div>
  )
}

export default ConversationList