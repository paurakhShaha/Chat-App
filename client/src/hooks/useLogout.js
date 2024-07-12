import { useState } from 'react';
import toast from 'react-hot-toast';

import { useAuthContext } from '../context/AuthContext';

const useLogout = () => { 

  const[loading,setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
  const logout = async () => {
  setLoading(true); 
  try {
    const response = await fetch("/api/v1/auth/logout",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await response.json();
    if(data.error){
      toast.error(data.message);
    }
    localStorage.removeItem('chat-user');
    setAuthUser(null);
  } catch (error) {
    toast.error("Something went wrong");
  }finally{
    setLoading(false);
  }
 

  
  }

  return {loading,logout};
}

export default useLogout;