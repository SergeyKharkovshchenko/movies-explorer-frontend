import React, { useCallback, useState } from "react";
import { Popup } from "../Popup";
import { signup, signin } from "../../utils/config";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Login.css";

export const Login = ({ isLoggedIn, onLogin, isLoading }) => {

  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    password: "",
    email: "",
  });

  const cbChange = useCallback(
    (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setUserData({
        ...userData,
        [name]: value,
      });
    },
    [userData]
  );

  const cbSubmit = useCallback(
    async (event) => {
      try {
        await onLogin(userData.Email, userData.Password);
      } catch (err) {
        console.log(err);
      }
    },
    [userData, onLogin]
  );

  if (isLoggedIn) {
    return <Navigate to="/movies" />;
  }

  return (
    <div className="login">
      <Popup
        mode={"signin"}
        greeting={t("Glad to see you!")}
        greenButton={t(signin.name)}
        smallButton={t(signup.name)}
        buttonsText={t("Not registered yet?")}
        linkTo={signup.link}
        onSubmit={(e) => cbSubmit(e)}
        onChange={(e) => cbChange(e)}
        isLoading={isLoading}
      />
    </div>
  );
};
