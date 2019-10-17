/*
 * Products controller
 */

var Products = require ('../models/Products')

var catalog = {

    displayProducts: (req,res) => {

    Products.find({}, (error, response) => {
        if(error) {
            res.status(500).json([]);
            return;
        }
        res.json(response);
    });

    }
}

module.exports = myAccount;