import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  const isMessaging = true
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    

      {!isMessaging ?
       <>
      <div className='flex flex-col items-center justify-center h-full'>
        <p>Hey Sele</p>
      </div>
      </>
     :
     <>
      {/* Header */}
      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text'>TO:
          </span>
          <span className='text-gray-900 font-bold mx-2'>
            John Doe
          </span>
      </div>
      <Messages/>
      <MessageInput/> 
     </> 
      }
    </div>
  )
}

export default MessageContainer