import React, { useContext, useCallback, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Header } from "../Header";
import { Popup } from "../Popup";
import { Preloader } from "../Preloader";

export const Profile = ({logOut, changeProfile, isLoading}) => {

  const [loading, setLoading] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const [userData, setUserData] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const cbChange = useCallback(
    (event) => {
      const {name, value} = event.target;
      setUserData ({
        ...userData,
        [name.toLowerCase()]: value
      });
    },
    [userData],
  )

  const cbChangeProfile = useCallback (event => {
    changeProfile(userData.name, userData.email);
  }, [userData])

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
        greeting={`His, ${userData.name}`}
        name={`${userData.name}`}
        email={`${userData.email}`}
        greenButton={"Edit"}
        smallButton={"Log out"}
        buttonsText={""}
        linkTo={""}
        logOut={logOut}
        onChangeProfile={(e)=>cbChangeProfile(e)}
        onChange = {(e) => cbChange (e)}
        isLoading={isLoading}
      />
   </main>
    </section>
    //  </CurrentUserContext.Provider>    
  );
};
