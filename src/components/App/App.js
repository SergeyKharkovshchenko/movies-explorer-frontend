import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
// import { Provider } from "react-redux";
// import { store } from "./redux";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { SavedMovies } from "../SavedMovies";
import { Profile } from "../Profile";
import { InfoTooltip } from "../InfoTooltip";
import { Login } from "../Login";
import { Register } from "../Register";
import { Error404 } from "../Error404";
import { Preloader } from '../Preloader';
import { Navigate } from 'react-router-dom';
import {ProtectedRoutes} from '../ProtectedRoutes'
import {ProtectedRoutesMain} from '../ProtectedRoutes copy'
import * as mainApi from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Menu320 } from "../Menu320";
import "./App.css";

export const App = () => {

const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState("");
const [loading, setLoading] = useState(true);
const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
const [tooltipMessage, setTooltipMessage] = useState("");

useEffect(() => {
  cbCheckToken();
}, []);

  const cbAuthentificate = useCallback((user) => {
    setLoggedIn(true);
    setCurrentUser({name: user.name, _id: user._id, email:user.email})
  }, []);

  const cbCheckToken = useCallback(async () => {
    try {
        setLoading(true);
        const user = await mainApi.checkToken();
        JSON.stringify(user);
        if (!user) {
          throw new Error("Invalid user");
        }
        setLoggedIn(true);
        setCurrentUser(user);
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
});

  const cbLogin = useCallback(async (email, password) => {
    try {
      // setLoading(true);
      const res = await mainApi.login(email, password);
      if (!res) {
        throw new Error("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
      }
      if (res) {
        cbAuthentificate(res);
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Неверный пользователь или пароль");
    }
    // finally {
    //   setLoading(false);
    // }
  }, []);

  const cbRegister = useCallback(
    async (userName, email, password) => {
      try {
        // setLoading(true);
        const res = await mainApi.register(userName, email, password);
        if (!res) {
          throw new Error("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        }
        if (res) {
          cbAuthentificate(res);
        }
      } catch (err) {
        setInfoTooltipPopupOpen(true);
        setTooltipMessage('Не удалось зарегистрироваться, такой емейл уже существует');
      }
      // finally {
      //   setLoading(false);
      // }
    },[]);

  const cbChangeProfile = useCallback(async (userName, email) => {
    try {
        setLoading(true);
        const res = await mainApi.handleProfileChange(userName, email);
        if (!res) {
          throw new Error("Error");
        }
        setCurrentUser(res);
        setInfoTooltipPopupOpen(true);
        setTooltipMessage("Профиль изменен успешно");
      } catch (error) {
        console.log(`Ошибка: ${error}`);
        setInfoTooltipPopupOpen(true);
        setTooltipMessage("Произошла ошибка, попробуйте другой емейл");
      }
           finally {
        setLoading(false);
      }
  });

  const cbLogout = useCallback( () => {
    mainApi
    .logOut(currentUser._id)      
    .catch((err) => {
      console.log(err);
    });
    // localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser("");
    localStorage.clear('searchKey');
    localStorage.clear('isSwitched');
    localStorage.clear('searchResult');
  }, []);

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  }  

  if (loading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    {/* // <Provider store={store}> */}
    <Router>
      <div className="app">
        <Routes>

            <Route path="/" element={
            <ProtectedRoutesMain isLoggedIn={loggedIn}>
            <Main isLoggedIn={loggedIn}/>
            </ProtectedRoutesMain>
            } />

            <Route path="/movies" element={
            <ProtectedRoutes isLoggedIn={loggedIn}>
            <Movies />
            </ProtectedRoutes>
            } />

            <Route path="/saved-movies" element={
            <ProtectedRoutes isLoggedIn={loggedIn}>
            <SavedMovies />
            </ProtectedRoutes>  
            } />

            <Route path="/profile" element={
            <ProtectedRoutes isLoggedIn={loggedIn}>
            <Profile 
            logOut={cbLogout}
            changeProfile={cbChangeProfile}
            />
            </ProtectedRoutes>
            } />
          
          <Route path="/signin" element={
              <Login 
              isLoggedIn={loggedIn} 
              onLogin={cbLogin}
              /> } 
           />

          <Route path="/signup" element={
          <Register               
              isLoggedIn={loggedIn}
              onRegister={cbRegister}
              // checkToken={cbCheckToken}
              />} />

            <Route path="/menu" element={
            <ProtectedRoutes isLoggedIn={loggedIn}>
            <Menu320 />
            </ProtectedRoutes>  
            } />

          <Route path="*" element={<Error404 />} />
        </Routes>

        {isInfoTooltipPopupOpen&&<InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          // onClose={closeAllPopups}
          message={tooltipMessage}
          onClick={closeTooltip}
        />}

      </div>
    </Router>

    {/* // </Provider> */}
    </CurrentUserContext.Provider>
  );
};
