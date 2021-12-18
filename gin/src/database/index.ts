const mysql = require('mysql2');

module.exports = (config) => {
	const connection = mysql.createConnection({
		host: "host.docker.internal",
		user: "root",
		password: "IL0v34NdH4t3F3d5",
		database: "blog"
	});

	connection.connect(function(err) {
		if(err) throw err;

		console.log('Connected to database successfully');
	});

	return connection;
};