import jwt from 'jsonwebtoken';

const genJWTokenandSetCookie = (id,res) => {
  const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn : "15d"})

  res.cookie('jwt',token,{
    maxAge : 15*24*60*60*1000,
    httpOnly : true,
    sameSite: process.env.NODE_ENV === 'production',
  })
}

export default genJWTokenandSetCookie;