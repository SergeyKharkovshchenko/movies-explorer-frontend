import React from "react";
import "./TechItems.css";

export const TechItems = ({ subject }) => {
  return (
    <li className="techs__tech-wrapper">
      <p className="techs__tech">{subject}</p>
    </li>
  );
};
