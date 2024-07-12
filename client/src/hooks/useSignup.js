import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {

    const [loading, setLoading] = useState(false);
    const{setAuthUser} = useAuthContext();

    const signup = async ({fullname,username,gender,password,confirmPassword}) => {
    const sucess = handelInputError({fullname,username,gender,password,confirmPassword})

    if(!sucess){
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/v1/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({fullname,username,gender,password,confirmPassword})
      })
      const data = await response.json();
      if(response.ok){
       
        toast.success("Account created successfully")
        localStorage.setItem('chat-user',JSON.stringify(data));
        setAuthUser(data);
      }
      else{
        toast.error(data.message)
      }
      

     }
     catch(err){
       toast.error("Something went wrong")
     }
     finally{
       setLoading(false);
     }
  }
    return {loading,signup};
}


export default useSignup;


function handelInputError({fullname,username,gender,password,confirmPassword}){
    if(!fullname || !username || !gender || !password || !confirmPassword){
        toast.error("All fields are required")
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false;
    }
    if(password.length < 8){
        toast.error("Password must be atleast 6 characters long")
        return false;
    }
    return true;

}