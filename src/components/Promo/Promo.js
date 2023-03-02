import React from "react";
import promoImage from "../../images/text__COLOR_landing-logo.svg";
import "./Promo.css";
import { useTranslation } from "react-i18next";

export const Promo = () => {

  const { t } = useTranslation();

  return (
    <section className="promo">
      <h2 className="promo__title">{t('text9')}</h2>
      <img src={`${promoImage}`} alt="stylish rings" className="promo__image" />
    </section>
  );
};
