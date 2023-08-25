var mongoose = require("mongoose");
var CarSchema = mongoose.Schema({
    id: String,
    name: String,
    brand: String,
    category: String,
    price: String,
    quantity: String,
    color: String,
    date: String,
    image: String
})

const CarModel = mongoose.model('car', CarSchema, 'car');
module.exports = CarModel;