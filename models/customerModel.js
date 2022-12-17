const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    db.query(
      `INSERT INTO customer_details (name, email, password, phoneNo, role) VALUES (?,?,?,?,?)`,
      [data.name, data.email, data.password, data.phoneNo, data.role],
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
  getProfile: (email, callBack) => {
    db.query(
      `SELECT * FROM customer_details where email=?`,
      [email],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
