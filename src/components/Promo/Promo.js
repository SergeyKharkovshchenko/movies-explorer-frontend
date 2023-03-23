import { useTranslation } from 'react-i18next';
import React from 'react';
import promoImage from '../../images/text__COLOR_landing-logo.svg';
import './Promo.css';

export const Promo = () => {
  const { t } = useTranslation();

  return (
    <section className="promo">
      <div className="promo__title">
      <div className="promo__title_front"><span>{t('text9')}</span></div>
      <div className="promo__title_back"><span>{t('text9alt')}</span></div>
      </div>
      {/* <h2 className="promo__title">{t('text9')}</h2> */}
      <div className="promo__image_wrapper">
      <img src={`${promoImage}`} alt="stylish rings" className="promo__image" />
      </div>
    </section>
  );
};
