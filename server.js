var cloudinary = require('cloudinary');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

// Set necessary MongoDB / Cloudinary configs
var configs = require('./config/config.js');
configs.setConfig();

cloudinary.config({
    cloud_name: "dayfjvv1n",
    api_key: "669373219792748",
    api_secret: "MHd3rhFlXwp4cOlgh3mTlHe2G98"
});

// Set and start port
var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    
    console.log("Server running on localhost:"+ PORT);
});

//Create a connection to mlab db
mongoose.connect(process.env.MONGO_CONNECTION);


// test upload photo
var photo = require('./config/photo.js');
cloudinary.v2.uploader.upload("./meeko.jpg", function(error, result) {
     var pic = new photo();
     pic.url = result.secure_url;
     pic.name = "meeko";
     pic.save();
});