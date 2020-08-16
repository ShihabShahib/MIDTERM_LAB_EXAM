var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();


var login= require('./controller/login');
var employee= require('./controller/employee');
var admin= require('./controller/admin');
var admin= require('./controller/product');

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use('/login', login);
app.use('/employee', employee);
app.use('/admin', admin);
app.use('/admin', product);

app.get('/', function(req, res){
	res.send("this is index page!<br> <a href='/login'> login</a> ");
});
app.listen(3002, function(){
    console.log('express http server started at 3000....')
});