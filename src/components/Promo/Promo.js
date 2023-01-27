import React from "react";
import promoImage from "../../images/text__COLOR_landing-logo.svg";
import "./Promo.css";

export const Promo = () => {
  return (
    <div className="promo">
      <p className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </p>
      <img
        src={`${promoImage}`}
        alt="Стильные кружочки"
        className="promo__image"
      />
    </div>
  );
};
