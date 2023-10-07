  // app.js
  const express = require('express');
  const app = express();
  const db = require("./Database/connecter")
  const UserRoutes = require("./Router/UserRouter")
  const jwt = require("jsonwebtoken")
  const Productrouter = require("./Router/ProductRouter")
  const AddToCartRouter = require("./Router/AddToCartRouter")
  const OrderRouter = require("./Router/OrderRouter")
  const cors = require("cors")
  // Middleware setup, if any


  // Use the userRoutes for handling user-related routes
  app.use('/user', UserRoutes); // This will prefix all routes in userRoutes with '/user'
  app.use('/product', Productrouter)
  app.use('/cart', AddToCartRouter)
  app.use("/order", require("./Router/OrderRouter"))
  app.use(cors())
  

  // Other route setups, if any

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
