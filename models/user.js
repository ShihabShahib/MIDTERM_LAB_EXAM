var db = require('./db');

module.exports = {
	
	login: function(user, callback){
        var sql = "select username,password,type from login where username=? and password=? UNION select username,password,type from employee where username=? and password=?";
		db.getResults(sql, [user.username,user.password,user.username,user.password], function(result){

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