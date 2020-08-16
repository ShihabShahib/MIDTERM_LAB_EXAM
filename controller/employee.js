var express = require('express');
const { body, validationResult } = require('express-validator');
var employee = require.main.require('./models/employee');
var router = express.Router();
var user={};
router.get('/employee',function(req,res){
    res.render('employee');
});
router.get('/productlist', function(req, res){

	if(req.session.username != null){
		employee.getproduct(user,function(result){
		res.render('productlist', {
			product: result 
			});
		})
	}else{
			res.redirect('/employee/employee');
	}
});


router.get('/addproduct',function(req,res){
    res.render('addproduct');
});
router.post('/addproduct',[
	body('name').notEmpty(), 
	body('quantity').notEmpty().isLength({ max: 5 }),  
	body('price').notEmpty().isLength({ max: 8 })
  ], function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
    var user = {
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
    };
        employee.addproduct(user, function(status){

            if(status){
                res.render('employee');
            }else{
                res.send('not working');
            }
        });
});

router.get('/update/(:id)',function(req,res){
	var updateid=req.params.id;
	if(req.session.username != null){
		employee.productlistforupdate(updateid,function(result){
		    res.render('updateproduct', {
				product: result 
			});
		})
	}else{
			res.redirect('/employee/employee');
	}
});

router.post('/update/(:id)',[
	body('name').notEmpty(), 
	body('quantity').notEmpty().isLength({ max: 5 }),  
	body('price').notEmpty().isLength({ max: 8 })
  ], function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
    var user = {
        id:req.params.id,
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price,
    };
        employee.updateproduct(user, function(status){

            if(status){
                res.render('employee');
            }else{
                res.send('not working');
            }
        });
});
router.get('/delete/(:id)',function(req,res){
	
	if(req.session.username != null){
		employee.deleteproduct(req.params.id,function(result){
		    res.render('employee');
		})
	}else{
			res.redirect('/employee/employee');
	}
});


module.exports = router;