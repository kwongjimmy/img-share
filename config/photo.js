var mongoose = require('mongoose');

//Set the schema
module.exports = mongoose.model('photo', {
    name:"String",
    url:"String",
    uploadDate: {type: Date, default: Date.now()}
})