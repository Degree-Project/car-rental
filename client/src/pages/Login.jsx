import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/utils";
import "../styles/login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

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
    const test = axios
      .post(`${BASE_URL}/customer/login`, { ...user })
      .then((res) => {
        console.log(res);
        navigate("/cars");
      });
      
      test.catch(err => toast.error(err.response.data.data));

    toast.promise(test, {
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
            className="rounded mb-3"
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
