import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {placeOrder} from '../controllers/orderController.js'

// 1) using this express create the router

 const orderRouter = express.Router();  //using this router we will create multiple router

 // 2) create endpoint for the placeorder

 orderRouter.post("/place",authMiddleware,placeOrder);



 export default orderRouter;