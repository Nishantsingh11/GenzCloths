const authMiddleware = require("../Middleware/authMiddleware");
const express = require("express");
const bodyparser = require("body-parser");
const CartItemSchema = require("../Schema/CartItemSchema");
const cors = require("cors");
const Product = require("../Schema/ProductSchema");
const CommentAndReviewSchema = require("../Schema/CommentAndReview");

const CommentAndReviewRouter = express.Router();
CommentAndReviewRouter.use(bodyparser.json());
CommentAndReviewRouter.use(cors());

CommentAndReviewRouter.post("/addcomment", authMiddleware, async (req, res) => {
  try {
    const userId = req.user;
    const { product, review, comment } = req.body;
    const newComment = new CommentAndReviewSchema({
      user: userId,
      product: product,
      review: review,
      comment: comment,
    });
    await newComment.save();
    res.status(200).json({ message: "Comment added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// get all the commnets and reviews of a product
CommentAndReviewRouter.get("/getcomment/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const data = await CommentAndReviewSchema.find({ product: productId });
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});
// edit that commnet by the same user
CommentAndReviewRouter.put(
  "/editcomment/:commentId",
  authMiddleware,
  async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user;
    const { comment } = req.body;
    try {
      const data = await CommentAndReviewSchema.findOne({ _id: commentId });
      if (!data) {
        return res.status(400).json({ error: "Comment not found" });
      }
      if (data.user.toString() !== userId) {
        return res.status(400).json({ error: "Not authorized" });
      }
      data.comment = comment;
      await data.save();
      res.status(200).json({ message: "Comment updated" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server Error" });
    }
  }
);

// delete a commnet
CommentAndReviewRouter.delete(
  "/deletecomment/:commentId",
  authMiddleware,
  async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user;
    try {
      const data = await CommentAndReviewSchema.findOne({ _id: commentId });
      if (!data) {
        return res.status(400).json({ error: "Comment not found" });
      }
      if (data.user.toString() !== userId) {
        return res.status(400).json({ error: "Not authorized" });
      }
      await CommentAndReviewSchema.deleteOne({ _id: commentId }); // Use deleteOne to remove the comment
      res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server Error" });
    }
  }
);

module.exports = CommentAndReviewRouter;
