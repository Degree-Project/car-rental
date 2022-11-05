const db = require("../db/config");

module.exports = {
  create: (data, callBack) => {
    db.query(
      `INSERT INTO login(email, password) values(?,?);`,
      [data.email, data.password],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  // getUsers: (callBack) => {
  //   db.query(`SELECT * FROM login;`, [], (error, results) => {
  //     if (error) {
  //       return callBack(error);
  //     }
  //     return callBack(null, results);
  //   });
  // },
  // byEmail: (email, callBack) => {
  //   db.query(
  //     `SELECT * FROM login WHERE email = ?;`,
  //     [email],
  //     (error, results) => {
  //       if (error) {
  //         return callBack(error);
  //       }
  //       return callBack(null, results);
  //     }
  //   );
  // },
};
