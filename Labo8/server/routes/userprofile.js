var express = require('express');
var router = express.Router();
var persistance = require('../services/UserService');

router.get('/', function (req, res, next) {
    let token = req.header("-token");
    let userFromToken = persistance.token[token];
    if (token === undefined || userFromToken === undefined) {
        res.statusCode = 403;
        res.send({});
        return;
    }

    res.statusCode = 200;
    res.send({user: userFromToken});

});

module.exports = router;
