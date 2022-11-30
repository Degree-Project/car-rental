const { login } = require("../controllers/customerController");
const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    // console.log("Phone No : " + data.phoneNo);
    db.query(
      `INSERT INTO customer_details (name, email, password, phoneNo) VALUES (?,?,?,?)`,
      [data.name, data.email, data.password, data.phoneNo],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  getUserByEmail: (email, callBack) => {
    db.query(
      `SELECT * FROM customer_details WHERE email = ?;`,
      [email],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateDetails: (data, callBack) => {
    db.query(
      `UPDATE customer_details SET name=?, password=?, phoneNo=? WHERE email=?; `,
      [data.name, data.password, data.phoneNo, data.email],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
