const db = require("../db/config");

module.exports = {
  // Ta add cars
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
        data.availability,
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  // To get all the cars
  get: (callBack) => {
    db.query(`SELECT * FROM car_details;`, [], (error, result) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, result);
    });
  },
  // To get car by id
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
  // To delete a Booking when car is deleted
  deleteBookingWithCarId: (carId, callBack) => {
    db.query(
      `DELETE FROM booking_details WHERE carId=?;`,
      [carId],
      (error, result) => {
        if (error) {
          // console.log("Query Error : " + error);
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  // To delete a car
  deleteCar: (carId, callBack) => {
    db.query(
      `DELETE FROM car_details WHERE carId=?;`,
      [carId],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
