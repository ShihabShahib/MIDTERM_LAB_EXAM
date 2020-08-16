var db = require('./db');

module.exports = {
    get: function(user, callback){
		var sql = "select * from employee";
		db.getResults(sql, user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	}
}