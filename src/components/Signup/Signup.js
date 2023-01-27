import React from "react";
import "./Signup.css";
import { Popup } from "../Popup";
import { signin, signup } from "../../utils/config";

export const Signup = () => {
  return (
    <div className="signup">
      <Popup
        mode={"signup"}
        greeting={"Добро пожаловать!"}
        name={"Виталий"}
        email={"емейл"}
        greenButton={signup.name}
        smallButton={signin.name}
        buttonsText={"Уже зарегистрированы?"}
        linkTo={signin.link}
      />
    </div>
  );
};
