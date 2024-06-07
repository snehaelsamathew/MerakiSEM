//here we create an ordermodel using that we can save the order in db

import mongoose from 'mongoose'


// 1) creating schema for order

const orderSchema = new mongoose.Schema({  //define the structure of orderschema in this object
    userId:{type:String, required:true},    
    items:{type:Array, required:true},   
    amount:{type:Number, required:true}, 
    address:{type:Object, required:true}, 
    status:{type:String, default:"Sketch Processing"}, //here we set one default value. in this we store sketch
    //processing. whenevr the order will placed the status will be sketchprocessing.

    date:{type:Date, default:Date.now()}, //in this used the default value. whenever placed the order the date
    //will be saved using the current date

    payment:{type:Boolean, default:false} //whenever the new order will be placed the payment stmnt will be false

})


// 2) using this schema we will create the ordermodel

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema)


export default orderModel