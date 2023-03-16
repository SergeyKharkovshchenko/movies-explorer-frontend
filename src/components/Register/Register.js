import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { signin, signup } from "../../utils/config";
import { Popup } from "../Popup";


export const Register = ({ onRegister, isLoading }) => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    message: "",
  });
  const currentUser = useSelector((state) => state.user.currentUser);

  const cbChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    },
    [formData]
  );

  const cbSubmit = useCallback(
    (event) => {
      onRegister(formData.Name, formData.Email, formData.Password);
    },
    [onRegister, formData]
  );

  if (currentUser) {
    return <Navigate to="/movies" />;
  }

  return (
    <section className="register">
      <Popup
        mode={"signup"}
        greeting={"Welcome!"}
        greenButton={signup.name}
        smallButton={signin.name}
        buttonsText={"Signed up?"}
        linkTo={signin.link}
        onSubmit={(e) => cbSubmit(e)}
        onChange={(e) => cbChange(e)}
        isLoading={isLoading}
      />
    </section>
  );
};
