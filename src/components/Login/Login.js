import React from "react";
import "./Login.css";
import { Popup } from "../Popup";

import { signup, signin } from "../../utils/config";

export const Login = () => {
  return (
    <div className="login">
      <Popup
        mode={"signin"}
        greeting={"Рады видеть!"}
        name={"Виталий"}
        email={"емейл"}
        greenButton={signin.name}
        smallButton={signup.name}
        buttonsText={"Ещё не зарегистрированы?"}
        linkTo={signup.link}
      />
    </div>
  );
};
