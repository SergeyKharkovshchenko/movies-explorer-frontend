import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {InfoTooltip} from "../InfoTooltip";
import { useTranslation } from "react-i18next";

export const ProtectedRoutes = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { t } = useTranslation();
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(!currentUser)
  const [nav, setNav] = useState(false)

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
    setNav(true)
  };

  if (currentUser) {
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
