let mongoose = require('mongoose');
let ItemSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String
});
mongoose.model('Item', ItemSchema);
module.exports = mongoose.model('Item'); 