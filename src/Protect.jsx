import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protect = ({ children }) => {
  const navigate = useNavigate();

  // check authentication from localStorage
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : "/login";
};

export default Protect;
