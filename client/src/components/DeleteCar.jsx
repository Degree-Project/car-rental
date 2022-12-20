import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../utils/utils";

export const DeleteCar = ({
  carId,
  companyName,
  carName,
  carType,
  noOfSeats,
  securityDeposite,
  pricePerDay,
}) => {
  const { token, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    try {
      setLoading((prevState) => !prevState);
      axios
        .get(`${BASE_URL}/car/delete/${carId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setLoading((prevState) => !prevState);
          toast.success(`Successfully Deleted ${carName}`);
          navigate("/admin/cars");
        });
    } catch (err) {
      console.log(err.response.data.errorMessage);
      toast.warning(err.response.data.errorMessage);
    }
  };

  return (
    <div
      className="car-card d-flex justify-content-between p-3 mb-3 rounded bg-light shadow border mx-auto"
      style={{ maxWidth: "75%" }}
    >
      <div className="car-details">
        <div className="text-details h-100 d-flex flex-column justify-content-between">
          <p className="car-name mb-2" style={{ fontSize: "1.1rem" }}>
            {companyName + " " + carName}
          </p>
          <p className="info m-0 align-middle">
            <span className="info-item align-middle pe-3">
              {carType == "Manual" ? (
                <img
                  src="https://img.icons8.com/material/24/01c500/circled-m.png"
                  className="item-icon me-1"
                />
              ) : (
                <img
                  src="https://img.icons8.com/material/24/01c500/circled-a.png"
                  className="item-icon me-1"
                />
              )}
              <span className="item-text align-middle text-secondary">
                {carType}
              </span>
            </span>
            <span className="info-item align-middle pe-3">
              <img
                src="https://img.icons8.com/ios/24/01c500/car-seat.png"
                className="item-icon me-1"
              />
              <span className="item-text align-middle text-secondary">
                {noOfSeats} Seats
              </span>
            </span>
            <span className="info-item align-middle pe-3">
              <img
                src="https://img.icons8.com/windows/24/01c500/security-document.png"
                className="item-icon me-1"
              />
              <span className="item-text align-middle text-secondary">
                &#8377;{securityDeposite}
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="booking-details">
        <p className="price" style={{ fontSize: "1.1rem", color: "#01c500" }}>
          &#8377;<strong>{pricePerDay}</strong>/day
        </p>
        <button
          className="btn w-100 px-2 text-light fw-bold shadow"
          style={{ backgroundColor: "#f00" }}
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};