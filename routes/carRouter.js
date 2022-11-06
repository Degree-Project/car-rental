const { addCar } = require("../controllers/carController");
var router = require("express").Router();

router.post("/addCar", addCar);

module.exports = router;
