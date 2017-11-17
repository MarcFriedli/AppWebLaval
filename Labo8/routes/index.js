var express = require('express');
var router = express.Router();

/* GET home page. */
let loginPage = function(req, res, next) {
    res.render('login', { title: 'Express' });
};
router.get('/', loginPage);
router.get('/login', loginPage);



module.exports = router;
