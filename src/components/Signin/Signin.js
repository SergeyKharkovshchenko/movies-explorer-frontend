import React from "react";
import "./Signin.css";
import { Popup } from "../Popup";

import { signup, signin } from "../../utils/config";

export const Signin = () => {
  return (
    <div className="signin">
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
