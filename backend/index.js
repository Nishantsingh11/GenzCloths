// app.js
const express = require('express');
const app = express();
const db = require("./Database/connecter")
const UserRoutes = require("./Router/UserRouter")
const jwt = require("jsonwebtoken")
const Productrouter = require("./Router/ProductRouter")
// Middleware setup, if any


// Use the userRoutes for handling user-related routes
app.use('/user', UserRoutes); // This will prefix all routes in userRoutes with '/user'
app.use('/product', Productrouter)

// Other route setups, if any

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
