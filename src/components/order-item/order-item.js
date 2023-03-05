import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GameCover } from '../game-cover/game-cover';
import { deleteItemFromCart } from '../../store/cart/reducer';
import { useLocalStorage } from "../../utils/use_localstorage";
import './order-item.css';

export const OrderItem = ({ game }) => {

const [language, setLanguage] = useLocalStorage('language', 'en');

    const dispatch = useDispatch ();

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    
    return (
        <div className="order-item">
            <div className="order-item__cover">
                <GameCover image={`https://api.nomoreparties.co/${game.image.url}`} />
            </div>
            <div className="order-item__title">
                <span>
                { language == 'en'? game.nameEN : game.nameRU}
                </span>
            </div>
            <div className="order-item__price">
                <span>{game.duration} USD.</span>
                <AiOutlineCloseCircle 
                    size={30}
                    className="cart-item__delete-icon"
                    onClick = {handleClick}
                />
            </div>
        </div>
    )
}
