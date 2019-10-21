/* Modules imports */
var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport/index');

/* Controllers imports */
var newUser = require('../controllers/users');

/* POST permet de connecter l'utilisateur. */
router.post('/', passport.authenticate('local'), function(req, res) {
    newUser.login(req, res);
});

module.exports = router;
