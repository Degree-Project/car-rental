const db = require("../db/config");

module.exports = {
  // To make a booking
  addBooking: (data, callBack) => {
    db.query(`UPDATE car_details SET availability=0 WHERE carId = ?;`, [
      data.carId,
    ]);
    db.query(
      `INSERT INTO booking_details (pickUpDate, pickUpTime, dropOffDate, dropOffTime, noOfDays, carId, customerId, driverId) VALUES (?,?,?,?,?,?,?,?);`,
      [
        data.pickUpDate,
        data.pickUpTime,
        data.dropOffDate,
        data.dropOffTime,
        data.noOfDays,
        data.carId,
        data.customerId,
        data.driverId,
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  // To add driver details
  addDriver: (data, callBack) => {
    db.query(
      `INSERT INTO driver_details (name, email, phoneNo, driverLicenceNo, dateOfBirth, address, additionalNote) VALUES (?,?,?,?,?,?,?)`,
      [
        data.name,
        data.email,
        data.phoneNo,
        data.driverLicenceNo,
        data.dateOfBirth,
        data.address,
        data.additionalNote,
      ],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
  // To delete booking
  deleteBooking: (bookingId, callBack) => {
    db.query(
      `DELETE FROM booking_details WHERE bookingId=?`,
      [bookingId],
      (error, result) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, result);
      }
    );
  },
};
