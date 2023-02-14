import React, { useCallback, useState } from "react";
import { Popup } from "../Popup";
import { signup, signin } from "../../utils/config";
import { Navigate } from 'react-router-dom';
import "./Login.css";

export const Login = ({isLoggedIn, onLogin}) => {

  const [userData, setUserData] = useState({
    password: '',
    email: ''
  })

  const cbChange = useCallback(
    (event) => {
      event.preventDefault();
      const {name, value} = event.target;
      setUserData ({
        ...userData,
        [name]: value
      })
    },
    [userData],
  )

  const cbSubmit = useCallback (async(event) => {
    try{
      await onLogin(userData.Email, userData.Password);  
    } catch (err) {
      console.log(err);
    }
  }, [userData, onLogin])

if (isLoggedIn) {
  return <Navigate to='/movies' />
}
  
  return (
    <div className="login">
      <Popup
        mode={"signin"}
        greeting={"Рады видеть!"}
        greenButton={signin.name}
        smallButton={signup.name}
        buttonsText={"Ещё не зарегистрированы?"}
        linkTo={signup.link}
        onSubmit={(e) => cbSubmit(e)}
        onChange = {(e) => cbChange (e)}
      />
    </div>
  );
};
