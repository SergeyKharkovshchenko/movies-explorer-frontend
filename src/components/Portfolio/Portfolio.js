import React from 'react';
import './Portfolio.css';
import { useTranslation } from 'react-i18next';
import { PortfolioLink } from '../PortfolioLink';

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">{t('Portfolio')}</h2>
      <ul className="portfolio__list">
        <PortfolioLink
        name={t('Movies site')}
        link={'/movies'} />
        <PortfolioLink
          name={t('Cards site')}
          link={'https://sergeykharkovshchenko.github.io/react-mesto-auth/'}
        />
        {/* <PortfolioLink
        name={"Одностраничное приложение"}
        link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
      /> */}
      </ul>
    </section>
  );
};
