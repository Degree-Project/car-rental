import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/utils";
import AuthContext from "../context/AuthContext";

export const NewCar = () => {
  const [car, setCar] = useState({
    companyName: "",
    carName: "",
    carType: "",
    noOfSeats: null,
    pricePerDay: null,
    securityDeposite: null,
    availability: 1,
  });
  const {token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCompanyNameChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      companyName: e.target.value,
    }));
  };

  const handleCarNameChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      carName: e.target.value,
    }));
  };

  const handleCarTypeChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      carType: e.target.value,
    }));
  };

  const handleNoOfSeatsChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      noOfSeats: e.target.value,
    }));
  };

  const handlePricePerDayChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      pricePerDay: e.target.value,
    }));
  };

  const handleSecurityDepositeChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      securityDeposite: e.target.value,
    }));
  };

  const handleAvailabilityChange = (e) => {
    setCar((prevCar) => ({
      ...prevCar,
      availability: e.target.value,
    }));
  };

  const addCar = () => {
    //const formData = new FormData();

    try {
      axios.post(`${BASE_URL}/car/addCar`, {...car},{
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        toast.success("Successfully Added");
        navigate("/admin/cars");
      });
    } catch (err) {
      console.log(err.response.data.errorMessage);
      toast.warning(err.response.data.errorMessage);
    }
  };

  return (
    <div>
      <form>
        <div
          className="d-flex flex-column mx-auto px-5 py-3 rounded border shadow"
          style={{ maxWidth: "30rem", marginTop: "2rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">Add Car</h2>
          <div className="car-model-group container mb-3">
            <div className="row d-flex justify-content-between">
              <input
                type="text"
                name="company-name"
                id="company-name"
                placeholder="Enter Company name"
                required
                onChange={handleCompanyNameChange}
                value={car.companyName}
                className="form-input p-2 rounded border col-5"
              />
              <input
                type="text"
                name="car-name"
                id="car-name"
                placeholder="Enter Car Name"
                required
                onChange={handleCarNameChange}
                value={car.carName}
                className="form-input p-2 rounded border col-5"
              />
            </div>
          </div>
          <select
            name="car-type"
            id="car-type"
            onChange={handleCarTypeChange}
            className=" form-input form-control  mb-3 col-5"
          >
            <option value="" selected disabled>
              Select Car Type
            </option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <input
                type="number"
                name="seats"
                id="car-seats"
                placeholder="Enter No of Seats"
                required
                onChange={handleNoOfSeatsChange}
                value={car.noOfSeats}
                className="form-input p-2 rounded border col-5"
              />
              <input
                type="number"
                name="availability"
                id="car-availability"
                placeholder="Enter Availability Status"
                readOnly
                onChange={handleAvailabilityChange}
                value={car.availability}
                className="form-input p-2 rounded border col-5"
              />
            </div>
          </div>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter Per Day Price"
                required
                onChange={handlePricePerDayChange}
                value={car.pricePerDay}
                className="form-input p-2 rounded border col-5"
              />
              <input
                type="number"
                name="security-deposite"
                id="deposite"
                placeholder="Enter Security Amount"
                required
                onChange={handleSecurityDepositeChange}
                value={car.securityDeposite}
                className="form-input p-2 rounded border col-5"
              />
            </div>
          </div>
          <button
            className="rounded mb-3 fw-bold text-light"
            onClick={(e) => {
              e.preventDefault();
              addCar();
            }}
            style={{ backgroundColor: "#01c500" }}
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};
