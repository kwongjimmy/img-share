// Set up cloudinary and mongodb
module.exports.setConfig = function() {
    process.env.MONGO_CONNECTION = "mongodb://jaye:test@ds117592.mlab.com:17592/img-share";
    process.env.CLOUDINARY_URL = "cloudinary://669373219792748:MHd3rhFlXwp4cOlgh3mTlHe2G98@dayfjvv1n";
    console.log("Configurations successfully set");
}