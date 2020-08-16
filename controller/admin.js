var express = require('express');
const { body, validationResult } = require('express-validator');
var employeelist = require.main.require('./models/employee');
var router = express.Router();
var user={};

router.get('/admin',function(req,res){
    res.render('admin');
});

router.get('/emplist', function(req, res){

	if(req.session.username != null){
		employeelist.get(user,function(result){
		res.render('employeelist', {
			employee: result 
			});
		})
	}else{
			res.redirect('admin/admin');
	}
});
router.get('/addemployee',function(req,res){
    res.render('addemployee');
});


module.exports = router;