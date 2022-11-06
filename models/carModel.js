const db = require("../db/config");

module.exports = {
  add: (data, callBack) => {
    db.query(
      `INSERT INTO car_details(companyName, carName, carType, noOfSeats, pricePerDay, securityDeposite ) values(?,?,?,?,?,?);`,
      [
        data.companyName,
        data.carName,
        data.carType,
        data.noOfSeats,
        data.pricePerDay,
        data.securityDeposite,
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
