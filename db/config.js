const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) console.log("error: " + error);
  else console.log("DB connected");
});
