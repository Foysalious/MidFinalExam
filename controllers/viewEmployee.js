var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/delete/:username', function(request, response){
	console.log('delete page requested');
	var user = {
        username: request.params.username
    };
	userModel.delete(user, function(status){
        if(status){
            console.log('successfully delete');
            response.redirect('/home/viewEmployee');
        }else{
            console.log('error in delete');
            response.redirect('/home/viewEmployee');
        }
    });
});

router.get('/update/:username', function(request, response){
	console.log('update page requested');
	userModel.getByUsername(request.params.username, function(result){
		response.render('userViews/update', {user: result});
	});
});

router.post('/update/:username', function(request, response){
    console.log('update page post request');
    var user = {
        username: request.params.username,
        id: request.body.id,
        employee_name: request.body.employee_name,
        contact_no: request.body.contact_no,
        password: request.body.password,
        type: request.body.type
    };
    userModel.update(user, function(status){
        if(status){
            console.log('success');
            response.redirect('/home/viewEmployee');
        }else{
            console.log('error');
            response.redirect('/viewEmployee/update'+request.params.username);
        }
    });
});

module.exports = router;
