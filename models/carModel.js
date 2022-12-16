const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    db.query(
      `INSERT INTO car_details(companyName, carName, carType, noOfSeats, pricePerDay, securityDeposite, availability ) values(?,?,?,?,?,?,?);`,
      [
        data.companyName,
        data.carName,
        data.carType,
        data.noOfSeats,
        data.pricePerDay,
        data.securityDeposite,
        data.availability
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  get: (callBack) => {
    db.query(`SELECT * FROM car_details;`, [], (error, result) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, result);
    });
  },
  getCarById: (id, callBack) => {
    db.query(
      `SELECT * FROM car_details WHERE carId=?;`,
      [id],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
