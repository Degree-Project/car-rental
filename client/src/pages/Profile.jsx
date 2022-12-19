import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/utils";
import AuthContext from "../context/AuthContext";

export const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    role: "customer",
    avatar: null,
  });
  const { userDetails, setDetails, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const getUser = () => {
    axios
      .post(
        `${BASE_URL}/customer/profile`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data.data);
        setDetails(res.data.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

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

  const handleAvatarChange = (e) => {
    setUser({
      ...user,
      avatar: e.target.files[0],
    });
  };

  const updateProfile = () => {
    // const formData = new FormData();
    // formData.append("avatar", user.avatar);
    // formData.append("name", user.name);
    // formData.append("email", user.email);
    // formData.append("phoneNo", user.phoneNo);
    // formData.append("password", user.password);
    // formData.append("role", user.role);

    try {
      axios
        .post(
          `${BASE_URL}/customer/update-details`,
          { ...user },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res);
          toast.success("Successfully Updated");
          navigate("/profile");
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
          style={{ maxWidth: "28rem", marginTop: "2rem" }}
        >
          <h2 className="text-center mb-3 fw-bold text-dark">Profile</h2>
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
            readOnly
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
          <button
            className="rounded mb-3 text-light fw-bold"
            onClick={(e) => {
              e.preventDefault();
              updateProfile();
            }}
            style={{ backgroundColor: "#01c500" }}
          >
            UPDATE PROFILE
          </button>
        </div>
      </form>
    </div>
  );
};
