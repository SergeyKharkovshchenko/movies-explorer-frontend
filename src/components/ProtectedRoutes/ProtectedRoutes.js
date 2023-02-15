import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
