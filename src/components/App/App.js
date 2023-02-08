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
import { Menu320 } from '../Menu320'
import {ProtectedRoutes} from '../ProtectedRoutes'
import * as auth from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import "./App.css";

export const App = () => {

const [loggedIn, setLoggedIn] = useState(false);
// const [userEmail, setUserEmail] = useState("");
const [currentUser, setCurrentUser] = useState("");
const [loading, setLoading] = useState(true);
const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
const [tooltipMessage, setTooltipMessage] = useState("");

useEffect(() => {
  console.log('useEffect1 loggedIn - ' + loggedIn);
  cbCheckToken();
}, []);

useEffect(() => {
  console.log('useEffect2 loggedIn - ' + loggedIn);
}, [loggedIn]);


  // useEffect(() => {
  //   loggedIn && auth
  //     // .getUserAndCards()
  //     // .then(([userData, cardData]) => {
  //       .getUserInfo()
  //       .then((userData) => {
  //       // setCards(cardData);
  //       setCurrentUser(userData);
  //       console.log('useEffect2 userData'+userData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [loggedIn]);

  const cbAuthentificate = useCallback((data, email) => {
    setLoggedIn(true);
    console.log('cbAuthentificate > loggedIn = '+loggedIn);
    // setUserEmail(email);
    // localStorage.setItem("jwt", data.token);
  }, []);

  const cbCheckToken = useCallback(async () => {
    try {
        console.log('cbCheckToken');
        setLoading(true);
        const user = await auth.checkToken();
        JSON.stringify(user);
        if (!user) {
          throw new Error("Invalid user");
        }
        setLoggedIn(true);
        console.log('cbCheckToken > loggedIn = ' + loggedIn);
        // setUserEmail(user.email);
        // const cards = await api.getInitialCards();
        // JSON.stringify(cards);
        //       setCards(cards);
        setCurrentUser(user);
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
  // }, []);
});

  const cbLogin = useCallback(async (email, password) => {
    try {
      setLoading(true);
      const data = await auth.login(email, password);
      if (!data) {
        throw new Error("Неверный пользователь или пароль");
      }
      if (data) {
        console.log('cbLogin -> cbAuthentificate');
        cbAuthentificate(data, email);
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage(err.message);
    }
    finally {
      setLoading(false);
    }
  }, []);

  const cbRegister = useCallback(
    async (userName, email, password) => {
      try {
        setLoading(true);
        const data = await auth.register(userName, email, password);
        if (!data) {
          throw new Error("Не удалось зарегистрироваться");
        }
        if (data) {
          // setInfoTooltipPopupOpen(true);
          // setTooltipMessage("success");
          console.log('cbRegister -> cbAuthentificate');
          cbAuthentificate(data, email);
        }
      } catch (err) {
        setInfoTooltipPopupOpen(true);
        setTooltipMessage(err.message);
      }
      finally {
        setLoading(false);
      }
    },
    [cbAuthentificate]
  );

const closeTooltip = () => {
  setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  console.log('closeTooltip -> isInfoTooltipPopupOpen '+isInfoTooltipPopupOpen);
}

  const cbLogout = useCallback( () => {
    auth
    .logOut()      
    .catch((err) => {
      console.log(err);
    });
    // localStorage.removeItem("jwt");
    setLoggedIn(false);
    console.log('cbLogout > loggedIn = ' + loggedIn);
    // setUserEmail("");
    setCurrentUser("");
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    {/* // <Provider store={store}> */}
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Main />} />
          
            <Route path="/movies" element={
            <ProtectedRoutes isLoggedIn={loggedIn}>
            <Movies 
              
            />
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

          {/* <Route path="/menu" element={<Menu320 />} /> */}
          <Route path="/404" element={<Error404 />} />
        </Routes>

        {isInfoTooltipPopupOpen&&<InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          // onClose={closeAllPopups}
          message={tooltipMessage}
          onClick={closeTooltip}
          // successMessage='Successful sign up!'
          // failMessage='Something went wrong! Please try again.'
        />}

      </div>
    </Router>



    {/* // </Provider> */}
    </CurrentUserContext.Provider>
  );
};
