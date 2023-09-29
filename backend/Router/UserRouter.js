const User = require("../Schema/UserSchema");
const express = require("express");
const bodyParser = require("body-parser");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// app.use(bodyParser.json()); // Use bodyParser middleware first\
const router = express.Router();
router.use(bodyParser.json());


// // create a user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ msg: "Password and Confirm Password does not match" });
    }
    const data = User({
      username,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    data.password = hash;
    await data.save().then((user)=>{
        res.json({ msg: "User created successfully" });
    })
    .catch((err)=>{
        res.status(400).json({ msg: "something went wrong" });

    })
  } catch (err) {
    res.status(400).json({ msg: "Not able to create user" });
  }
});

module.exports = router;
