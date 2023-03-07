import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MovieCover } from "../movie-cover";
import { deleteItemFromCart } from "../../store/cart/reducer";
import { useLocalStorage } from "../../utils/use_localstorage";
import "./order-item.css";
import { composeInitialProps } from "react-i18next";

export const OrderItem = ({ movie }) => {

  const [language, setLanguage] = useLocalStorage("language", "en");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(movie.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <MovieCover movie={movie} />
      </div>
      <div className="order-item__title">
        <span>{language == "en" ? movie.nameEN : movie.nameRU}</span>
      </div>
      <div className="order-item__price">
        <span>{movie.duration} USD</span>
        <AiOutlineCloseCircle
          size={30}
          className="cart-item__delete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
