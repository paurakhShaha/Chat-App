import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const{setAuthUser} = useAuthContext();

    const login = async ({username,password}) => {
      console.log(username,password);
    const sucess = handelInputError({username,password})

    if(!sucess){
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/v1/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({username,password})
      })
      const data = await response.json();
      if(response.ok){
        console.log(data)
        toast.success("Account LoggedIn successfully");
        localStorage.setItem('chat-user',JSON.stringify(data));
        setAuthUser(data);
        
      }
      else{
        toast.error(data.message)
      }
     }
     catch(err){
       toast.error(err)
     }
     finally{
       setLoading(false);
     }
  }
    return {loading,login};
}


export default useLogin;


function handelInputError({username,password}){
    if( !username ||!password ){
        toast.error("All fields are required")
        return false;
    }
    if(!password ){
        toast.error("Passwords is required")
        return false;
    }
    if(password.length < 8){
        toast.error("Password must be atleast 6 characters long")
        return false;
    }
    return true;

}