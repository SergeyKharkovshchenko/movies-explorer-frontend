import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, logoutUser } from '../../store/user/reducer';
import { Main } from '../Main';
import { OrderPage } from '../order-page';
import { Movies } from '../Movies';
import { SavedMovies } from '../SavedMovies';
import { Profile } from '../Profile';
import { InfoTooltip } from '../InfoTooltip';
import { Login } from '../Login';
import { Register } from '../Register';
import { Error404 } from '../Error404';
import { Preloader } from '../Preloader';
import { MoviePage } from '../movie-page';
import { ProtectedRoutes } from '../ProtectedRoutes';
import * as mainApi from '../../utils/MainApi';
import { useLocalStorage } from '../../utils/use_localstorage';
import i18n from '../../utils/i18n';
import './App.css';

export const App = () => {
  // Preloader state
  const [loading, setLoading] = useState(true);
  // State for blocking inputs during request processing
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const dispatch = useDispatch();
  // get user from redux
  // from global state go to reducer user and get currentUser
  const currentUser = useSelector((state) => state.user.currentUser);

  function handleLanguageChange() {
    if (language === 'en') {
      i18n.changeLanguage('ru');
      setLanguage('ru');
    } else if (language === 'ru') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  }

  useEffect(() => {
    cbCheckToken();
  }, []);

  const cbCheckToken = useCallback(async () => {
    try {
      setLoading(true);
      const user = await mainApi.checkToken();
      if (!user) {
        throw new Error('Invalid user');
      }
      dispatch(setUser(user));
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    } finally {
      setLoading(false);
    }
  });

  const cbLogin = useCallback(async (email, password) => {
    try {
      setIsLoading(true);
      const res = await mainApi.login(email, password);
      if (!res) {
        throw new Error('Connection Error. Please try again later.');
      }
      if (res) {
        dispatch(setUser(res));
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage('Wrong user or password');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cbRegister = useCallback(async (userName, email, password) => {
    try {
      setIsLoading(true);
      const res = await mainApi.register(userName, email, password);
      if (!res) {
        throw new Error('Connection Error. Please try again later.');
      }
      if (res) {
        dispatch(setUser(res));
      }
    } catch (err) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage('Wrong user or password');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cbChangeProfile = useCallback(async (userName, email) => {
    try {
      setLoading(true);
      setIsLoading(true);
      const res = await mainApi.handleProfileChange(userName, email);
      if (!res) {
        throw new Error('Error');
      }
      dispatch(setUser(res));
      setInfoTooltipPopupOpen(true);
      setTooltipMessage('Profile was successfully changed');
    } catch (error) {
      console.log(`Ошибка: ${error}`);
      setInfoTooltipPopupOpen(true);
      setTooltipMessage('Error. This email might be already in use');
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  });

  const cbLogout = useCallback(async () => {
    try {
      const res = await mainApi.logOut(currentUser._id);
      if (!res) {
        throw new Error('Error');
      }
      dispatch(logoutUser());
      localStorage.clear('searchKey');
      localStorage.clear('isSwitched');
      localStorage.clear('searchResult');
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    }
  });

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                handleLanguageChange={handleLanguageChange}
              />
            }
          />

          <Route
          path="/movies"
          element={<Movies />} />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoutes>
                <SavedMovies />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
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
                onLogin={cbLogin}
                isLoading={isLoading}
              />
            }
          />

          <Route path="movies/movie-page" element={<MoviePage />} />
          <Route path="saved-movies/movie-page" element={<MoviePage />} />
          <Route path="/order" element={<OrderPage />} />

          <Route
            path="/signup"
            element={
              <Register
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
            message={tooltipMessage}
            onClick={closeTooltip}
          />
        )}
      </div>
    </Router>
  );
};
