import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./redux";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { SavedMovies } from "../SavedMovies";
import { Profile } from "../Profile";
import { Login } from "../Login";
import { Register } from "../Register";
import { Error404 } from "../Error404";
import { Menu320 } from "../Menu320";
import {ProtectedRoutes} from '../ProtectedRoutes'
import { useState, useEffect, useCallback } from 'react';
import * as auth from "../../utils/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import "./App.css";

export const App = () => {

const [loggedIn, setLoggedIn] = useState(false);
const [currentUser, setCurrentUser] = useState("");
const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('1st useEffect');
    cbCheckToken();
  }, []);

  useEffect(() => {
    loggedIn && auth
      // .getUserAndCards()
      // .then(([userData, cardData]) => {
        .getUserInfo()
        .then((userData) => {
        // setCards(cardData);
        JSON.stringify(userData)
        // console.log('currentUser > ' + JSON.stringify(userData));
        setCurrentUser(userData);
        console.log('.getUserInfo() > currentUser > ' + currentUser.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn, setLoggedIn]);

  const cbAuthentificate = useCallback((data, email) => {
    setLoggedIn(true);
    console.log('cbAuthentificate > loggedIn (true) > '+ loggedIn);
  
    // localStorage.setItem("jwt", data.token);
  }, [loggedIn, setLoggedIn]);

  const cbCheckToken = useCallback(async () => {
    try {
        // setLoading(true);
        const user = await auth.checkToken();
        JSON.stringify(user);
        if (!user) {
          throw new Error("Invalid user");
        }
        console.log("cbCheckToken > user > "+ user);

        setLoggedIn(prevState =>!prevState);
        console.log("cbCheckToken > loggedIn (true) > "+ loggedIn);
        
        // const cards = await api.getInitialCards();
        // JSON.stringify(cards);
        //       setCards(cards);

        setCurrentUser(user);
        console.log("cbCheckToken > currentUser > "+ currentUser);
        
      } catch (error) {console.log(`Ошибка: ${error}`)}
      //      finally {
      //   // setLoading(false);
      // }
  }, [loggedIn, setLoggedIn]);

  const cbLogin = useCallback(
    async (email, password) => {
    try {
      const data = await auth.login(email, password);
      if (!data) {
        throw new Error("Invalid credentials");
      }
      if (data) {
        cbAuthentificate(data, email);
      }
    } catch {
      // setInfoTooltipPopupOpen(true);
      // setTooltipMessage("fail");
    }
  }, [cbAuthentificate]);

  const cbRegister = useCallback(
    async (userName, email, password) => {
      try {
        const data = await auth.register(userName, email, password);
        if (!data) {
          throw new Error("Failed to register");
        }
        if (data) {
          // setInfoTooltipPopupOpen(true);
          // setTooltipMessage("success");
          cbAuthentificate(data, email);
        }
      } catch {
        // setInfoTooltipPopupOpen(true);
        // setTooltipMessage("fail");
      }
    },
    [cbAuthentificate]
  );

  const cbLogout = useCallback( () => {
    auth
    .logOut()      
    .catch((err) => {
      console.log(err);
    });
    // localStorage.removeItem("jwt");
    setLoggedIn(false);
    console.log('setLoggedIn (false)> '+ loggedIn);
    setCurrentUser("");
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    {/* // <Provider store={store}> */}
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Main />} />
          
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
            currentUser={currentUser} 
            logOut={cbLogout}/>
            </ProtectedRoutes>
            } />
          
          <Route path="/signin" element={<Login 
              isLoggedIn={loggedIn} 
              onLogin={cbLogin}
              /> } />

          <Route path="/signup" element={<Register               
              isLoggedIn={loggedIn}
              onRegister={cbRegister}
              // checkToken={cbCheckToken}
              />} />

          <Route path="/menu" element={<Menu320 />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
    {/* // </Provider> */}
    </CurrentUserContext.Provider>
  );
};
