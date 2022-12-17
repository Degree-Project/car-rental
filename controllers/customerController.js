const {
  add,
  getUserByEmail,
  updateDetails,
  getProfile,
} = require("../models/customerModel");
const { sign, verify } = require("jsonwebtoken");
// to check hashed password
// const { compareSync } = require("bcrypt");
module.exports = {
  // To signup user
  signup: (req, res) => {
    const body = req.body;

    add(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Database connection error",
        });
      }
      if (!results) {
        return res.json({
          success: false,
          data: "Failed to Register User",
        });
      }
      return res.status(200).json({
        success: true,
        data: results,
      });
    });
  },
  // To login user
  login: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.json({
          success: false,
          data: "Invalid email or password.",
        });
      }
      // To hash check hashed password
      //   const result = compareSync(body.password, results.password);
      const result = body.password == results.password ? true : false;
      if (result) {
        results.password = undefined;
        const jsonToken = sign({ result: results }, "dbmsproject", {
          expiresIn: "2h",
        });
        res.cookie("token", jsonToken, {
          httpOnly: true,
        });

        return res.json({
          success: true,
          message: "Login successfully",
          token: jsonToken,
          user: results,
        });
      } else {
        return res.json({
          success: false,
          data: "Invalid email or password",
        });
      }
    });
  },
  // To update user details
  updateDetails: (req, res) => {
    const body = req.body;
    updateDetails(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: true,
        message: "Details updated successfully",
      });
    });
  },
  // To get user details
  getProfile: (req, res) => {
    const token = req.get("cookie").slice(6);
    console.log(token);
    if (token === "") {
      return res.json({
        success: false,
        message: "Not Logged In",
      });
    }
    const data = verify(token, "dbmsproject");
    return res.json({
      success: true,
      message: "Profile",
      data: data.result,
    });
  },
  // To logout user
  logout: (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  },
  // To check is user is logged in
  isLoggedIn: (req, res) => {
    const token = req.get("cookie").slice(6);
    if (token === "") {
      return res.json(false);
    }
    if (token !== "") {
      return res.json(true);
    }
  },
};
