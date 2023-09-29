const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();
mongoose.connect(process.env.MONGOURI , {useNewUrlParser: true,})
.then(()=>{
   app.listen(process.env.PORT || 5000, ()=>{
         console.log(`Server is running on ${process.env.PORT || 5000}`);
    })
    console.log('Connected to database');
})