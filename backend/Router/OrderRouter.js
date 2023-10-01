const express = require("express");
const bodyParser = require("body-parser");
const Order = require("../Schema/OrderSchema");
const AuthMiddleware = require("../Middleware/authMiddleware");
const OrderRouter = express.Router();
OrderRouter.use(bodyParser.json());

OrderRouter.post("/createorder", AuthMiddleware, async (req, res) => {
    try{

        const userId = req.user;
        const { productId, quantity, price } = req.body;
        const totalAmount = quantity * price;
        const item = {
            product:productId,
            quantity:quantity,
            price:price
        }
        const order = await Order.create({
            user:userId,
            items:[item],
            totalAmount:totalAmount    
        })
        order.save()
        res.status(201).json({message:"Order created successfully", order})
        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
});


// getting the order history of a user
OrderRouter.get("/orderhistory", AuthMiddleware, async(req,res)=>{
    try{
        const userId = req.user;
        const history = await Order.find({user:userId}).sort({orderDate:-1})


        res.status(200).json({history})
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
})

module.exports = OrderRouter;
