const {
  add,
  getUserByEmail,
  updateUser,
  updateDetails,
} = require("../models/customerModel");
const { sign } = require("jsonwebtoken");
// const { compareSync } = require("bcrypt");

module.exports = {
  signup: (req, res) => {
    const body = req.body;

    add(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: 0,
          data: "Failed to Register User",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  login: (req, res) => {
    
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.status(403).json({
          success: 0,
          data: "Invalid email or password.",
        });
      }
      //   const result = compareSync(body.password, results.password);
      const result = body.password == results.password ? true : false;
      if (result) {
        results.password = undefined;
        const jsonToken = sign({ result: results }, "dbmsproject", {
          expiresIn: "1h",
        });
        res.cookie("token", jsonToken, {
          httpOnly: true,
        });

        return res.json({
          success: 1,
          message: "Login successfully",
          token: jsonToken,
          user: results
        });
      } else {
        return res.json({
          success: 0,
          data: "Invalid email or password",
        });
      }
    });
  },
  updateDetails: (req, res) => {
    const body = req.body;
    updateDetails(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "Details updated successfully",
      });
    });
  },
};
