import React from "react";
import promoImage from "../../images/text__COLOR_landing-logo.svg";
import "./Promo.css";

export const Promo = () => {
  return (
    <section className="promo">
      <h2 className="promo__title">Web development student example project.</h2>
      <img src={`${promoImage}`} alt="stylish rings" className="promo__image" />
    </section>
  );
};
