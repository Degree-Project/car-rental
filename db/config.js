const mysql = require("mysql");
const connection = mysql.createPool({
  host: process.env.HOST_NAME,
  user: "root",
  password: process.env.PASSWORD,
  database: "car_rental",
  connectionLimit: 10,
});

module.exports = connection;
