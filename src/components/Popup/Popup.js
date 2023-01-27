import React, { useCallback, useState } from "react";
import logoImage from "../../images/logo__COLOR_main-1.svg";
import { Button } from "../Button";
import { Link } from "react-router-dom";
// import { Validation } from '../Validation';
import { Input } from "../Input";
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
}) => {
  const [emailInDirty, setEmailInDirty] = useState();
  const [passInDirty, setPassInDirty] = useState();
  const [nameInDirty, setNameInDirty] = useState();
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [userData, setUserData] = useState({
    name: name,
    email: email,
    password: "",
  });

  function cbClick() {
    console.log("click, userData >" + userData.name);
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
            setNameError("Ошибка. Имя должно быть больше 5 букв.");
          } else {
            setNameError("");
          }
          break;
        }
        case "email": {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(String(value).toLowerCase())) {
            setEmailError("Е-мейл указан неверно");
          } else {
            setEmailError("");
          }
        }
        case "password": {
          if (value.length < 5) {
            setPasswordError("Ошибка. Пароль должен быть больше 5 букв.");
          } else {
            setPasswordError("");
          }
          break;
        }
      }
    },
    [userData]
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailInDirty(true);
        break;
      case "password":
        setPassInDirty(true);
        break;
      case "name":
        setNameInDirty(true);
        break;
      default:
    }
  };

  function logout() {
    // e.preventDefault();
    console.log("logout из " + userData.name + ", " + userData.email);
  }

  function cbChangeProfile() {
    console.log("Меняем профиль " + userData.name + ", " + userData.email);
  }

  return (
    <div className="popup">
      {(mode == "signup" || mode == "signin") && (
        <img
          src={`${logoImage}`}
          alt="Логотип - зеленый бублик"
          className="popup__logo"
        />
      )}
      <h2 className={mode == "profile" ? "profile__title" : "popup__title"}>
        {greeting}
      </h2>

      <form
        className={mode == "profile" ? "profile__form" : "popup__form"}
        onSubmit={cbChange}
      >
        {(mode == "signup" || mode == "profile") && (
          <Input
            mode={mode == "profile" ? mode : "popup"}
            label={"Имя"}
            name={"Name"}
            cbChange={cbChange}
            blurHandler={blurHandler}
            userData={userData.name}
            errorName={nameError}
          />
        )}
        <Input
          mode={mode == "profile" ? mode : "popup"}
          label={"Емейл"}
          name={"Email"}
          cbChange={cbChange}
          blurHandler={blurHandler}
          userData={userData.email}
          errorName={emailError}
        />
        {(mode == "signup" || mode == "signin") && (
          <Input
            mode={mode == "profile" ? mode : "popup"}
            label={"Пароль"}
            name={"Password"}
            cbChange={cbChange}
            blurHandler={blurHandler}
            userData={userData.password}
            errorName={passwordError}
          />
        )}
      </form>
      {(mode == "signup" || mode == "signin") && (
        <div className="popup__buttons">
          <Button
            name={greenButton}
            onClick={cbClick}
            color={"bigGreen"}
            isActive={nameError + emailError + passwordError == ""}
          />
          <div className="popup__lowerLine">
            <p className="popup__buttonsComment">{buttonsText}</p>
            <Link to={linkTo} className="popup__smallButton">
              {smallButton}
            </Link>
          </div>
        </div>
      )}
      {mode == "profile" && (
        <div className="profile__buttons">
          <Button
            name={"Редактировать"}
            onClick={cbChangeProfile}
            color="white"
            isActive={nameError + emailError + passwordError == ""}
          />
          <Link to="/movies">
            <Button
              name={"Выйти из аккаунта"}
              onClick={logout}
              color={"red"}
              isActive="true"
            />
          </Link>
        </div>
      )}
    </div>
  );
};
