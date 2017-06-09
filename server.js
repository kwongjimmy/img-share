//initialize dependencies
var cloudinary = require('cloudinary');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Set necessary MongoDB / Cloudinary configs
var configs = require('./config/config.js');
configs.setConfig();

cloudinary.config({
    cloud_name: "dayfjvv1n",
    api_key: "669373219792748",
    api_secret: "MHd3rhFlXwp4cOlgh3mTlHe2G98"
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client', 'src')));
app.use(express.static(path.join(__dirname, 'client', 'src', 'app')));

// Body Parser for POST 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/', index);


// Set and start port
const PORT = process.env.PORT || 8080;
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