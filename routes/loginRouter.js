const { createUser, byEmail } = require("../controllers/userController");
var router = require("express").Router();

router.post("/create", createUser);
// router.post("/get-user", byEmail);

module.exports = router;
