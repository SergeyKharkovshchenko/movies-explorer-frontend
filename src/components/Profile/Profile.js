import React, { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Header } from "../Header";
import { Popup } from "../Popup";

export const Profile = ({logOut}) => {

  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  return (
    
    <section className="profile">
    <header>
      <Header mode={"white"} />
    </header>
    <main>
      <Popup
        mode={"profile"}
        greeting={`Привет, ${currentUser.name}`}
        name={`${userData.name}`}
        email={`${userData.email}`}
        greenButton={"Редактировать"}
        smallButton={"Выйти из аккаунта"}
        buttonsText={""}
        linkTo={""}
        logOut={logOut}
      />
   </main>
    </section>
  );
};
