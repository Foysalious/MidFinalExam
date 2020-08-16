var db = require('./db');

module.exports= {
	getAll : function(callback){
		var sql = "SELECT * FROM user";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM user where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUsername : function(username, callback){
		var sql = "select * from user where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	update : function(user, callback){
		var sql = "update user set employee_name=?, contact_no=?, password=? where username=?";
		db.execute(sql, [user.employee_name, user.contact_no, user.password, user.username], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete : function(user, callback){

		var sql = "Delete from user where username=?";
		db.execute(sql, [user.username], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}
