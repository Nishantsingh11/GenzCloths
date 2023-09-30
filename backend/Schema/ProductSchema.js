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
    productCategory:{
        type:String,
        required:true
    },
    productPrice:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        // required:true
    },
    productQuantity:{
        type:String,
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
        type:String,
        // required:true
    },
    productDiscountPrice:{
        type:String,
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
    }

})
module.exports = mongoose.model("Product",ProductSchema)