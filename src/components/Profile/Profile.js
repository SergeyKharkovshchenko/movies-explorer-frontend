import React, { useContext, useCallback, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Header } from "../Header";
import { Popup } from "../Popup";
import * as mainApi from "../../utils/MainApi";
import { Preloader } from "../Preloader";

export const Profile = ({logOut}) => {

  const [loading, setLoading] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const cbChangeProfile = useCallback(async (user) => {
    try {
        setLoading(true);
        const res = await mainApi.handleProfileChange(user);
        if (!res) {
          throw new Error("Error");
        }
        setUserData(res);
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
  });
  
  if (loading) {
    return <Preloader />;
  }

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <section className="profile">
    <header>
      <Header mode={"white"} />
    </header>
    <main>
      <Popup
        mode={"profile"}
        greeting={`Привет, ${userData.name}`}
        name={`${userData.name}`}
        email={`${userData.email}`}
        greenButton={"Редактировать"}
        smallButton={"Выйти из аккаунта"}
        buttonsText={""}
        linkTo={""}
        logOut={logOut}
        onChangeProfile={(user)=>cbChangeProfile(user)}
      />
   </main>
    </section>
    // </CurrentUserContext.Provider>    
  );
};
