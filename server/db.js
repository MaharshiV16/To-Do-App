const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	host: process.env.HOST,
	port: process.env.DBPORT, // The port number where pgadmin is running ?
	database: "todoapp",
});

module.exports = pool;
