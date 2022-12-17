const {
  addBooking,
  addDriver,
  deleteBooking,
} = require("../models/bookingModel");

module.exports = {
  addBooking: (req, res) => {
    const tempBody = req.body;
    var pickUpDate = new Date(req.body.pickUpDate);
    var dropOffDate = new Date(req.body.dropOffDate);
    var temp = dropOffDate.getTime() - pickUpDate.getTime();
    var noOfDays = { noOfDays: temp / (1000 * 3600 * 24) };
    const body = { ...tempBody, ...noOfDays };
    addBooking(body, (err, results) => {
      if (err) {
        if (err.sqlMessage.slice(-8, -3) == "carId") {
          return res.status(500).json({
            success: 0,
            message: "Car not found",
          });
        }
        if (err.sqlMessage.slice(-11, -3) == "driverId") {
          return res.status(500).json({
            success: 0,
            message: "Driver not found",
          });
        }
        return res.status(500).json({
          success: 0,
          message: "Database Error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  addDriver: (req, res) => {
    const body = req.body;
    addDriver(body, (err, results) => {
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
  deleteBooking: (req, res) => {
    const bookingId = req.params.id;
    deleteBooking(bookingId, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error.",
        });
      }
      if (!results) {
        return res.status(500).json({
          success: 0,
          message: "No Booking Found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
