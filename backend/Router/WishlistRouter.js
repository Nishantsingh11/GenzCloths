const express = require("express");
const Wishlist = require("../Schema/WishListSchema");
const bodyParser = require("body-parser");
const ProductSchema = require("../Schema/ProductSchema");
const authMiddleware = require("../Middleware/authMiddleware");
const cors = require("cors");
const WishListRouter = express.Router();
WishListRouter.use(bodyParser.json());
WishListRouter.use(bodyParser.urlencoded({ extended: true }));
WishListRouter.use(cors());


WishListRouter.post("/createwishlist", authMiddleware, async (req, res) => {
  try {
    const userId = req.user;
    const { productId,quantity } = req.body;

    // Find the user's wishlist
    const existingWishlist = await Wishlist.findOne({ user: userId });

    if (existingWishlist) {
      // checking if the prodcut is already exist then increase the quantity
      const productExist = existingWishlist.items.find(
        (item) => item.productId == productId
      );
      if (productExist) {
        res.json({ msg: "Product already exist in wishlist" });
      } else {
        // Check if the 'items' array exists, and if not, initialize it
        if (!existingWishlist.items) {
          existingWishlist.items = [];
        }

        // Add the new item to the 'items' array
        existingWishlist.items.push({ productId });

        // Save the updated wishlist
        try {
          await existingWishlist.save();
          res.json({ msg: "Added to Wishlist successfully" });
        } catch (err) {
          res.status(400).json({ msg: "Error saving wishlist" });
        }
      }
    } else {
      // If the wishlist doesn't exist, create a new wishlist
      const newWishlist = new Wishlist({
        user: userId,
        items: [{ productId, quantity }],
      });

      try {
        await newWishlist.save();
        res.json({ msg: "Added to Wishlist successfully" });
      } catch (err) {
        res.status(400).json({ msg: "Error saving new wishlist" });
      }
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong" });
    console.log(err);
  }
});

// get the wishlist
WishListRouter.get("/getwishlist", authMiddleware, async (req, res) => {
  try {
    const id = req.user;
    const wishlist = await Wishlist.findOne({ user: id }).populate(
      "items.productId"
    ); // Populate the 'productId' field to fetch the product details

    if (wishlist) {
      res.json({ wishlist });
    } else {
      res.status(400).json({ msg: "Wishlist not found" });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong" });
  }
});

// remove the product from the wishlist
WishListRouter.delete(
  "/removewishlist/:productId",
  authMiddleware,
  async (req, res) => {
    try {
      const id = req.user;
      const { productId } = req.params;
      const wishlist = await Wishlist.findOne({ user: id });
      const updatedWishlist = wishlist.items.filter(
        (item) => item.productId != productId
      );
      wishlist.items = updatedWishlist;
      await wishlist.save();

      res.json({ msg: "Removed from wishlist successfully" });
    } catch (err) {
      res.status(400).json({ msg: "Not able to remove wishlist" });
      console.log(err);
    }
  }
);
module.exports = WishListRouter;
