import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://snehamathew278:merakisem@cluster0.wmwj0dr.mongodb.net/Merakisem').then(()=>console.log('DB Connected'));

}