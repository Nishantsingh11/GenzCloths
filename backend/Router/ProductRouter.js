const ProductSchema = require("../Schema/ProductSchema");

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./UserRouter");
const Productrouter = express.Router();
Productrouter.use(bodyParser.json());
Productrouter.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
const authMiddleware = require("../Middleware/authMiddleware");
Productrouter.use(cors());
const multer = require("multer")
const upload = multer({ dest: "uploads/" }); // Destination folder for uploaded files
Productrouter.use("/uploads",express.static("uploads"))

// Create a Product
Productrouter.post("/createproduct", authMiddleware,upload.single("productImage"), (req, res) => {
  console.log(req);
  // console.log("Request Body:", req.body);
  // console.log("Uploaded File:", req.file);
  try {
    const id = req.user;
    const {
      productName,
      productDescription,
      productMainCategory,
      productSubCategory,
      productPrice,
      productQuantity,
      productSize,
      productColor,
      productBrand,
      productRating,
      productReview,
      productDiscount,
      productDiscountPrice,
      productTags,
      productMaterials,
    } = req.body;
    const productImage = req.file.path;
    // console.log(req.file);
    console.log("productImage", productImage);
    if (
      !productName ||
      !productDescription ||
      !productMainCategory ||
      !productSubCategory ||
      !productPrice ||
      !productQuantity ||
      !productSize ||
      !productColor ||
      !productBrand ||
      !productMaterials
    ) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    const data = ProductSchema({
      productName,
      productDescription,
      productMainCategory,
      productSubCategory,
      productPrice,
      productQuantity,
      productSize,
      productColor,
      productBrand,
      productRating,
      productReview,
      productDiscount,
      productDiscountPrice,
      productTags,
      productMaterials,
      productImage,
      userId: id,
    });

    data
      .save()
      .then((product) => {
        res.json({ msg: "Product created successfully", product });
      })
      .catch((err) => {
        res.status(400).json({ msg: "something went wrong" });
        console.log("err", err);
      });
  } catch (err) {
    res.status(400).json({ msg: "Not able to create product" });
    console.log("err", err);
  }
});

// get all the product list
Productrouter.get("/getallproduct", (req, res) => {
  try {
    ProductSchema.find()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: "something went wrong" });
      });
  } catch (err) {
    res.status(400).json({ msg: "Not able to get product" });
  }
});
// get product by id
Productrouter.get("/getproduct/:id", (req, res) => {
  try {
    const id = req.params.id; // Remove the colon
    const data = ProductSchema.findById(id)
      .then((product) => {
        if (!product) {
          return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: "Something went wrong" });
        console.log(err);
      });
  } catch (err) {
    res.status(400).json({ msg: "Not able to get product" });
  }
});

// get products which belong to that user
Productrouter.get("/getproductbyuser", authMiddleware, (req, res) => {
  try {
    const id = req.user;
    ProductSchema.find({ userId: id })
      .then((product) => {  
        if (!product) {
          return res.status(404).json({ msg: "Product not found" });
        }
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: "Something went wrong" });
        console.log(err);
      });
  } catch (err) {
    res.status(400).json({ msg: "Not able to get product" });
  }
});

// get product by category
Productrouter.get(
  "/getproductbycategory/:category/:subcategory",
  (req, res) => {
    try {
      const { category, subcategory } = req.params;
      const data = ProductSchema.find({
        productMainCategory: category,
        productSubCategory: subcategory,
      })
        .then((product) => {
          res.status(200).json(product);
        })
        .catch((err) => {
          res.status(400).json({ msg: "something went wrong" });
          console.log(err);
        });
    } catch (err) {
      console.log("err", err);
      res.status(400).json({ msg: "Not able to get product" });
    }
  }
);
// short product by price
Productrouter.get(
  "/getproductbycategory/:category/:subcategory/:sort",
  (req, res) => {
    try {
      const { category, subcategory, sort } = req.params;
      if (sort == "ascending") {
        ProductSchema.find({
          productMainCategory: category,
          productSubCategory: subcategory,
        })
          .sort({ productDiscountPrice: 1 })
          .then((product) => {
            res.status(200).json(product);
          })
          .catch((err) => {
            res.status(400).json({ msg: "something went wrong" });
          });
      }
      if (sort == "descending") {
        ProductSchema.find({
          productMainCategory: category,
          productSubCategory: subcategory,
        })
          .sort({ productDiscountPrice: -1 })
          .then((product) => {
            res.status(200).json(product);
          })
          .catch((err) => {
            res.status(400).json({ msg: "something went wrong" });
          });
      }
    } catch (err) {
      res.status(400).json({ msg: "Not able to get product" });
    }
  }
);

Productrouter.delete("/deleteproduct/:id", (req, res) => {
  try {
    const id = req.params.id;
    ProductSchema.findByIdAndDelete(id).then((product) => {
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      res.status(200).json({ msg: "Product deleted successfully" });
    });
  } catch (err) {
    res.status(400).json({ msg: "Not able to delete product" });
  }
});

// update product
// Update product
Productrouter.put("/editproduct/:id", (req, res) => {
  const id = req.params.id;

  // Destructure the data from the request body
  const {
    productName,
    productDescription,
    productMainCategory,
    productSubCategory,
    productPrice,
    productImage,
    productQuantity,
    productSize,
    productColor,
    productBrand,
    productRating,
    productReview,
    productDiscount,
    productDiscountPrice,
    productTags,
    productMaterials,
  } = req.body;

  // Create an object with the updated data
  const updatedProduct = {
    productName,
    productDescription,
    productMainCategory,
    productSubCategory,
    productPrice,
    productImage,
    productQuantity,
    productSize,
    productColor,
    productBrand,
    productRating,
    productReview,
    productDiscount,
    productDiscountPrice,
    productTags,
    productMaterials,
  };

  // Use Mongoose's findByIdAndUpdate to find and update the product
  ProductSchema.findByIdAndUpdate(id, updatedProduct, { new: true })
    .then((product) => {
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      res.status(200).json({ msg: "Product updated successfully", product });
    })
    .catch((err) => {
      res.status(400).json({ msg: "Something went wrong", err });
      console.log(err);
    });
});

module.exports = Productrouter;
