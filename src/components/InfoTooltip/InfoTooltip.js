import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoImage from '../../images/logo__COLOR_main-1.svg';
import { Button } from '../Button';
import './InfoTooltip.css';

export const InfoTooltip = ({ isOpen, message, onClick }) => {
  const { t } = useTranslation();

  function cbClick() {
    onClick();
  }

  return (
    <section
      className={`${
        isOpen ? 'tooltip__overlay tooltip_opened' : 'tooltip__overlay'
      }`}
      onClick={cbClick}
    >
      <div className="tooltip">
        <img
          src={`${logoImage}`}
          alt="Logo - green donut"
          className="popup__logo"
        />
        <h2 className={'popup__title tooltip__title'}>{t(message)}</h2>
        <Button
          name={'OK'}
          onClick={cbClick}
          color={'bigGreen'}
          isActive={true}
        />
      </div>
    </section>
  );
};
