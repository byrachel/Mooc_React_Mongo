/*
 * newUser controller
 */

var User = require('../models/Users');

var newUser = {

    createUser: (req) => {
        var userData = req.body.user;
        var createNewUser = new User ({
            avatar: userData.avatar,
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            password: userData.password,
            status: userData.status,
            purchases: userData.purchases,
            courselevel: userData.courselevel,
            friends: userData.friends
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