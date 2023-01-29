import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import { Main } from "../Main";
import { Movies } from "../Movies";
import { SavedMovies } from "../SavedMovies";
import { Profile } from "../Profile";
import { Login } from "../Login";
import { Register } from "../Register";
// import { Footer } from "../Footer";
import { Error404 } from "../Error404";
import { Menu320 } from "../Menu320";
// import { store } from "./redux";
import "./App.css";

export const App = () => {
  return (
    // <Provider store={store}>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/menu" element={<Menu320 />} />
          <Route path="/404" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
    // </Provider>
  );
};
