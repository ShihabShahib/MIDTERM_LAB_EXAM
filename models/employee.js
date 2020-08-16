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
	},

    addemployee: function(user, callback){
    var sql = "INSERT INTO `employee`( `name`, `phone`, `username`, `password`, `type`) VALUES (?,?,?,?,'2')";

    db.execute(sql, [user.name,user.phone,user.username,user.password,user.type], function(status){
        
        if(status){
            callback(true);
        }else{
            callback(false);
        }
    });
},
addproduct: function(user, callback){
    var sql = "INSERT INTO `product`( `name`, `quantity`, `price`) VALUES (?,?,?)";

    db.execute(sql, [user.name,user.quantity,user.price], function(status){
        
        if(status){
            callback(true);
        }else{
            callback(false);
        }
    });
}

}