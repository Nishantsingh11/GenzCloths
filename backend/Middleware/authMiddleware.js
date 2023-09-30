const jwt = require("jsonwebtoken");
const User = require("../Schema/UserSchema");
require("dotenv").config();
module.exports = (req, res, next) => {
  // get token from header
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user data to the request object
    req.user = decoded.id;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
