import React from 'react';
import { useSelector} from 'react-redux';
import { ItemsInCart } from '../items-in-cart';
import { OrderItem } from '../order-item';
import { calcTotalPrice, enumerate } from '../../utils/utils';
import './order-page.css';

export const OrderPage = () => {

    const items = useSelector(state => state.cart.itemsInCart);

    if (items.length < 1 ) {
        return (<h1>Ваша корзина пуста</h1>)
    }

    return (
        <div className="order-page">
            <div className='order-page__left'>
            {items.map(game => <OrderItem game={game} />)}
            </div>
            <div className='order-page__right'>
                <div className='order-page__total_price'>
                <span>
                  {items.length} items with total price { calcTotalPrice(items) } USD.
                </span>
                </div>
            </div>
        </div>
    )
} 

