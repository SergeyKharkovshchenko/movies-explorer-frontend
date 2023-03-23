import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Header } from '../Header';
import { Popup } from '../Popup';
import { Preloader } from '../Preloader';

export const Profile = ({ logOut, changeProfile, isLoading }) => {
  const { t } = useTranslation();

  // достаем из ридакса юзера
  // идем в глобальный стейт, идем в наш редьюсер user и там забираем currentUser
  const currentUser = useSelector((state) => state.user.currentUser);

  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const cbChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setUserData({
        ...userData,
        [name.toLowerCase()]: value,
      });
    },
    [userData],
  );

  const cbChangeProfile = useCallback(
    (event) => {
      changeProfile(userData.name, userData.email);
    },
    [userData],
  );

  if (loading) {
    return <Preloader />;
  }

  return (
    <section className="profile">
      <header>
        <Header mode={'white'} />
      </header>
      <main>
        <Popup
          mode={'profile'}
          greeting={`${t('Hi')}, ${userData.name}`}
          name={`${userData.name}`}
          email={`${userData.email}`}
          greenButton={'Edit'}
          smallButton={'Log out'}
          buttonsText={''}
          linkTo={''}
          logOut={logOut}
          onChangeProfile={(e) => cbChangeProfile(e)}
          onChange={(e) => cbChange(e)}
          isLoading={isLoading}
        />
      </main>
    </section>
  );
};
