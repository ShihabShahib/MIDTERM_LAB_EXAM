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
getemp: function(user, callback){
    var sql = "select * from employee WHERE id=?";
    db.getResults(sql, user, function(result){

        if(result.length > 0 ){
            callback(result);
        }else{
            callback([]);
        }
    })
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
},

update: function(user, callback){
    var sql = "UPDATE `employee` SET `username`=?,`password`=?,`phone`=?,`name`=? WHERE `id`=?";

    db.execute(sql, [user.username,user.password,user.phone,user.name,user.id], function(status){
        
        if(status){

            callback(true);
        }else{
            callback(false);
        }
    });
},
deleteemp: function(user, callback){
    var sql = "DELETE from employee WHERE id=?";
    db.execute(sql,[user], function(status){

        if(status){
            callback(true);
        }else{
            callback(false);
        }
})
},
getproduct: function(user, callback){
    var sql = "select * from product";
    db.getResults(sql, user, function(result){

        if(result.length > 0 ){
            callback(result);
        }else{
            callback([]);
        }
    })
},
updateproduct: function(user, callback){
    var sql = "UPDATE `product` SET `name`=?,`quantity`=?,`price`=? WHERE `id`=?";

    db.execute(sql, [user.name,user.quantity,user.price,user.id], function(status){
        
        if(status){

            callback(true);
        }else{
            callback(false);
        }
    });
},
deleteproduct: function(user, callback){
    var sql = "DELETE from product WHERE id=?";
    db.execute(sql,[user], function(status){

        if(status){
            callback(true);
        }else{
            callback(false);
        }
})
},
productlistforupdate:  function(user, callback){
    var sql = "select * from product WHERE id=?";
    db.execute(sql,[user], function(status){

        if(status){
            callback(true);
        }else{
            callback(false);
        }
})
}

}