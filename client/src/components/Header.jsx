import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/utils";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import { useEffect } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    setAuth,
    token,
    handleSetToken,
    userDetails,
    setDetails,
    loading,
  } = useContext(AuthContext);

  const handleLogout = () => {
    const promiseLoading = axios
      .get(`${BASE_URL}/customer/logout`)
      .then((res) => {
        setAuth(false);
        setDetails({
          customerId: null,
          name: "",
          email: "",
          phoneNo: null,
          role: "",
        });
        handleSetToken("");
        toast.promise(promiseLoading, {
          pending: "loading...",
          success: "Logged out...",
        });
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Navbar bg="light" variant="light" className="shadow bg-light">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>CarScope</Navbar.Brand>
        <Nav className="me-auto">
          {userDetails.role == "customer" ? (
            <Nav.Link onClick={() => navigate("/cars")}>All Cars</Nav.Link>
          ) : null}
          {isAuthenticated ? (
            <Nav.Link onClick={() => navigate("/profile")}>Profile</Nav.Link>
          ) : null}
          {isAuthenticated ? (
            userDetails.role == "customer" ? null : (
              <Nav.Link onClick={() => navigate("/cars/new")}>Add Car</Nav.Link>
            )
          ) : null}
          {userDetails.role == "customer" ? null : isAuthenticated ? (
            <Nav.Link onClick={() => navigate("/driver/new")}>
              Add Driver
            </Nav.Link>
          ) : null}
          {isAuthenticated ? (
            userDetails.role == "customer" ? null : (
              <Nav.Link onClick={() => navigate("/admin/cars")}>
                My Cars
              </Nav.Link>
            )
          ) : null}
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
          {isAuthenticated ? null : (
            <Nav.Link href="/register">Signup</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};
