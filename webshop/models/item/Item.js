let mongoose = require('mongoose');
let ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});
 let model = mongoose.model('Item', ItemSchema);
 module.exports = model

//mongoose.model('Item', ItemSchema);
//module.exports = mongoose.model('Item'); 