import mongoose from "mongoose";

//1) define one schema for our user

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true, unique:true},   //WE CANT add SamE eMAIl aGAIN For thAT SET UniquE aS TRuE
    password:{type:String, required:true}, 
    cartData:{type:Object, default:{}}   //manage the Userscart , by DEFAult, cart IS AN eMPTy object
},{minimize:false})  

//iF WE doNT ADD MINIMISE: FALSE, in THAT CASE, this cart data is noT CREATED BCz wE diDNT 
//prOVIDE Any data tHERE



// 2) IF THE MODEL IS ALREADY CEATED, THAT MODEL WILL USE || IF THE MODEL NOt creATED it will creaTE THE model 
const userModel =mongoose.models.user ||  mongoose.model("user",userSchema);

export default userModel;
