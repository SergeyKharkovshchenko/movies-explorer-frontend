import React from "react";
import "./Error404.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const Error404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="error404">
      <h1 className="error404__title">404</h1>
      <h2 className="error404__subtitle">{t('Page not found')}</h2>
      <p onClick={() => navigate(-1)} className="error404__return">
        Назад
      </p>
    </div>
  );
};
