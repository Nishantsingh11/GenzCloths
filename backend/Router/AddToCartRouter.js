const authMiddleware = require("../Middleware/authMiddleware");
const express = require("express");
const bodyparser = require("body-parser");
const CartItemSchema = require("../Schema/CartItemSchema");

const AddToCartRouter = express.Router();
AddToCartRouter.use(bodyparser.json());

AddToCartRouter.post("/addtocart", authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user;
    const cartItem = await CartItemSchema.findOne({ user: userId });
    if (!cartItem) {
      const newCart = new CartItemSchema({
        user: userId,
        items: [{ product: productId, quantity: quantity }],
      });
      await newCart.save();
      return res.status(200).json({ message: "Item added to cart" });
    } else {
      // If the user already has a cart, check if the item is already in the cart
      const existingItem = cartItem.items.find(
        (item) => item.product.toString() === productId
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        // If the item is not in the cart, add it

        cartItem.items.push({ product: productId, quantity: quantity });
      }
      await cartItem.save();
      return res.status(200).json({ message: "Item added to cart" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// Get the Cart of the user
AddToCartRouter.get("/getcart", authMiddleware, async (req, res) => {
    try{
        const userId = req.user;
        const CartItems = await CartItemSchema.findOne({user:userId})
        if(!CartItems){
            return res.status(200).json({message:"Cart is empty"})
        }
        else{
            return res.status(200).json({CartItems})
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:"Server Error"})
    }
})
// Increase the quantity of the item in the cart
AddToCartRouter.post("/increasequantity",authMiddleware, async (req,res)=>{
    try{

    
    const userId = req.user;
    const {productId} = req.body;
    const SelectedItem = await CartItemSchema.findOne({user:userId})
    if(!SelectedItem){
        res.status(400).json({message:"Cart is empty"})
    }
    else{
        const Item = SelectedItem.items.find(item=>item.product.toString()===productId)
        if(!Item){
            res.status(400).json({message:"Item not found"})
        }
        else{
            Item.quantity += 1
        }
        await SelectedItem.save()
        res.status(200).json({message:"Quantity increased By 1"})
    }
}
catch(err){
    console.log(err);
    res.status(400).json({error:"Server Error"})
}


})
// Decrease the quantity of the item in the cart
AddToCartRouter.post("/decreasequantity",authMiddleware, async (req,res)=>{
    try{ 
    const userId = req.user;
    const {productId} = req.body;
    const SelectedItem = await CartItemSchema.findOne({user:userId})
    if(!SelectedItem){
        res.status(400).json({message:"Cart is empty"})
    }
    else{
        const Item = SelectedItem.items.find(item=>item.product.toString()===productId)
        if(!Item){
            res.status(400).json({message:"Item not found"})
        }
        else{
            Item.quantity -= 1
        }
        await SelectedItem.save()
        res.status(200).json({message:"Quantity Decrease By 1"})
    }
}
catch(err){
    console.log(err);
    res.status(400).json({error:"Server Error"})
}
})

// Remove the item from the cart
AddToCartRouter.delete("/removeitem",authMiddleware, async (req,res)=>{
    try{

        const userID = req.user
        const {productId} = req.body
        const SelectedItem = await CartItemSchema.findOne({user:userID})
        if(!SelectedItem){
            res.status(400).json({message:"Cart is empty"})
        }
        else{
            const Item = SelectedItem.items.find(item => item.product.toString() === productId)
            if(!Item){
                res.status(400).json({message:"Item not found"})
            }
            else{
                SelectedItem.items.remove(Item)
                await SelectedItem.save()
                res.status(200).json({message:"Item removed from cart"})
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:"Server Error"})
    }
})

module.exports = AddToCartRouter;
