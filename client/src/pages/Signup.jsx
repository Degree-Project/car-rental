import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from '../utils/utils';

export const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    role: "customer",
    avatar: null
  });
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setUser({
      ...user,
      phoneNo: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleCfPasswordChange = (e) => {
    setUser({
      ...user,
      confirmPassword: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      role: e.target.value,
    }));
  };

  const handleAvatarChange = (e) => {
    setUser({
      ...user,
      avatar: e.target.files[0],
    });
  };

  const registerUser = () => {
    const formData = new FormData();
    // formData.append("avatar", user.avatar);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phoneNo", user.phoneNo);
    formData.append("password", user.password);
    formData.append("role", user.role);

    try {
      axios.post(`${BASE_URL}/customer/sign-up`,formData).then((res) => {
        toast.success("Successfully registered");
        navigate("/cars");
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
          className="d-flex flex-column mx-auto px-5 py-3 rounded border shadow"
          style={{ maxWidth: "28rem", marginTop: "2rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">Register</h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            autoFocus
            onChange={handleNameChange}
            value={user.name}
            className="form-input form-control mb-3 p-2 rounded border"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
            autoFocus
            onChange={handleEmailChange}
            value={user.email}
            className="form-input form-control mb-3 p-2 rounded border"
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone"
            required
            autoFocus
            onChange={handlePhoneChange}
            value={user.phoneNo}
            className="form-input form-control mb-3 p-2 rounded border"
          />
          {/* <select
                name="role"
                id="role"
                onChange={handleRoleChange}
                className="col-5 form-input form-control mb-3"
              >
                <option value="" selected disabled>
                  Select your Role
                </option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select> */}
          <div className="password-group container mb-3">
            <div className="row d-flex justify-content-between">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
                value={user.password}
                className="form-input p-2 rounded border col-5"
              />
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm Password"
                required
                onChange={handleCfPasswordChange}
                value={user.confirmPassword}
                className="form-input p-2 rounded border col-5"
              />
            </div>
          </div>
          <button
            className="rounded mb-3"
            onClick={(e) => {
              e.preventDefault();
              registerUser();
            }}
          >
            REGISTER
          </button>

          <p className="text-center">
            Copyright <span>&copy;</span> 2022
          </p>
        </div>
      </form>
    </div>
  );
};
