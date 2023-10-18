const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productMainCategory:{
        type:String,
        required:true
    },
    productSubCategory:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        // required:true
    },
    productQuantity:{
        type:Number,
        required:true
    },
    productSize:{
        type:String,
        required:true
    },
    productColor:{
        type:String,
        required:true
    },
    productBrand:{
        type:String,
        required:true
    },
    productRating:{
        type:String,
        // required:true
    },
    productReview:{
        type:String,
        // required:true
    },
    productDiscount:{
        type:Number,
        // required:true
    },
    productDiscountPrice:{
        type:Number,
        // required:true
    },
    productTags:{
        type:String,
        // required:true
    }, 
    productMaterials:{
        type:String,
        // required:true

    },
    productDate:{
        type:Date,
        default:Date.now
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})
module.exports = mongoose.model("Product",ProductSchema)