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
