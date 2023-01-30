import React from "react";
import "./Techs.css";
import { TechItems } from "../TechItems";

export const Techs = () => {
  return (
    <section className="techs">
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
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
