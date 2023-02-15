import React from "react";
import "./Error404.css";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h2 className="error404__subtitle">Page not found</h2>
      <p onClick={() => navigate(-1)} className="error404__return">
        Назад
      </p>
    </div>
  );
};
