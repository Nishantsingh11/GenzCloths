const mongoose = require("mongoose");
const CommentAndReviewSchema = new mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    review:{
        type:Number,
        required:true
    },  
    comment:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }

})


module.exports = mongoose.model("CommentAndReview", CommentAndReviewSchema);