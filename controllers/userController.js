const { create, byEmail } = require("../models/userModel");
// const { genSaltSync, hashSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;

    // For Hashing Password
    // install bcrypt
    // const salt = genSaltSync(10);
    // body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  //   byEmail: (req, res) => {
  //     const email = req.params.email;
  //     getUserByEmail(email, (err, results) => {
  //       if (err) {
  //         console.log(err);
  //         return;
  //       }
  //       if (!results) {
  //         return res.json({
  //           success: 0,
  //           message: "Record not found",
  //         });
  //       }
  //       return res.json({
  //         success: 1,
  //         data: results,
  //       });
  //     });
  //   },
};
