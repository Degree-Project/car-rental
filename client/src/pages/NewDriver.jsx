import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from '../utils/utils';

export const NewDriver = () => {
  const [driver, setDriver] = useState({
    name: "",
    email: "",
    phoneNo: "",
    driverLicenceNo: "",
    dateOfBirth: "",
    address: ""
  });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setDriver({
      ...driver,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setDriver({
      ...driver,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setDriver({
      ...driver,
      phoneNo: e.target.value,
    });
  };

  const handleLicenceNoChange = (e) => {
    setDriver({
      ...driver,
      driverLicenceNo: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setDriver({
      ...driver,
      dateOfBirth: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setDriver({
      ...driver,
      address: e.target.value,
    });
  };


  const addDriver = () => {

    try {
      axios.post(`${BASE_URL}/book/driver`,{...driver}).then((res) => {
        toast.success("Successfully added...");
        setDriver({
            name: "",
            email: "",
            phoneNo: "",
            driverLicenceNo: "",
            dateOfBirth: "",
            address: ""
          });
        // navigate("/cars");
      });
    } catch (err) {
      console.log(err.response.data.errorMessage);
      toast.warning(err.response.data.errorMessage);
    }
  }

  return (
    <div>
      <form>
        <div
          className="container d-flex flex-column mx-auto px-5 py-3 rounded border shadow"
          style={{ maxWidth: "28rem", marginTop: "2rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">ADD DRIVER</h2>
          <label htmlFor="name" className="container fw-bold">FULL NAME: 
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            autoFocus
            onChange={handleNameChange}
            value={driver.name}
            className="form-input form-control mb-3 p-2 rounded border"
          /></label>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <label htmlFor="email" className="fw-bold col-6">EMAIL: <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                required
                autoFocus
                onChange={handleEmailChange}
                value={driver.email}
                className="form-input p-2 rounded border col-12"
              /></label>
              <label htmlFor="phone" className="col-6 fw-bold">PHONE NO: 
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="Phone"
                required
                autoFocus
                onChange={handlePhoneChange}
                value={driver.phoneNo}
                className="form-input p-2 rounded border col-12"
              />
              </label>
            </div>
          </div>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <label htmlFor="licence" className="fw-bold col-6">LICENCE NO:
              <input
                type="text"
                name="license"
                id="license"
                placeholder="Licence No"
                required
                autoFocus
                onChange={handleLicenceNoChange}
                value={driver.driverLicenceNo}
                className="form-input p-2 rounded border col-12"
              />
              </label>
              <label htmlFor="birth-date" className="fw-bold col-6">BIRTHDATE: 
              <input
                type="date"
                name="birth-date"
                id="birth-date"
                placeholder="YYYY-MM-DD"
                required
                autoFocus
                onChange={handleDateChange}
                value={driver.dateOfBirth}
                className="form-input p-2 rounded border col-12"
              />
              </label>
            </div>
          </div>
          <label htmlFor="address" className="fw-bold container">ADDRESS: 
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            required
            autoFocus
            onChange={handleAddressChange}
            value={driver.address}
            className="form-input form-control mb-3 p-2 rounded border"
          />
          </label>
          <button
            className="rounded mb-3 text-light fw-bold"
            onClick={(e) => {
              e.preventDefault();
              addDriver();
            }}
            style={{ backgroundColor: "#01c500" }}
          >
            Add Driver
          </button>
        </div>
      </form>
    </div>
  );
};