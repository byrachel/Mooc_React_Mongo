/*
 * newUser controller
 */

var User = require('../models/Users');

var newUser = {

    createUser: (req) => {
        var userData = req.body.user;
        var createNewUser = new User ({
            avatar: null,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: userData.password,
            status: "guest",
            purchases: [],
            courselevel: 0,
            friends: []
        }
        );
        createNewUser.save();
        return true;
    },

    login: (req, res) => {

        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    } 
}

module.exports = newUser;