import React from "react";
import { useSelector } from "react-redux";
import { ItemsInCart } from "../items-in-cart";
import { OrderItem } from "../order-item";
import { Button } from "../Button";
import { calcTotalPrice, enumerate } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import "./order-page.css";
import { useNavigate } from "react-router-dom";

export const OrderPage = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();

  if (items.length < 1) {
    return <h1>{t("Cart is empty")}</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total_price">
          <span>
            {items.length} {t("items with total")} {calcTotalPrice(items)} USD.
          </span>
        </div>
      </div>

      <div className="movies__morebutton">
        <Button
          color={"bigLightgrey"}
          onClick={() => navigate(-1)}
          name={t("Back")}
          isActive={true}
        />
      </div>
    </div>
  );
};
