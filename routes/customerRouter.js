const {
  signup,
  login,
  updateDetails,
} = require("../controllers/customerController");
var router = require("express").Router();
const { checkToken } = require("../auth/validateToken");

router.post("/sign-up", checkToken, signup);
router.post("/login", login);
router.post("/update-details", checkToken, updateDetails);

module.exports = router;
