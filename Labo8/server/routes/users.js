var express = require('express');
var router = express.Router();
var persistance = require('../services/UserService');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(persistance.users);
});

router.post('/', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    // console.log(req.);
    if (username === undefined || password === undefined) {
        res.statusCode = 400;
        res.send({});
        return;
    }
    persistance.users.push({username: username, password: password});
    res.send({});
});

module.exports = router;
