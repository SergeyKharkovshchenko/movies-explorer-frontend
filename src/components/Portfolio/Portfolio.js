import React from "react";
import "./Portfolio.css";
import { PortfolioLink } from "../PortfolioLink";

export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__list">
        <PortfolioLink name={"Movies site"} link={"/movies"} />
        <PortfolioLink
          name={"Cards site"}
          link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
        />
        {/* <PortfolioLink
        name={"Одностраничное приложение"}
        link={"https://sergeykharkovshchenko.github.io/react-mesto-auth/"}
      /> */}
      </ul>
    </section>
  );
};
