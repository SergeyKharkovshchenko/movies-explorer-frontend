import React from "react";
import "./PortfolioLink.css";
import { Underline } from "../Underline";
import arrow from "../../images/text__COLOR_font-main.svg";

export const PortfolioLink = ({ name, link }) => {
  return (
    <li className="portfolioLink">
      <a href={link} className="portfolioLink__linkblock" target="_blank" rel="noreferrer">
        <h2 className="portfolioLink__subtitle">{name}</h2>
        <img src={`${arrow}`} alt="Стрелка" className="portfolioLink__arrow" />
      </a>
      <Underline mode={"greyStyle"} />
    </li>
  );
};
