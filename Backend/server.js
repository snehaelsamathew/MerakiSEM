import express, { response } from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import sketchRouter from "./routes/sketchroute.js"
import path from 'path';
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//app config
const app= express()
const port= 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoints
app.use("/api/sketch",sketchRouter)

app.use("/images",express.static('uploads'))   

app.use("/api/user",userRouter)     //user registration

app.use("/api/cart",cartRouter)  

app.use("/api/order",orderRouter)

app.get("/", (req,res)=>{
  res.send("API Working")
})

app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`);
})

