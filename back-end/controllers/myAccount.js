/*
 * myAccount controller
 */

var Users = require ('../models/Users')

var myAccount = {

    displayMyAccount: (req, res) => {
        if(req.user) {
            res.json({
                email: req.user.email,
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                status: req.user.status,
                avatar: req.user.avatar
            });
        }
        else {
            res.status(401).end();
        }
    }
}

module.exports = myAccount;