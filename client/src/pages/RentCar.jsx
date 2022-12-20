import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/utils";
import AuthContext from "../context/AuthContext";
import { Receipt } from "../components/ReceiptModal";
export const RentCar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [booking, setBooking] = useState({
    pickUpDate: "",
    pickUpTime: "",
    dropOffDate: "",
    dropOffTime: "",
    carId: "",
    customerId: "",
    driverId: "2",
    bookingId: "",
  });
  const { userDetails } = useContext(AuthContext);
  const { id } = useParams();
  const [search] = useSearchParams();
  // const navigate = useNavigate();

  const handlePickDateChange = (e) => {
    setBooking({
      ...booking,
      pickUpDate: e.target.value,
    });
  };

  const handlePickTimeChange = (e) => {
    setBooking({
      ...booking,
      pickUpTime: e.target.value,
    });
  };

  const handleDropDateChange = (e) => {
    setBooking({
      ...booking,
      dropOffDate: e.target.value,
    });
  };

  const handleDropTimeChange = (e) => {
    setBooking({
      ...booking,
      dropOffTime: e.target.value,
    });
  };

  const handleBooking = () => {
    try {
      axios
        .post(`${BASE_URL}/book`, {
          ...booking,
          carId: id,
          customerId: userDetails.customerId,
        })
        .then((res) => {
          toast.success("Successfully added...");
          setBooking({
            ...booking,
            bookingId: res.data.data.insertId,
          });
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
          className="container d-flex flex-column mx-auto px-5 py-3 rounded border shadow"
          style={{ maxWidth: "28rem", marginTop: "2rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">BOOK</h2>
          <label htmlFor="name" className="container fw-bold">
            CAR NAME:
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              readOnly
              value={`${search.get("cmname")} ${search.get("crname")}`}
              className="form-input form-control mb-3 p-2 rounded border"
            />
          </label>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <label htmlFor="date" className="fw-bold col-6">
                PICK UP DATE:
                <input
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  required
                  autoFocus
                  onChange={handlePickDateChange}
                  value={booking.pickUpDate}
                  className="form-input p-2 rounded border col-12"
                />
              </label>
              <label htmlFor="birth-date" className="fw-bold col-6">
                PICK UP TIME:
                <input
                  type="time"
                  name="time"
                  required
                  autoFocus
                  onChange={handlePickTimeChange}
                  value={booking.pickUpTime}
                  className="form-input p-2 rounded border col-12"
                />
              </label>
            </div>
          </div>
          <div className="container mb-3">
            <div className="row d-flex justify-content-between">
              <label htmlFor="date" className="fw-bold col-6">
                DROP OFF DATE:
                <input
                  type="date"
                  name="date"
                  required
                  autoFocus
                  min={new Date().toISOString().split("T")[0]}
                  onChange={handleDropDateChange}
                  value={booking.dropOffDate}
                  className="form-input p-2 rounded border col-12"
                />
              </label>
              <label htmlFor="birth-date" className="fw-bold col-6">
                DROP OFF TIME:
                <input
                  type="time"
                  name="time"
                  required
                  autoFocus
                  onChange={handleDropTimeChange}
                  value={booking.dropOffTime}
                  className="form-input p-2 rounded border col-12"
                />
              </label>
            </div>
          </div>
          <button
            className="rounded mb-3 text-light fw-bold"
            onClick={(e) => {
              e.preventDefault();
              handleBooking();
              setModalShow(true);
            }}
            style={{ backgroundColor: "#01c500" }}
          >
            Book Now
          </button>
        </div>
      </form>
      <Receipt
        userDetails={userDetails}
        booking={booking}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
