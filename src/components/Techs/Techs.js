import React from "react";
import "./Techs.css";
import { TechItems } from "../TechItems";

export const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__title">7 technologies</h2>
      <p className="techs__text">
        On Web development courses i have learned technologies, some of them
        have been used in this web site.
      </p>
      <ul className="techs__tech-list">
        <TechItems subject={"HTML"} />
        <TechItems subject={"CSS"} />
        <TechItems subject={"JS"} />
        <TechItems subject={"React"} />
        <TechItems subject={"Git"} />
        <TechItems subject={"Express.js"} />
        <TechItems subject={"mongoDB"} />
      </ul>
    </section>
  );
};
