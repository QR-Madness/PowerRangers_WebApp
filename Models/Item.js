const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Name: String,
    Price_Unit: Number,
    Price_ExpectedSale: Number,
}, {
    collection: "PowerRangers_WebApp"
});
mongoose.model('Item', ItemSchema);