const {
  addBooking,
  addDriver,
  deleteBooking,
} = require("../controllers/bookingController");
const { checkToken } = require("../auth/validateToken");
var router = require("express").Router();

router.post("/", addBooking);
router.post("/driver", addDriver);
router.post("/:id", checkToken, deleteBooking);

module.exports = router;
