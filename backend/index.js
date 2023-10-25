  // app.js
  const express = require('express');
  const app = express();
  const db = require("./Database/connecter")
  const UserRoutes = require("./Router/UserRouter")
  const Productrouter = require("./Router/ProductRouter")
  const AddToCartRouter = require("./Router/AddToCartRouter")
  const OrderRouter = require("./Router/OrderRouter")
  const cors = require("cors")
  const wishlistRouter = require("./Router/WishlistRouter")
  const CommentAndReviewRouter = require("./Router/CommentAndReviewRouter")


  // Middleware setup, if any


  // Use the userRoutes for handling user-related routes
  app.use('/user', UserRoutes); // This will prefix all routes in userRoutes with '/user'
  app.use('/product', Productrouter)
  app.use('/cart', AddToCartRouter)
  app.use("/order",OrderRouter)
  app.use("/wishlist", wishlistRouter)
  app.use('/comment', CommentAndReviewRouter)
  app.use(express.urlencoded({ extended: true }));

  app.use(cors())
  

  // Other route setups, if any

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
