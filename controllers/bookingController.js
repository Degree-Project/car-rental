const { addBooking, addDriver } = require("../models/bookingModel");

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
};
