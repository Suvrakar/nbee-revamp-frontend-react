import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");// Determine if authorized, from context or however you're doing it
  // If authorized, return an outlet that will render child elements
  // If not, return an element that will navigate to the login page
  return isAuthenticated ? <Outlet /> : <Navigate to="/nbee/login" />;
};

export default PrivateRoute;
