import User from "../model/User.model.js";
import bcrypt from 'bcryptjs';
import genJWTokenandSetCookie from "../utils/genjwttoken.js";


export const login = async (req, res) => {
  const { username, password } = req.body;
  if(!username || !password){
    return res.status(400).json({message:"All fields are required"});
  }
  try {
    const user =  await User.findOne({username});
  if(user){
    const passwordMatch =  bcrypt.compare(password,user.password);
    if(passwordMatch){
      genJWTokenandSetCookie(user._id,res);
      return res.json({message:"Login Successful"}).status(200);
    }
    else{
      return res.status(400).json({message:"Invalid credentials"});
    }
  }
  else{
    return res.status(400).json({message:"Invalid credentials"});
  
  }
  } catch (error) {
    res.status(500).json({message:"Error in login"});
  }
  
}
export const signup =async (req, res) => {
  const { fullname,username,password,confirmPassword,gender } = req.body;
  if(!fullname || !username || !password || !confirmPassword ){
    return res.status(400).json({message:"All fields are required"});
  }
  if(password !== confirmPassword){
    return res.status(400).json({message:"Passwords do not match"});
  }
  const hashedPassword = await bcrypt.hash(password,12);
  
  try{
    const user =  await User.findOne({username});
  if(user){
    return res.status(400).json({message:"User already exists"});
  }
  const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`
  const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`

  const profilePic = gender === 'male' ? boyPic : girlPic;

  const newUser = new User({
    fullname,
    username,
    password : hashedPassword,
    gender,
    profilePic
  });
  await newUser.save();

  genJWTokenandSetCookie(newUser._id,res);

   
    res.json({msg:"New user created sucessfully"}).status(201);
}
  
  catch(error){
    console.log(error);
    res.status(500).json({message:"Error in creating new user"}); 
  
}
}
export const logout = async (req, res) => {
  try {
    res.cookie("jwt","",{
      maxAge:0,
      httpOnly:true
    })
    res.json({message:"Logout successful"}).status(200);
  } catch (error) {
    res.status(500).json({message:"Error in logout"});
  }
}