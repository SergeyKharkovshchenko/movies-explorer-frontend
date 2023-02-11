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

const cbSubmit = useCallback (event => {
  onRegister(formData.Name, formData.Email, formData.Password);
}, [onRegister, formData])

  if (isLoggedIn) {
    return <Navigate to='/movies' />
  }

  return (
    <section className="register">
      <Popup
        mode={"signup"}
        greeting={"Добро пожаловать!"}
        // name={"имя"}
        // email={"емейл"}
        // password={"пароль"}
        greenButton={signup.name}
        smallButton={signin.name}
        buttonsText={"Уже зарегистрированы?"}
        linkTo={signin.link}
        onSubmit={(e) => cbSubmit(e)}
        onChange={(e)=>cbChange(e)}
      />
    </section>
  );
};
