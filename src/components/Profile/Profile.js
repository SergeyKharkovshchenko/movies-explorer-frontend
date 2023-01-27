import React, { useCallback } from "react";
import "./Profile.css";
import { Header } from "../Header";
import { Popup } from "../Popup";

export const Profile = () => {

  const [userData, setUserData] = React.useState({
    name: "Виталий",
    email: "Виталий@yandex.ru",
  });

  // const cbChange = useCallback(
  //   (event) => {
  //     const { name, value } = event.target;
  //     setUserData({
  //       ...userData,
  //       [name]: value,
  //     });
  //   },
  //   [userData]
  // );

  // function logout(e) {
  //   e.preventDefault();
  //   console.log("logout из " + userData.name + ", " + userData.email);
  // }

  return (
    <div className="profile">
      <Header mode={"white"} />

      <Popup
        mode={"profile"}
        greeting={`Привет, ${userData.name}`}
        name={"Виталий"}
        email={"емейл"}
        greenButton={"Редактировать"}
        smallButton={"Выйти из аккаунта"}
        buttonsText={""}
        linkTo={""}
      />
   
    </div>
  );
};
