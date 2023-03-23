import React from "react";
import { useSelector } from "react-redux";
import { ItemsInCart } from "../items-in-cart";
import { OrderItem } from "../order-item";
import Button from "../Button";
import { Header } from "../Header";
import { calcTotalPrice, enumerate } from "../../utils/utils";
import { useTranslation } from "react-i18next";
import "./order-page.css";
import { useNavigate } from "react-router-dom";

export const OrderPage = () => {
  const { t } = useTranslation();
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();

  if (items.length < 1) {
    return (
      <>
        <Header mode={"white"} />  
        <div className="order-page">
          <div className="order-page__left">
            <h1>{t("Cart is empty")}</h1>
          </div>

          <div className="order-page__morebutton">
            <Button
              color={"bigLightgrey"}
              onClick={() => navigate(-1)}
              name={t("Back")}
              isActive={true}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Header mode={"white"} />
      <div className="order-page">
        <div className="order-page__left">
          {items.map((movie) => (
            <OrderItem movie={movie} />
          ))}
        </div>
        <div className="order-page__right">
          <div className="order-page__total_price">
            <span>
              {items.length} {t("items with total")} {calcTotalPrice(items)}{" "}
              USD
            </span>
          </div>
        </div>

        <div className="order-page__morebutton">
          <Button
            color={"bigLightgrey"}
            onClick={() => navigate(-1)}
            name={t("Back")}
            isActive={true}
          />
        </div>
      </div>
    </>
  );
};
