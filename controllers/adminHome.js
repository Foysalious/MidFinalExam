var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/', function(request, response){
	if(request.cookies['loginUser'] != null){
		userModel.getByEmail(request.cookies['loginUser'], function(result){
			response.render('adminHome', {user: result});
		});
	}else{
		response.redirect('/');
	}
});

router.get('/viewEmployee', function(req, res){
	console.log("view wmployee");
    userModel.getAll(function(results){
        if(results.length > 0){
            res.render('viewEmployee', {userlist: results});
        }else{
            res.redirect('/adminHome');
        }
    });
});

module.exports = router;
