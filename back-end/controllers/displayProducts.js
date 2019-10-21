/*
 * Products controller
 */

var Products = require ('../models/Products')

var catalog = {

    displayProducts: (req,res) => {

        Products.find((error, data) => {
            if(error) {
                res.status(500).json({products: []});
                return;
            }
            res.json({products: data});
        });
    },

    displayPdtsCategory: (req,res) => {

    Products.find({category:'coding'}), (error, data) => {
        if(error) {
            res.status(500).json({products: []});
            return;
        }
        res.json({products: data});
        }
    }
}

module.exports = catalog;