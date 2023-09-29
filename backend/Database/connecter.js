const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to database");
});

module.exports = db;
