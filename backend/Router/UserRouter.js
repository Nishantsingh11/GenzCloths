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


// Making endpoint for login 
router.post("/login", async (req,res)=>{

try{
    const {usernameoremail, password} = req.body;
    if(!usernameoremail || !password){
      return res.status(400).json({msg: "Please enter all fields"})
    }
  const user = await User.findOne({$or:[{username: usernameoremail},{email: usernameoremail}]})
  if(!user){
    res.status(400).json({msg: "Wrong credentials"})
  }
  const isPassword = bcrypt.compare(password,user.password)
  if(!isPassword){
    res.status(400).json({msg: "Wrong credentials"})
  }
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
  res.json({token})
}
catch(err){
  console.log("err",err);
  res.status(400).json({msg: "Something went wrong"})
}

})

module.exports = router;
