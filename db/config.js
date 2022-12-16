const mysql = require("mysql");
const connection = mysql.createPool({
  host: process.env.HOST_NAME,
  user: "dbms",
  password: 'password123',
  database: "car_rental",
  connectionLimit: 10,
});

module.exports = connection;
