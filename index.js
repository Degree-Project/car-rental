const express = require("express");
const dotenv = require("dotenv");
const db = require("./db/config.js");
const loginRouter = require("./routes/loginRouter.js");

dotenv.config();
const app = express();

// app.get("/", (req, res) => {
//   const sqlQuery =
//     // "INSERT INTO login(email, password) VALUES ('saiel','1q2w3e4r');";
//     "SELECT * FROM login;";
//   db.query(sqlQuery, (err, result) => {
//     if (err) console.log("Error" + err);
//   });
// });
// app.get("/", (req, res) => {
// res.send("Working...");
// res.json({ message: "welcome" });
// });
// require("./routes/loginRouter");

// app.use();
app.use(express.json());
app.use("/user", loginRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
