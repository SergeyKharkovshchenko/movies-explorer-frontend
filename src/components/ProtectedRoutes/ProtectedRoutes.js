import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import {InfoTooltip} from "../InfoTooltip";
import { useTranslation } from "react-i18next";

export const ProtectedRoutes = ({ isLoggedIn, children }) => {

  const { t } = useTranslation();
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(!isLoggedIn)
  const [nav, setNav] = useState(false)

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
    setNav(true)
  };

  if (isLoggedIn) {
     return children;
  }

  return (
    <>
     <InfoTooltip
    isOpen={isInfoTooltipPopupOpen}
    message={t('To log in')}
    onClick={closeTooltip}
     /> 
    {nav && <Navigate to="/" />}
    </>
  )
};
