import React from "react";
// импортим реакт-редаксовый хук useDispatch
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button2";
import { useTranslation } from "react-i18next";
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import "./product-buy.css";

// передаем целую игру, тк она дальше пойдет в корзину
export const ProductBuy = ({ movie }) => {
  if (!movie.id) movie.id=movie.movieId;
  const { t } = useTranslation();

  //чтобы использовать хук делаем переменную
const dispatch = useDispatch();
  
const handleClick = (e) => {
// отменяем всплытие клика
  e.stopPropagation();
// передаем экшен в редьюсер (диспатч экшена)
  if (isItemInCart) {
// диспатчим экшен делит
    dispatch(deleteItemFromCart(movie.id));  
  } else {
// при нажатии на кнопку передаем экшен добавления в корзину (вызываем экшен)
// в пейлоад передаем игру
// и там игра добавится в массив через push 
    dispatch(setItemInCart(movie));
  }  
}

// юзселектором загрузили стейт
const items = useSelector (state => state.cart.itemsInCart)
// проверка есть ли фильм из пропса movie в корзине
const isItemInCart = items.some(item => item.id === movie.id)

 return (
    <div className="product-buy">
{/* если игра есть в корз, то в комп Button передадим secondary итам поменяется стиль */}
          <div className="product-buy__button">
          <Button 
            type={isItemInCart ? "secondary" : "primary" }
/* в комп Button передадим обработку онклик */
            onClick={handleClick}
          >
         {isItemInCart ? t('Remove from cart') : t('Add to cart')}            
          </Button>
          </div>
    <span className="product-buy__price">{movie.duration} USD.</span>
    </div>
  );
};

