/* Modules imports */
var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport/index');


router.get('/', function(req,res) {

    if(req.user) {
        res.json({logged: true});
    }

});      

module.exports = router;