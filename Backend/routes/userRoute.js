import express from 'express'
import {loginUser, registerUser} from '../controllers/userController.js';

// 1) create one ROUTER USING EXPRESS router
const userRouter = express.Router()

// 2) data of user (email id or pwd) 
//post method

userRouter.post("/register",registerUser) 
userRouter.post("/login",loginUser)

export default userRouter;
