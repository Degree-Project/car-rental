const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const db = require("./db/config.js");
const customerRouter = require("./routes/customerRouter");
const carRouter = require("./routes/carRouter");
const bookingRouter = require("./routes/bookingRouter");

dotenv.config();
const app = express();

app.get("/", (req, res) => {
res.send("Working...");
});

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use( bodyParser.json());
app.use(cors());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173"],
    credentials: true,
  })
);
app.use(fileUpload());
app.use(express.json());

app.use("/api/customer", customerRouter);
app.use("/api/car", carRouter);
app.use("/api/book", bookingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
