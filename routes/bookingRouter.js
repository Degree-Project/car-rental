const { addBooking, addDriver } = require("../controllers/bookingController");
const { checkToken } = require("../auth/validateToken");
var router = require("express").Router();

router.post("/book", checkToken, addBooking);
router.post("/driver", addDriver);

module.exports = router;
