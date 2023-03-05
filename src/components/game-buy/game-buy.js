import React from "react";
// импортим реакт-редаксовый хук useDispatch
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../button2";
import { useTranslation } from "react-i18next";
import { setItemInCart, deleteItemFromCart } from '../../redux/cart/reducer'
import "./game-buy.css";

// передаем целую игру, тк она дальше пойдет в корзину
export const GameBuy = ({ game }) => {

  const { t } = useTranslation();

  //чтобы использовать хук делаем переменную
const dispatch = useDispatch();
// ЮС-ом загрузили сте
const items = useSelector (state => state.cart.itemsInCart)
// проверка есть ли игра из пропса game в корзине
const isItemInCart = items.some(item => item.id === game.id)
  
const handleClick = (e) => {
// отменяем всплытие клика
  e.stopPropagation();
// передаем экшен в редьюсер (диспатч экшена)
  if (isItemInCart) {
// диспатчим экшен делит
    dispatch(deleteItemFromCart(game.id));  
  } else {
// при нажатии на кнопку передаем экшен добавления в корзину (вызываем экшен)
// в пейлоад передаем игру
// и там игра добавится в массив через push 
    dispatch(setItemInCart(game));
  }
  
}

  return (
    <div className="game-buy">
{/* если игра есть в корз, то в комп Button передадим secondary итам поменяется стиль */}
          <div className="game-buy__button">
          <Button 
            type={isItemInCart ? "secondary" : "primary" }
/* в комп Button передадим обработку онклик */
            onClick={handleClick}
          >
         {isItemInCart ? t('Remove from cart') : t('Add to cart')}            
          </Button>
          </div>
    <span className="game-buy__price">{game.duration} USD.</span>
    </div>
  );
};

