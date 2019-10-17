/* Modules imports */
var express = require('express');
var router = express.Router();

/* Controllers imports */
var newUser = require('../controllers/users');

/* POST new user in collection Mongo. */
router.post('/', function(req, res) {
  var result = newUser.createUser(req);
  if(result) {
      res.status(201).end();
  }
  else {
      res.status(418).end();
  }
});

module.exports = router;


