import React from "react";
import "./Portfolio.css";
import { PortfolioLink } from "../PortfolioLink";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
      <PortfolioLink
        name={"Статичный сайт"}
        link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
      />
      <PortfolioLink
        name={"Адаптивный сайт"}
        link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
      />
      <PortfolioLink
        name={"Одностраничное приложение"}
        link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
      />
      </ul>
    </section>
  );
};
