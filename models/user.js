var db = require('./db');

module.exports = {
	
	login: function(user, callback){
		var sql = "select * from login where username=? and password=?";
		db.getResults(sql, [user.username,user.password], function(result){

			if(result.length > 0 ){
				console.log('user.js')
				callback(result);
			}else{
				console.log(' error user.js')
				callback([]);
			}
		})
    },
    
}