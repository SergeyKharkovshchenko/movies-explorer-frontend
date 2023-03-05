// import { getTimeMeasureUtils } from "@reduxjs/toolkit/dist/utils";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button2";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/use_localstorage";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {

  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

  return (
    <div className="cart-menu">
      {language}
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) => <CartItem  
        key={game.title} 
        price ={game.duration} 
        title={language == 'ru' ? game.nameEN : game.nameRU} 
        id={game.id}/>) : t('Cart is empty')}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>{t('Total')}:</span>
            <span>{calcTotalPrice(items)} USD</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            {t('Purchase')}
          </Button>
        </div>
      ) : null}
    </div>
  );
};

