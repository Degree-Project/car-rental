const { add, get, getCarById } = require("../models/carModel");

module.exports = {
  addCar: (req, res) => {
    const body = req.body;
    add(body, (err, results) => {
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
  getCars: (req, res) => {
    get((err, results) => {
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
          message: "No cars found.",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getCarById: (req, res) => {
    const id = req.params.id;
    getCarById(id, (err, results) => {
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
          message: "No car found",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
};
