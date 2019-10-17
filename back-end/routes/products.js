/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var catalog = require('../controllers/displayProducts');

/* GET display products. */
router.get('/products', function(req, res) {
    catalog.displayProducts(req, res);
});

module.exports = router;