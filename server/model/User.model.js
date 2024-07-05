
import mongooes from 'mongoose';

const userSchema = new mongooes.Schema(
  {
    fullname: {
      type : String,
      required: true
    } ,
    username: {
      type : String,
      required: true,
      unique: true
    } ,
    password: {
      type : String,
      required: true,
      minlenght: 6

    } ,
    gender:{
      type : String,
      required: true,
      enum  : ['male','female']
    },
    profilePic: {
      type : String,
      default: ''
    } 
    
    },{timestamps:true}
  
)


const User = mongooes.model('User', userSchema);

export default User;