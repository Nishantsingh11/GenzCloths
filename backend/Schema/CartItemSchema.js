const mongoose = require("mongoose");
const CartItemSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductSchema",
        required:true
    },
    quantity:{
        type:Number,
        default:1,
        min:1
    }
})  
const ShoppingCartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserSchema",
        required:true
    },
    items:[CartItemSchema],

})
module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema);
