let express = require("express");
let app = express();
let cors = require("cors");

let mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:simcity4@node-2-db.8eas5.mongodb.net/node-2-db?retryWrites=true&w=majority");

let UserController = require('./user/UserController');
let ItemController = require('./item/ItemController');

app.use('/users/api', UserController);
app.use('/items/api', ItemController);

let port = process.env.PORT || 3000;
let server = app.listen(port, function() {
    console.log("Server is on port " + port);
})

app.use(express.json(), cors());

module.exports = app;