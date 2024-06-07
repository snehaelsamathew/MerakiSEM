import React, {  useContext, useState } from 'react'
import './LoginPopup.css'
import cross_icon from '../../assets/cross_icon.png';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

  //3) fetch the url from storecntxt.js using context api
  const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState]=useState("Login")
   
    // 1) create state variable where we saVe the users name, email nd pwd
    const [data,setData] =useState({
      name:"",
      email:"",
      password:""
    })

    // 2) create one onchange handler that will take the data from the input field nd save it in state variable

  const onChangeHandler =(event) => {     //in adder fn pass the event. from this event we will extract the 
  //name nd value
   const name = event.target.name;  
   const value = event.target.value; //here we extracted the name nd value from this event 

   //set this value in state variable
   setData(data=>({...data,[name]:value}))  //pass the previous data. in previous data change the name nd updated
   //with the updated value

 }

 //4) for user login , create one function. that is onlogin
 const onLogin = async (event) => {
    event.preventDefault()  // not restore the page

    // 5) api call
    let newUrl = url;
    if(currState==="Login"){   //if the current state is login
      newUrl += "/api/user/login"   //newurl will be the login api
    }
    else   //if current state is not login
    {
      newUrl += "/api/user/register"  //newurl will be registerapi
    }
    
    //call api
    const response = await axios.post(newUrl,data); 
    //this api work in both login nd reg. if the state is login it will hit the login api, if state is register
    //it will hit the reg api
    if(response.data.success){  //if response is true, it means we are loggin in or registerd. we will get a token
      //to save the token use state variable
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token) //sav in localstorage
      setShowLogin(false)   //loginpage will hidden
   }
   else{  //if the response is false
     alert(response.data.message)

   }

 }

 return (
  <div className='login-popup'>
   <form onSubmit={onLogin} className='login-popup-container'>
   <div className='login-popup-title'>
      <h2>{currState}</h2>
   
      <img width={'30PX'} height={'30px'} onClick={()=>setShowLogin(false)} src={cross_icon} alt=""/>

    </div>

    <div className='login-popup-inputs'>
        {currState==="Login"?<></>: <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
       <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your email' required/>
       <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required/>
      </div>

      <button type='submit'>{currState==="Sign Up"?"Create Account": "Login"}</button>


      <div className='login-popup-condition'>
        <input type='checkbox' required/>
        <p>By Continuing, I agree to the terms of use & privacy policy.</p>
      </div>

      {currState==="Login"
      ?  <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
      :   <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
 }
   </form>
</div>
  
  
  )
}

export default LoginPopup


