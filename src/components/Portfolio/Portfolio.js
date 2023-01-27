import React from "react";
import "./Portfolio.css";
import { PortfolioLink } from "../PortfolioLink";

export const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
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
    </div>
  );
};
