import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt" ;
import validator from 'validator';


// 1) login user

//create one ASYNCHrnS aDDER FN - name wiLL BE LoGInUSEr

const loginUser = async(req,res)=>{

  // 14)we need the email ,pwd frm the req body
  const {email,password}= req.body;

  try{
    // 15) check one user is available with this emailid
    const user = await userModel.findOne({email})   //by using this, if any acnt  is avilable, user acnt stored 
    //in user variable

    // 16) check whether we got any user or not
    //
    if(!user){  //If we dont have any user, in that case this if stmt is executed. when this if stmt executes
      //genrete one response
      return res.json({success:false, message:"User Doesn't exist"})  //if the user not available with that email id 
      //this msg displayed

    }

    //17) if we get the user, in that case we match the user pwd with stored pwd in db

       const isMatch = await bcrypt.compare(password,user.password)   
       //here we add the bcrypt packg. here pass two arguments - users pwd nd pwd stored in db
       //here we pass the pwd that the usr will enter while login to site , after that we pass the pwd 
       //stored in the db.  If these pwd match, this isMatch will be true. if it is not matching this will false


       if(!isMatch){  //if ismatch is false, that case executes 
         return res.json({success:false, message:"Invalid credentials"})  //if pwd not match, get this response
        }

      //if pwd matching , generate one token
      const token = createToken(user._id);  //here we send the users id. using this the token will generated
      //send this token as a response. 
      res.json({success:true,token})

      } 
      //if any error occurs 
      catch(error){
        console.log(error); 
        res.json({success:false, message:'Error'})
  }
}

// 10) create token

const createToken =(id) =>{    //this id genertd in mongodb 
  return jwt.sign({id},process.env.JWT_SECRET)     //create one objct where id is strored, providing salt - using this our data will
  //encrptd, for that in backend foldr , .env file  
  //created a token 
}


// 2) register user
//add one asyncHRNS FN - REGISTERUSER

const registerUser = async (req,res)=>{
       const {name,password,email}= req.body;  //IN THESE VARIABLES THE name,pwd,email Will be stored
       try{

        //frst check if any user with this email, If any user is already available with this mail, 
  // 3) genertae one response

        const exists = await userModel.findOne({email})

        //if this email is available for any account, then that acnt will be stored in this variable

  //4) 
        if(exists){        //If that email is there, get one response 
            return res.json({success:false, message:"User already exists"});

        }

  // 5) validating email format nd strong pwd
      if(!validator.isEmail(email)){  //it will check user email is valid email Or not. if is not valid 
         // in that case, generate one response

        return res.json({success:false, message:"Please enter a valid email"})

      }


  // 6) password validation 
     if(password.length<8){   //if pwd is less than 8 then get a response
       return res.json({success:false, message:"Please enter a strong password"});
     }

     
  // 7) TO encrypt the pwd we use the bcrypt package
     //hashing user pwd

     const salt = await bcrypt.genSalt(10)  //creating strongst pwd , simply giving 10 (greater than 8) 
     //if we give ths no, user giv strngst pwd

     const hashedPassword = await bcrypt.hash(password,salt) ; //pwd has been hashed nd save in the hash pwd 
     //variable

      
  // 8) creating new user
    const newUser = new userModel({
      name:name ,       //declared in lyn 20
      email: email,
      password : hashedPassword  //in this we didnt use pwd, we use hashdpwd 
    })
    

 // 9) to save this user in db
    const user = await newUser.save()

// 11) create token  - response to the user
//take the user id nd generate one token 
     const token=createToken(user._id)  //created token nd send this token as response

  // 12) response
  res.json({success:true,token})
    }

  // 13) if any eror in this code, generte catch eror
  catch(error)
{
  console.log(error);
   res.status(500).json({success: false, message: "Internal Server Error"});
}
}


export {loginUser,registerUser}