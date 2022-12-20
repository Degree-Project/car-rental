// import Carousel from "react-bootstrap/Carousel";
import React, { useContext } from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export const CarCarousel = () => {
  const { isAuthenticated, userDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        {/* <img className="d-block w-100" src="./banner1.jpg" alt="First slide" /> */}
        <img className="d-block w-100" src="./banner1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Available Across Goa 24x7</h3>
          {isAuthenticated ? (
            userDetails.role == "customer" ? (
              <button
                className="btn w-25  p-2 text-light fw-bold shadow"
                style={{ backgroundColor: "#01c500" }}
                onClick={() => navigate("/cars")}
              >
                Book
              </button>
            ) : userDetails.role != "" ? (
              <button
                className="btn w-25  p-2 text-light fw-bold shadow"
                style={{ backgroundColor: "#01c500" }}
                onClick={() => navigate("/admin/cars")}
              >
                My Cars
              </button>
            ) : (
              <button
                className="btn w-25  p-2 text-light fw-bold shadow"
                style={{ backgroundColor: "#01c500" }}
                onClick={() => navigate("/login")}
              >
                Login to Book
              </button>
            )
          ) : (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/login")}
            >
              Login to Book
            </button>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src="./banner2.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h4>Choose Self Drive Car</h4>
          {userDetails.role == "customer" ? (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/cars")}
            >
              Book
            </button>
          ) : userDetails.role != "" ? (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/admin/cars")}
            >
              My Cars
            </button>
          ) : (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/login")}
            >
              Login to Book
            </button>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./banner3.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h4>Rent.Drive.Return</h4>
          {userDetails.role == "customer" ? (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/cars")}
            >
              Book
            </button>
          ) : userDetails.role != "" ? (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/admin/cars")}
            >
              My Cars
            </button>
          ) : (
            <button
              className="btn w-25  p-2 text-light fw-bold shadow"
              style={{ backgroundColor: "#01c500" }}
              onClick={() => navigate("/login")}
            >
              Login to Book
            </button>
          )}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarCarousel;
