import React, { useCallback } from "react";
import "./Profile.css";
import { Header } from "../Header";
import { Popup } from "../Popup";

export const Profile = () => {

  const [userData, setUserData] = React.useState({
    name: "Виталий",
    email: "Виталий@yandex.ru",
  });

  return (
    <section className="profile">
    <header>
      <Header mode={"white"} />
    </header>
    <main>
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
   </main>
    </section>
  );
};
