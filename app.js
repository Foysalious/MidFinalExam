//declaration
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

var index = require('./controllers/index');
var adminHome = require('./controllers/adminHome');
var logout = require('./controllers/logout');
var viewEmployee = require('./controllers/viewEmployee');

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/', index);
app.use('/login',index);
app.use('/logout',logout);
app.use('/adminHome',adminHome);
app.use('/home',adminHome);
app.use('/viewEmployee',viewEmployee);

//server startup
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("node-application server started at", serverPort);
    
});