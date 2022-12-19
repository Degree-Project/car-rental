import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../utils/utils";
import "../styles/login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const {isAuthenticated, setAuth, token, handleSetToken, userDetails, setDetails, loading} = useContext(AuthContext);

  useEffect(() => {
      isAuthenticated ? (userDetails.role == "customer" ? navigate("/cars") : navigate("/profile")): null;
  },[loading])

  const handleEmailChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value,
    }));
  };

  const handleLogin = () => {
    const promiseLoading = axios
      .post(`${BASE_URL}/customer/login`, { ...user })
      .then((res) => {
        setAuth(true);
        setDetails(res.data.user);
        handleSetToken(res.data.token);
      });
      
    promiseLoading.catch(err => toast.error(err.response.data.data));
    toast.promise(promiseLoading, {
      pending: "Verifying...",
      success: "Verified",
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center border"
      style={{ height: "85vh" }}
    >
      <form>
        <div
          className="d-flex flex-column mx-auto px-5 py-3 rounded border shadow"
          style={{ maxWidth: "28rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">Login</h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
            autoFocus
            onChange={handleEmailChange}
            value={user.email}
            className="mb-3 p-2 rounded border"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={handlePasswordChange}
            value={user.password}
            className="mb-3 p-2 rounded border"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="rounded mb-3 fw-bold text-light"
            style={{ backgroundColor: "#01c500" }}
          >
            Login
          </button>
          <p>
            Don't have a account? <Link to="/register">Register</Link>
          </p>

          <p className="text-center">
            Copyright <span>&copy;</span> 2022
          </p>
        </div>
      </form>
    </div>
  );
};
