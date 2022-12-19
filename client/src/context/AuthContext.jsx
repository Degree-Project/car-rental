import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [userDetails, setUserDetails] = useState({
    customerId: null,
    name: "",
    email: "",
    phoneNo: null,
    role: ""
  })

  const setAuth = (boolean) => {
    setLoading(true);
    setAuthentication(boolean);
    setLoading(false);
    }

    const setDetails = (details) => {
      setLoading(true);
      setUserDetails({...userDetails, ...details});
      setLoading(false);
    }

    const handleSetToken = (resToken) => {
      setLoading(true);
      setToken(resToken);
      setLoading(false)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuth, token, handleSetToken, userDetails, setDetails, loading, setLoading }}>
          {props.children}
        </AuthContext.Provider>
      );
}

export default AuthContext;
export { AuthContextProvider };