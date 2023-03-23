import React from 'react';
import './Techs.css';
import { useTranslation } from 'react-i18next';
import { TechItems } from '../TechItems';

export const Techs = () => {
  const { t } = useTranslation();

  return (
    <section className="techs">
      <h2 className="techs__title">{t('7 technologies')}</h2>
      <p className="techs__text">
      {t('On Web development')}
      </p>
      <ul className="techs__tech-list">
        <TechItems subject={'HTML'} />
        <TechItems subject={'SASS'} />
        <TechItems subject={'Redux'} />
        <TechItems subject={'React.js'} />
        <TechItems subject={'Git'} />
        <TechItems subject={'Express.js'} />
        <TechItems subject={'mongoDB'} />
      </ul>
    </section>
  );
};
