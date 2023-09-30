const User = require("../Schema/UserSchema");
const express = require("express");
const bodyParser = require("body-parser");
const authMiddleware = require("../Middleware/authMiddleware");

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
    await data
      .save()
      .then((user) => {
        res.json({ msg: "User created successfully" });
      })
      .catch((err) => {
        res.status(400).json({ msg: "something went wrong" });
      });
  } catch (err) {
    res.status(400).json({ msg: "Not able to create user" });
  }
});

// Making endpoint for login
router.post("/login", async (req, res) => {
  try {
    const { usernameoremail, password } = req.body;
    if (!usernameoremail || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const user = await User.findOne({
      $or: [{ username: usernameoremail }, { email: usernameoremail }],
    });
    if (!user) {
      res.status(400).json({ msg: "Wrong credentials" });
    }
    const isPassword = bcrypt.compare(password, user.password);
    if (!isPassword) {
      res.status(400).json({ msg: "Wrong credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.log("err", err);
    res.status(400).json({ msg: "Something went wrong" });
  }
});

// updaing the user like there first name, last name,address,phone number,etc
// router.put("/updateprofile", authMiddleware, async (req, res) => {
//   try {
//     const {
//       firstname,
//       lastname,
//       dateofbirth,
//       gender,
//       phonenumber,
//       street,
//       city,
//       state,
//       country,
//       pincode,
//     } = req.body;
//     const id = req.user.id;
//     const findUser = await User.findOne({ _id: id });
//     if (!findUser) {
//       return res.status(400).json({ msg: "User does not exist" });
//     }
//     const data = await User.findOneAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           firstname: firstname,
//           lastname: lastname,
//           dateofbirth: dateofbirth,
//           gender: gender,
//           phonenumber: phonenumber,
//           street: street,
//           city: city,
//           state: state,
//           country: country,
//           pincode: pincode,

//         }, // update the user


//       }
//       { new: true } // Return the updated user data

//     );
//   } catch (err) {
//     console.log("err", err);
//     res.status(400).json({ msg: "Something went wrong" });
//   }
// });
// Import necessary modules and User model at the top of your userRoutes.js file

// ...

// Update user profile route (protected)
router.put("/updateprofile", authMiddleware, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phoneNumber,
      street,
      city,
      state,
      country,
      pincode,
    } = req.body;

    const id = req.user;

    // Check if the user exists
    const findUser = await User.findOne({ _id: id });

    if (!findUser) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    // Update the user's profile data
    const updatedUser = await User.findOneAndUpdate(
      // act kind of filter 
      { _id: id },
      {
        //This is a MongoDB update operator that specifies which fields you want to update and their new values.
        $set: {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
          gender: gender,
          phoneNumber: phoneNumber,
          address: {
            street: street,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
          },
        },
      },
      { new: true } // Return the updated user data
    );

    if (!updatedUser) {
      return res.status(400).json({ msg: "Failed to update user profile" });
    }

    res.json({ msg: "User profile updated successfully", user: updatedUser });
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ msg: "Something went wrong" });
  }
});





module.exports = router;
