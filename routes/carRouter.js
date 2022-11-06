const { addCar, getCars, getCarById } = require("../controllers/carController");
var router = require("express").Router();

router.post("/addCar", addCar);
router.get("/getCars", getCars);
router.get("/:id", getCarById);

module.exports = router;
