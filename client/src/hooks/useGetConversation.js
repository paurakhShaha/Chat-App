import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
const useGetConversation = () => {

  const [loading, setLoading] = useState(false);
  const [conversation,setconversation] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      
      try {
        const res = await fetch("/api/v1/user/");
        const data = await res.json();
        if(data.error){
          toast.error(data.error)
        }
        setconversation(data);
      } catch (error) {
        toast.error(error.message)
      }finally{
        setLoading(false);
      }
      
    }
    getConversation();
  },[])
  return {loading,conversation};
}

export default useGetConversation