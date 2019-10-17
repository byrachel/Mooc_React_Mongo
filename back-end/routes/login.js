/* Modules imports */
var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport/index');

/* Controllers imports */
var users = require('../controllers/users');

/* POST permet de connecter l'utilisateur. */
router.post('/', passport.authenticate('local'), function(req, res) {
    users.login(req, res);
});

module.exports = router;
