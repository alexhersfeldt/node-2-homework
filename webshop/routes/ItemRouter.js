let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
let Item = require('../models/item/Item');


// get all items
router.get('/', function (req, res) {
    Item.find({}, function (err, items) {
        if (err) return res.status(500).send("There was a problem finding the items.");
        res.status(200).send(items);
    });
});

// get one item by id
router.get('/:id', function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return res.status(500).send("There was a problem finding the item.");
        if (!item) return res.status(404).send("No item found.");
        res.status(200).send(item);
    });
});

// add item
router.post('/', function (req, res) {
    Item.create({
            name : req.body.name,
            price : req.body.price,
            description : req.body.description
        }, 
        function (err, item) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(item);
        });
});

// update item
router.put('/:id', function (req, res) {
    
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, item) {
        if (err) return res.status(500).send("There was a problem updating the item.");
        res.status(200).send(item);
    });
});

// delete item
router.delete('/:id', function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err, item) {
        if (err) return res.status(500).send("There was a problem deleting the item.");
        res.status(200).send("Item "+ item.name +" was deleted.");
    });
});

module.exports = router;