const {
  addCar,
  getCars,
  getCarById,
  deleteCar,
  deleteBookingWithCarId,
} = require("../controllers/carController");
const { checkToken } = require("../auth/validateToken");
var router = require("express").Router();

router.post("/addCar", checkToken, addCar);
router.get("/getCars", getCars);
router.get("/:id", getCarById);
// router.get("/delete/:id", checkToken, deleteBookingWithCarId);
router.get("/delete/:id", checkToken, deleteBookingWithCarId, deleteCar);

module.exports = router;
