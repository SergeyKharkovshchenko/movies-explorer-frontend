import React from "react";
import "./TechItems.css";

export const TechItems = ({ subject }) => {
  return (
    <li className="techitems__tech-wrapper">
      <p className="techitems__tech">{subject}</p>
    </li>
  );
};
