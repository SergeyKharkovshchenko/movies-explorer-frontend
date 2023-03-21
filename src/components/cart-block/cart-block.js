import React, { useCallback } from "react";
// import useSelector to use array ItemsInCart
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import of library with icons - for cart icon
// import { BiCartAlt } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
// CartMenu shows up when cart is clicked
import { CartMenu } from "../cart-menu";
// we import array ItemsInCart, to get his length and total price
import { ItemsInCart } from "../items-in-cart";
// returns total price
import { calcTotalPrice } from '../../utils/utils';
import "./cart-block.css";

export const CartBlock = ( { mode } ) => {
// this state is resonsible for CartMenu showing up
  const [isCartMenuVisible, setIsCartMenuVisible] = React.useState(false)
// we give useSelector into variable 'items'
// useSelector receives function, with first argument state. From state we need cart.itemsInCart
// we receive array
  const items = useSelector (state => state.cart.itemsInCart); 
// we get a total price
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  
const handleClick = useCallback(() => {
  setIsCartMenuVisible(false);
  navigate('/order');
}, [navigate]);

  return (
    <div className="cart-block">
{/* red circle with current array langth*/}
    <ItemsInCart quantity={items.length} />
{/*to show cart icon we use it as component. And we hide it when BiCartAlt is clicked*/}
      <BiCart size={35} 
      className={ mode=='main'? "cart-block__icon white" : "cart-block__icon" }
      onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/> 
             {totalPrice > 0 ? (
// we show total proce if it's not zero
         <span 
         className={ mode=='main'? "cart-block__total-price white" : "cart-block__total-price" }
         >{totalPrice} USD.</span>
       ) : null}
{/* popup CartMenu*/}
         {isCartMenuVisible && <CartMenu items = {items} onClick={ handleClick } /> }
    </div>
  );
};

