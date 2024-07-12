import React from 'react'
import { useState } from 'react'
import useConversation from '../zustand/useCoversation'
import toast from 'react-hot-toast';

export default function useSentMesssage() {
  const {messages,setMessages,selectedConversation} = useConversation();
  const [loading,setLoading] = useState(false);

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/v1/message/send/${selectedConversation?._id}`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify({message})
      })
      const data = await res.json();
      if(res.error){
        toast.error(data.message);
      }
      setMessages([...messages,data]);
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
 }
 return {sendMessage,loading};
}
