import React from "react";
// we import react-redux hook useDispatch
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button2";
import { useTranslation } from "react-i18next";
import { setItemInCart, deleteItemFromCart } from '../../store/cart/reducer'
import "./product-buy.css";

// we give whole movie, as it will go to cart next
export const ProductBuy = ({ movie }) => {
  if (!movie.id) movie.id=movie.movieId;
  const { t } = useTranslation();

// to use hook we create a variable
const dispatch = useDispatch();
  
const handleClick = (e) => {
// stop click propagation
  e.stopPropagation();
// we transfer(dispatch) action to reducer
  if (isItemInCart) {
// we transfer(dispatch) delete action
    dispatch(deleteItemFromCart(movie.id));  
  } else {
// after button was clicked we dipatch action of adding to cart
// we put movie into payload
// and there we add movie into array using push
    dispatch(setItemInCart(movie));
  }  
}

// we load state using useSelector
const items = useSelector (state => state.cart.itemsInCart)
// checking if movie from props is in cart
const isItemInCart = items.some(item => item.id === movie.id)

 return (
    <div className="product-buy">
{/* if movie is in cart, then we transfer 'secondary' styke to Button */}
          <div className="product-buy__button">
          <Button 
            type={isItemInCart ? "secondary" : "primary" }
/* we put click handler into Button */
            onClick={handleClick}
          >
         {isItemInCart ? t('Remove from cart') : t('Add to cart')}            
          </Button>
          </div>
    <span className="product-buy__price">{movie.duration} USD.</span>
    </div>
  );
};

