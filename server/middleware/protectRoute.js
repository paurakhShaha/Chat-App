import jwt from "jsonwebtoken";
import User from "../model/User.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({message:"No Jwt Token Found"});


    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if(!verified){
          return res.status(401).json({message:"Unauthorized Jwt Token"});
    }

    const user = await User.findById(verified.id).select('-password');
    if(!user){
          return res.status(401).json({message:"No User Found with this token"});
    }

    req.user = user;
    next();
    
  } catch (error) {
    res.status(500).json({message:"Error in sending message" ,error:error.message});
  }
}


export default protectRoute;