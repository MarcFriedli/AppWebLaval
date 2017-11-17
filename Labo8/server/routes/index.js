var express = require('express');
var router = express.Router();
var uuidGenerator = require('uuid-lib');
var persistance = require('../services/UserService');

/* GET home page. */
let loginPage = function(req, res, next) {
    res.render('login', { title: 'Express' });
};
router.get('/', loginPage);
router.get('/login', loginPage);
router.post('/login', function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    if (username === undefined || password === undefined) {
        res.statusCode = 400;
        res.send({});
        return;
    }
    let user = persistance.users.filter((u) => {
        return u.username === username && u.password === password
    });
    if (user.length === 0) {
        res.statusCode = 403;
        res.send({});
        return;
    }
    let token = uuidGenerator.create();
    persistance.token[token] = username;
    res.statusCode = 200;
    res.send({token: token});
});


module.exports = router;
