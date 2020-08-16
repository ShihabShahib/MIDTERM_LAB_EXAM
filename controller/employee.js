var express = require('express');
var EMP = require.main.require('./models/user');
var router = express.Router();
var user={};
router.get('/employee',function(req,res){
    res.render('employee');
});



module.exports = router;