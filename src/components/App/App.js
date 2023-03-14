import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { Main } from "../Main";
import { OrderPage } from "../order-page";
import { Movies } from "../Movies";
import { SavedMovies } from "../SavedMovies";
import { Profile } from "../Profile";
import { InfoTooltip } from "../InfoTooltip";
import { Login } from "../Login";
import { Register } from "../Register";
import { Error404 } from "../Error404";
import { Preloader } from "../Preloader";
import { MoviePage } from '../movie-page';
import { ProtectedRoutes } from "../ProtectedRoutes";
import { ProtectedRoutesMain } from "../ProtectedRoutes copy";
import * as mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/use_localstorage";
import i18n from "../../utils/i18n";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');
  
    function handleLanguageChange () {
    if (language === 'en') {
        i18n.changeLanguage('ru');
        setLanguage('ru');
    } else if (language === 'ru') {
        i18n.changeLanguage('en');
        setLanguage('en');
    }
};


  useEffect(() => {
    cbCheckToken();
  }, []);

  const cbAuthentificate = useCallback((user) => {
    setLoggedIn(true);
    setCurrentUser({ name: user.name, _id: user._id, email: user.email });
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
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setLoading(false);
    }
  });

  const cbLogin = useCallback(async (email, password) => {
    try {
      // setLoading(true);
      setIsLoading(true);
      const res = await mainApi.login(email, password);
      if (!res) {
        throw new Error("Connection Error. Please try again later.");
      }
      if (res) {
        cbAuthentificate(res);
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Wrong user or password");
    } finally {
      // setLoading(false);
      setIsLoading(false);
    }
  }, []);

  const cbRegister = useCallback(async (userName, email, password) => {
    try {
      setIsLoading(true);
      // setLoading(true);
      const res = await mainApi.register(userName, email, password);
      if (!res) {
        throw new Error("Connection Error. Please try again later.");
      }
      if (res) {
        cbAuthentificate(res);
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Wrong user or password");
    } finally {
      setIsLoading(false);
      // setLoading(false);
    }
  }, []);

  const cbChangeProfile = useCallback(async (userName, email) => {
    try {
      setLoading(true);
      const res = await mainApi.handleProfileChange(userName, email);
      if (!res) {
        throw new Error("Error");
      }
      setCurrentUser(res);
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Profile was successfully changed");
    } catch (error) {
      console.log(`Ошибка: ${error}`);
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Error. This email might be already in use");
    } finally {
      setLoading(false);
    }
  });

  const cbLogout = useCallback(() => {
    mainApi.logOut(currentUser._id).catch((err) => {
      console.log(err);
    });
    setLoggedIn(false);
    setCurrentUser("");
    localStorage.clear("searchKey");
    localStorage.clear("isSwitched");
    localStorage.clear("searchResult");
  }, []);

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  };

  if (loading) {
    return <Preloader />;
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
       <Provider store={store}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                // <ProtectedRoutesMain isLoggedIn={loggedIn}>
                  <Main 
                  isLoggedIn={loggedIn} 
                  handleLanguageChange={handleLanguageChange}
                  />
                // </ProtectedRoutesMain>
              }
            />

            <Route
              path="/movies"
              element={
                  <Movies isLoggedIn={loggedIn}/>
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoutes isLoggedIn={loggedIn}>
                  <SavedMovies isLoggedIn={loggedIn}/>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoutes isLoggedIn={loggedIn}>
                  <Profile
                    logOut={cbLogout}
                    changeProfile={cbChangeProfile}
                    isLoading={isLoading}
                  />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/signin"
              element={
                <Login
                  isLoggedIn={loggedIn}
                  onLogin={cbLogin}
                  isLoading={isLoading}
                />
              }
            />

            <Route path="movies/movie-page" element={<MoviePage />} />
            <Route path="saved-movies/movie-page" element={<MoviePage />} />
            <Route  path="/order" element={<OrderPage />} />

            <Route
              path="/signup"
              element={
                <Register
                  isLoggedIn={loggedIn}
                  onRegister={cbRegister}
                  isLoading={isLoading}
                />
              }
            />

          <Route path="*" element={<Error404 />} />
          </Routes>

          {isInfoTooltipPopupOpen && (
            <InfoTooltip
              isOpen={isInfoTooltipPopupOpen}
              // onClose={closeAllPopups}
              message={tooltipMessage}
              onClick={closeTooltip}
            />
          )}
        </div>
      </Router>

      </Provider>
    </CurrentUserContext.Provider>
  );
};
