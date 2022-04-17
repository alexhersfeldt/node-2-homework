let express = require("express");
let app = express();

let cors = require("cors");
let morgan = require('morgan');
let { port, mongoURI } = require("./config");
let mongoose = require("mongoose");

mongoose
    .connect(mongoURI)
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

let UserRoutes = require('./routes/UserRouter');
let ItemRoutes = require('./routes/ItemRouter');

app.use('/api/users', UserRoutes);
app.use('/api/items', ItemRoutes);


let server = app.listen(port, function() {
    console.log("Server is on port " + port);
})

app.use(express.json(), cors(), morgan('tiny'));


module.exports = app;