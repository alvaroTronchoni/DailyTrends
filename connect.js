var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
});



connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  connection.query("CREATE DATABASE IF NOT EXISTS daily", function (err, result) {
    if (err) throw err;
    console.log("Database created");

    connection.changeUser({
    	database : 'daily'
	}, function(err) {
    	if (err) {
      		console.log('error in changing database', err);
		}

		connection.query("create table if not exists Feed(id int primary key auto_increment, title varchar(255)not null, body text not null, image varchar(255) not null, source varchar(255) not null, publisher varchar(255) not null)", function (err, result) {
		    if (err) throw err;
		    console.log("table daily created");
		    connection.end();
	  	});
	});	 	
  });
});

exports.conect = function (){
	var connection = mysql.createConnection({
 	 	host     : 'localhost',
  		user     : 'root',
  		password : '',
	});
	connection.connect()

 	connection.changeUser({
		database : 'daily'
	})
	return connection
  	
}

exports.disconnect = function (connection){
	console.log("disconnect")
	connection.end();
}