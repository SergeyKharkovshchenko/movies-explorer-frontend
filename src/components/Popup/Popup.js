import React, { useCallback, useEffect, useState } from "react";
import logoImage from "../../images/logo__COLOR_main-1.svg";
import { Button } from "../Button";
import { Link, NavLink } from "react-router-dom";
import { Input } from "../Input";
import { main } from "../../utils/config";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/use_localstorage";
import "./Popup.css";

export const Popup = ({
  mode,
  name,
  email,
  greeting,
  greenButton,
  smallButton,
  buttonsText,
  linkTo,
  onSubmit,
  onChange,
  logOut,
  onChangeProfile,
  isLoading,
}) => {

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [initialName, setInitialName] = useState(name);
  const [initialEmail, setInitialEmail] = useState(email);
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const [userData, setUserData] = useState({
    name: name,
    email: email,
    password: "",
  });

  function cbSubmit(e) {
    e.preventDefault();
    onSubmit(userData.name, userData.email, userData.password);
  }

  {
    mode == "signup" &&
      useEffect(() => {
        cbChange("Name", "");
        cbChange("Email", "");
        cbChange("Password", "");
      }, []);
    mode == "signin" &&
      useEffect(() => {
        cbChange("Email", "11");
        cbChange("Password", "");
      }, []);
  }

  const cbChange = useCallback(
    (name, value) => {
      name = name.toLowerCase();
      setUserData({
        ...userData,
        [name]: value,
      });
      switch (name) {
        case "name": {
          if (value.length < 6) {
            if (language=='en') {
              setNameError("Name should be more then 5 letter.");              
            } else {
              setNameError("Имя должно быть длиннее 5 символов");
            }
          } else {
            setNameError("");
          }
          break;
        }
        case "email": {
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(value).toLowerCase())) {
            if (language=='en') {
              setEmailError("Email is incorrect");
            } else {
              setEmailError("Неверно введет емейл");
            }
          } else {
            setEmailError("");
          }
          break;
        }
        case "password": {
          if (value.length < 5) {
            if (language=='en') {
              setPasswordError("Password should me more then 5 signs.");
            } else {
              setPasswordError("Пароль должен быть длиннее чем 5 символов.");
            }
          } else {
            setPasswordError("");
          }
          break;
        }
      }
    },
    [userData]
  );

  function logout() {
    logOut();
  }

  function cbChangeProfile(e) {
    e.preventDefault();
    onChangeProfile(userData);
  }

  const { t } = useTranslation();

  return (
    <section className="popup">
      {(mode == "signup" || mode == "signin") && (
        <NavLink className="link" to={main.link}>
          <img
            src={`${logoImage}`}
            alt="Логотип - зеленый бублик"
            className="popup__logo"
          />
        </NavLink>
      )}
      <h2
        className={mode == "profile" ? "popup__title_profile" : "popup__title"}
      >
        {t(`${greeting}`)}
      </h2>

      <form
        className={mode == "profile" ? "popup__form_profile" : "popup__form"}
        onSubmit={(e) => cbSubmit(e)}
        onChange={onChange}
      >
        {(mode == "signup" || mode == "profile") && (
          <Input
            mode={mode == "profile" ? "profile" : "popup"}
            label={"Name"}
            name={"Name"}
            cbChange={cbChange}
            userData={userData.name}
            errorName={nameError}
            placeholder={"Please enter name"}
            isLoading={isLoading}
          />
        )}
        <Input
          mode={mode == "profile" ? "profile" : "popup"}
          label={"Email"}
          name={"Email"}
          cbChange={cbChange}
          userData={userData.email}
          errorName={emailError}
          placeholder={"Please enter email"}
          isLoading={isLoading}
        />
        {(mode == "signup" || mode == "signin") && (
          <Input
            mode={"popup"}
            label={"Password"}
            name={"Password"}
            cbChange={cbChange}
            userData={userData.password}
            errorName={passwordError}
            placeholder={"Please enter password"}
            isLoading={isLoading}
          />
        )}
        {(mode == "signup" || mode == "signin") && (
          <nav className={`popup__buttons popup__buttons_${mode}`}>
            <Button
              name={greenButton}
              color={"bigGreen"}
              isActive={nameError + emailError + passwordError == ""}
            />
            <div className="popup__lowerLine">
              <p className="popup__buttonsComment">{t(`${buttonsText}`)}</p>
              <Link to={linkTo} className="popup__smallButton">
                {t(`${smallButton}`)}
              </Link>
            </div>
          </nav>
        )}
        {mode == "profile" && (
          <nav className="popup__buttons_profile">
            <div>
              <Button
                name={t("Edit")}
                onClick={(e) => cbChangeProfile(e)}
                color={"white"}
                isActive={
                  nameError + emailError + passwordError == "" &&
                  (userData.name != initialName ||
                    userData.email != initialEmail)
                }
              />
            </div>
            <Link to="/movies">
              <Button
                name={t("Log out")}
                onClick={logout}
                color={"red"}
                isActive="true"
              />
            </Link>
          </nav>
        )}
      </form>
    </section>
  );
};
