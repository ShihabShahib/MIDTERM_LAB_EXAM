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
router.post('/addemployee',[
	body('name').notEmpty(), 
	body('phone').notEmpty().isDecimal().isLength({ min: 11 }).isLength({ max: 11 }),  
	// username can not be empty
	body('username').notEmpty().isLength({ min: 8 }),
	// password should be at least 8 chars long
	body('password').notEmpty().isLength({ min: 8 }) 
  ], function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
    var user = {
		name: req.body.name,
		phone: req.body.phone,
		username: req.body.username,
		password: req.body.password,
    };
        employeelist.addemployee(user, function(status){

            if(status){
                res.render('admin');
            }else{
                res.send('not working');
            }
        });
});


router.get('/update/(:id)',function(req,res){
	var updateid=req.params.id;
	if(req.session.username != null){
		employeelist.getemp(updateid,function(result){
		    res.render('updateemployee', {
				employee: result 
			});
		})
	}else{
			res.redirect('admin/admin');
	}
});

router.post('/update/(:id)',[
	body('name').notEmpty(), 
	body('phone').notEmpty().isDecimal().isLength({ min: 11 }).isLength({ max: 11 }),  
	// username can not be empty
	body('username').notEmpty().isLength({ min: 8 }),
	// password should be at least 8 chars long
	body('password').notEmpty().isLength({ min: 8 }) 
  ], function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
    var user = {
        id:req.params.id,
		name: req.body.name,
		phone: req.body.phone,
		username: req.body.username,
		password: req.body.password,
    };
        employeelist.update(user, function(status){

            if(status){
                res.render('admin');
            }else{
                res.send('not working');
            }
        });
});
router.get('/delete/(:id)',function(req,res){
	
	if(req.session.username != null){
		employeelist.deleteemp(req.params.id,function(status){
		    res.render('admin');
		})
	}else{
			res.redirect('admin/admin');
	}
});

module.exports = router;