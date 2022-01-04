var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        unique: true
    },
    product_thumbnail: {
        type:String, 
        required: true
    },
    product_description: {
        type:String, 
        required: true
    },
    product_price: {
        type:Number, 
        required: true
    }
});
var products = new mongoose.model("product", productSchema);
module.exports = products;