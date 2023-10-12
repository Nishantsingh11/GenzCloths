const ProductSchema = require("../Schema/ProductSchema");

const express = require("express");
const bodyParser = require("body-parser");
const router = require("./UserRouter");
const Productrouter = express.Router();
Productrouter.use(bodyParser.json());
Productrouter.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
Productrouter.use(cors());

// Create a Product
Productrouter.post("/createproduct", (req, res) => {
  try {
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
    });
    data
      .save()
      .then((product) => {
        res.json({ msg: "Product created successfully" });
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
    const { id } = req.params;
    const data = ProductSchema.findById(id)
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: "something went wrong" });
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
          .sort({ productPrice: 1 })
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
          .sort({ productPrice: -1 })
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
module.exports = Productrouter;
