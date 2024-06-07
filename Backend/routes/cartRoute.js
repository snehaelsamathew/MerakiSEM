import express from 'express'
import { addToCart,removeFromCart,getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';


// 1) create one express router
const cartRouter = express.Router();
//using this router create multiple endpoint


// 2) created 3 api endpoint 
cartRouter.post("/add",authMiddleware,addToCart)       
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware, getCart)


export default cartRouter;