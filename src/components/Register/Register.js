import React from "react";
import "./Register.css";
import { Popup } from "../Popup";
import { signin, signup } from "../../utils/config";

export const Register = () => {
  return (
    <section className="register">
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
    </section>
  );
};
