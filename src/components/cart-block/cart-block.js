import React, { useState, useCallback } from "react";
// имп юзселектор чтобы использовать массив ItemsInCart
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// импорт либы с иконками - для иконки корзины
// import { BiCartAlt } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
// выплывает при нажатии на корзину
import { CartMenu } from "../cart-menu";
// импортируем массив ItemsInCart, чтобы получить позже его длину и тотал прайс
import { ItemsInCart } from "../items-in-cart";
// возвращает общую цену
import { calcTotalPrice } from '../../utils/utils';
import "./cart-block.css";

export const CartBlock = ( { mode } ) => {
// стейт отвечает за вcплытие CartMenu
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false)
// в переменную items запишем юзселектор
// ЮС принимает функцию, в кот первый агрумент стейт и из стейта нам нужен cart.itemsInCart
// получили массив
  const items = useSelector (state => state.cart.itemsInCart); 
// получим тотал прайс
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  
const handleClick = useCallback(() => {
  setIsCartMenuVisible(false);
  // history.push('/order');
  navigate('/order');
// }, {history});
}, [navigate]);

  return (
    <div className="cart-block">
{/* красный кружок с длиной текущего массива*/}
    <ItemsInCart quantity={items.length} />
{/*чтобы иконка корзины отобразилась используем ее как комп. И при клике на BiCartAlt скрываем*/}
      <BiCart size={35} 
      className={ mode=='main'? "cart-block__icon white" : "cart-block__icon" }
      onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/> 
             {totalPrice > 0 ? (
// отобразим цену, если она не ноль
         <span 
         className={ mode=='main'? "cart-block__total-price white" : "cart-block__total-price" }
         >{totalPrice} USD.</span>
       ) : null}
{/* выплывающее CartMenu*/}
         {isCartMenuVisible && <CartMenu items = {items} onClick={ handleClick } /> }
    </div>
  );
};

