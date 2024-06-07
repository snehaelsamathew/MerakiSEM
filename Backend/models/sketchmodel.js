import mongoose from "mongoose";

const sketchSchema  = new mongoose.Schema({
    name: {type:String,required:true},
    description :{type:String, required:true},
    price : {type:Number, required:true},
    image:{type:String, required: true},
    
})

const sketchModel = mongoose.models.sketch || mongoose.model("sketch",sketchSchema);

export default sketchModel;