var express = require('express');
const { body, validationResult } = require('express-validator');

var router = express.Router();


router.get('/admin',function(req,res){
    res.render('admin');
});

module.exports = router;