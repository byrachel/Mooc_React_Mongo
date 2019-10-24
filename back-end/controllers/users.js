/*
 * newUser controller
 */

var User = require('../models/Users');

var newUser = {

    createUser: (req, res) => {
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
        createNewUser.save((error) => {
            if(error) {
                res.status(500).json({message: "Oups ! "});
                return;
            }
            res.json({message: "Great! Your account is created. Now you can login and start your journey. Have fun..."});
        });
    },


}

module.exports = newUser;