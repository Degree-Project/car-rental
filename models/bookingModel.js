const db = require("../db/config");

module.exports = {
  addBooking: (data, callBack) => {
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
};
