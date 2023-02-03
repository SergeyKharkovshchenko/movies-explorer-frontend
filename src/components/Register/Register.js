import React, { useCallback, useState } from "react";
import { Popup } from "../Popup";
import { signin, signup } from "../../utils/config";
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

// const cbSubmit = useCallback (event => {
  const cbSubmit = useCallback ( (userName, email, pas) => {
  // console.log("Register.js -> cbSubmit");
  // event.preventDefault();
  console.log("Register.js -> cbSubmit > " + userName +  email + pas);
  // console.log("Register.js -> cbSubmit > " + formData.email + formData.password);
  // onRegister(formData.email, formData.password);
  onRegister(userName, email, pas);
}, [onRegister, formData])

  if (isLoggedIn) {
    return <Redirect to='/' />
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
        onSubmit={(userName, email, pas) => cbSubmit(userName, email, pas)}
      />
    </section>
  );
};
