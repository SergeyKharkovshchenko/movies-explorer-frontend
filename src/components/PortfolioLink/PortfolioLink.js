import React from "react";
import { Link } from "react-router-dom";
import "./PortfolioLink.css";
import { Underline } from "../Underline";
import arrow from "../../images/text__COLOR_font-main.svg";

export const PortfolioLink = ({ name, link }) => {
  return (
    <li className="portfolioLink">
      <Link to={link} className="portfolioLink__linkblock">
        <h2 className="portfolioLink__subtitle">{name}</h2>
        <img src={`${arrow}`} alt="arrow" className="portfolioLink__arrow" />
      </Link>
      <Underline mode={"greyStyle"} />
    </li>
  );
};
