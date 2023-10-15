const authMiddleware = require("../Middleware/authMiddleware");
const express = require("express");
const bodyparser = require("body-parser");
const CartItemSchema = require("../Schema/CartItemSchema");
const cors = require("cors");
const Product = require("../Schema/ProductSchema");

const AddToCartRouter = express.Router();
AddToCartRouter.use(bodyparser.json());
AddToCartRouter.use(cors());

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
// Import necessary modules and schemas
AddToCartRouter.get("/getcart", authMiddleware, async (req, res) => {
    try {
      const userId = req.user;
      const cartItems = await CartItemSchema.findOne({ user: userId });
  
      if (!cartItems) {
        return res.status(200).json({ message: "Cart is empty" });
      }
  
      // Extract product IDs and quantities from the cart items and fetch product details
      const cartProductDetails = await Promise.all(
        cartItems.items.map(async (cartItem) => {
          const product = await Product.findOne({ _id: cartItem.product });
          if (!product) {
            return {
              productDetails: null,
              quantity: null,
              subtotal: null,
            };
          }
          return {
            productDetails: product,
            quantity: cartItem.quantity,
            subtotal: product.productDiscountPrice * cartItem.quantity,
          };
        })
      );
  
      // Calculate the total by summing the subtotals
      const total = cartProductDetails.reduce(
        (acc, cartItem) => (cartItem.subtotal !== null ? acc + cartItem.subtotal : acc),
        0
      );
  
      return res.status(200).json({ cartItems: cartProductDetails, total });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server Error" });
    }
  });
  
// Increase the quantity of the item in the cart
AddToCartRouter.post("/increasequantity", authMiddleware, async (req, res) => {
  try {
    const userId = req.user;
    const { productId } = req.body;
    const SelectedItem = await CartItemSchema.findOne({ user: userId });
    if (!SelectedItem) {
      res.status(400).json({ message: "Cart is empty" });
    } else {
      const Item = SelectedItem.items.find(
        (item) => item.product.toString() === productId
      );
      if (!Item) {
        res.status(400).json({ message: "Item not found" });
      } else {
        Item.quantity += 1;
      }
      await SelectedItem.save();
      res.status(200).json({ message: "Quantity increased By 1" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Server Error" });
  }
});
// Decrease the quantity of the item in the cart
AddToCartRouter.post("/decreasequantity", authMiddleware, async (req, res) => {
  try {
    const userId = req.user;
    const { productId } = req.body;
    const SelectedItem = await CartItemSchema.findOne({ user: userId });
    if (!SelectedItem) {
      res.status(400).json({ message: "Cart is empty" });
    } else {
      const Item = SelectedItem.items.find(
        (item) => item.product.toString() === productId
      );
      if (!Item) {
        res.status(400).json({ message: "Item not found" });
      } else {
        Item.quantity -= 1;
      }
      await SelectedItem.save();
      res.status(200).json({ message: "Quantity Decrease By 1" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Server Error" });
  }
});

// Remove the item from the cart
AddToCartRouter.delete("/removeitem", authMiddleware, async (req, res) => {
  try {
    const userID = req.user;
    const { productId } = req.body;
    const SelectedItem = await CartItemSchema.findOne({ user: userID });
    if (!SelectedItem) {
      res.status(400).json({ message: "Cart is empty" });
    } else {
      const Item = SelectedItem.items.find(
        (item) => item.product.toString() === productId
      );
      if (!Item) {
        res.status(400).json({ message: "Item not found" });
      } else {
        SelectedItem.items.remove(Item);
        await SelectedItem.save();
        res.status(200).json({ message: "Item removed from cart" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Server Error" });
  }
});

module.exports = AddToCartRouter;
