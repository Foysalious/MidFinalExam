var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
	response.clearCookie('loginUser');
	response.redirect('/');
});

module.exports = router;
