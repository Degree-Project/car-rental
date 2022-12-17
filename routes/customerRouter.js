const {
  signup,
  login,
  updateDetails,
  getProfile,
  logout,
  isLoggedIn,
} = require("../controllers/customerController");
var router = require("express").Router();
const { checkToken } = require("../auth/validateToken");

router.post("/sign-up", signup);
router.post("/login", login);
router.post("/update-details", checkToken, updateDetails);
router.post("/profile", getProfile);
router.get("/logout", checkToken, logout);
router.get("/login-status", isLoggedIn);

module.exports = router;
