import React, { useCallback, useState } from "react";
import { Popup } from "../Popup";
import { signin, signup } from "../../utils/config";
import { Navigate } from 'react-router-dom';
import "./Register.css";

export const Register = ({isLoggedIn, onRegister}) => {

  const [formData, setFormData] = useState ({
    password: '',
    email: '',
    message: ''
  })

const cbChange = useCallback(
  (event) => {
    const {name, value} = event.target;
    setFormData ({
      ...formData,
      [name]: value
    })
  },
  [formData],
)

const cbSubmit = useCallback ( (e) => {
  // const cbSubmit = useCallback ( (userName, email, pas) => {
  // console.log("Register.js -> cbSubmit");
  // e.preventDefault();
  // console.log("Register.js -> cbSubmit > " + userName +  email + pas);
  // console.log("Register.js -> cbSubmit > " + formData.email + formData.password);
  onRegister(formData.name, formData.email, formData.password);
  // onRegister(userName, email, pas);
}, [onRegister, formData])

  if (isLoggedIn) {
    return <Navigate to='/movies' />
  }

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
        onSubmit={cbSubmit}
      />
    </section>
  );
};
