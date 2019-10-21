/*
 * myAccount controller
 */

var Users = require ('../models/Users')

var myAccount = {

    displayMyAccount: (req, res) => {
        Users.find({}, (error, response) => {
            var response = req.user;
            if(error) {
                res.status(500).end;
                return;}
            res.json(response);
            }
        );
    }
}

module.exports = myAccount;