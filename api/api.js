var cloudinary = require('cloudinary');
var mongoose = require('mongoose');
var express = require('express');
var router = express.router();
var config = require("../config/config.js");
config.setConfig();

mongoose.connect(process.env.MONGO_CONNECTION);

cloudinary.config({
    cloud_name: "dayfjvv1n",
    api_key: "669373219792748",
    api_secret: "MHd3rhFlXwp4cOlgh3mTlHe2G98"
});

router.get("/photos", function(req, res, next) {
    db.photos.find(function(err, photos) {
        if(err) {
            res.send(err);
        } else {
            res.json(photos);
        }
    });
});

module.exports = router;