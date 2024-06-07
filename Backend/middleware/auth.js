import jwt from 'jsonwebtoken'

// 1) create one async ader fn 
const authMiddleware = async(req,res,next) =>{

// 2) frst we take the token from users using headers
const {token} = req.headers; 
 if(!token)  //check weathr we got the token or not
{
   return res.json({success:false,message:'Not Authorized Login Again'})    
   //if token  not available in that case, return one response
}
try{              //if we have the token, we decode that token
  const token_decode = jwt.verify(token,process.env.JWT_SECRET);        //token decoded (jwt_secrt from .env)
  req.body.userId = token_decode.id;
  next();

}
catch(error){
    console.log(error);
    res.json({success:false, message:'Error'})
}


}


export default authMiddleware;