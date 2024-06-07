import userModel from '../models/userModel.js'

//create 3 adder fns
//frst, add to cart
//scnd , remove frm cart
//thrd, get from cart

// 1) add items  to user cart


const  addToCart = async (req,res)=>{
   try{                     //in try block, add the userdata 
      
     let userData = await userModel.findById(req.body.userId)  //to find userdata, here use the usermodel
     //findmethod use. in this add an object where add condition. userid should be same as req.body.userid that
     //we get using the middleware
     
     let cartData = await userData.cartData;   //usr cartdata will store in this variable.

     //when the user want to add items to cart, they send the token with that they send the itemid
     if(!cartData[req.body.itemId])  //no entry with the itemid
    {
        cartData[req.body.itemId]=1;  
        //if the user want to add the product in the cart with one productid, from that id there is no entry 
        //in the cart, in that case they create a new entry. 
    }
    else{
        //if the cartid available then we will increaese that value
        cartData[req.body.itemId] +=1
    }
    //when that item willbe added in the cart, then we have to update the users cart with new cartdata
    await userModel.findByIdAndUpdate(req.body.userId,{cartData}); //new cartdata get aftr that get response
   
    res.json({success:true,message:'Added to Cart'}); 
   
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:'Error'})
    }
}


//2) remove items from usercart
const removeFromCart = async (req,res) =>{
    try{
      //find users data by using findbyid method
      let userData = await userModel.findById(req.body.userId)  //userid get from middleware

      let cartData = await userData.cartData;  //frm the users data we stored the cartdata in this variable

      if(cartData[req.body.itemId]>0){  //check in this id the item is availble or not
        cartData[req.body.itemId] -=1; //quantity will decrease


      }
      await userModel.findByIdAndUpdate(req.body.userId,{cartData});

      res.json({success:true,message:'Removed from Cart'})

    }
    catch(error){
        console.log(error);
        res.json({success:false,message:'Error'})

    }
}


// 3) fetch user cart data
const getCart = async(req,res) =>{
   try{
    let userData = await userModel.findById(req.body.userId);  //from this userdata we extract the cartdata

    let cartData = await userData.cart;  //using this the users userdata will stored in this variable

    //after getting this data we simply create one response
    res.json({success:true,cartData}) //it will genertae the response true, it displays the cartdata 
   }
   catch(error){
    console.log(error);
    res.json({success:false,message:'Error'})
   }
}

export {addToCart,removeFromCart,getCart}