const express = require("express");
const bodyParser = require("body-parser");
const Order = require("../Schema/OrderSchema");
const AuthMiddleware = require("../Middleware/authMiddleware");
const cors = require('cors')
const OrderRouter = express.Router();
OrderRouter.use(bodyParser.json());
OrderRouter.use(cors())

OrderRouter.post("/createorder", AuthMiddleware, async (req, res) => {
    try {
        const userId = req.user;
        const { items } = req.body; // Assuming items is an array of objects

        // Calculate the totalAmount by summing up the subtotals of all items
        const totalAmount = items.reduce((total, item) => total + item.quantity * item.price, 0);

        // Create an order with multiple items
        const order = await Order.create({
            user: userId,
            items: items,
            totalAmount: totalAmount
        });

        order.save()
            .then((savedOrder) => {
                res.status(201).json({ message: "Order created successfully", order: savedOrder });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: err.message });
            });

    } catch (err) {
        res.status(500).json({ message: err.message });
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
