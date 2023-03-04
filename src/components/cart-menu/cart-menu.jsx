// import { getTimeMeasureUtils } from "@reduxjs/toolkit/dist/utils";
import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button2";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../../utils/utils";
import "./cart-menu.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0 ? items.map((game) => <CartItem  key={game.title} price ={game.duration} title={game.nameEN} id={game.id}/>) : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total:</span>
            <span>{calcTotalPrice(items)} USD.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Purchase
          </Button>
        </div>
      ) : null}
    </div>
  );
};

