import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export const CarCard = ({
  carId,
  companyName,
  carName,
  carType,
  noOfSeats,
  securityDeposite,
  pricePerDay,
}) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate(`/booking/${carId}`);
    navigate({
      pathname: `/booking/${carId}`,
      search: `?${createSearchParams({
        cmname: companyName,
        crname: carName,
        ppd: pricePerDay,
        sd: securityDeposite,
      })}`,
    });
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
          style={{ backgroundColor: "#01c500" }}
          onClick={handleBookClick}
        >
          Book
        </button>
      </div>
    </div>
  );
};
