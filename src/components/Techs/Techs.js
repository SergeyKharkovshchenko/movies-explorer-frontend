import React from "react";
import "./Techs.css";
import { TechItems } from "../TechItems";
import { useTranslation } from "react-i18next";

export const Techs = () => {

  const { t } = useTranslation();

  return (
    <section className="techs">
      <h2 className="techs__title">{t('7 technologies')}</h2>
      <p className="techs__text">
      {t('On Web development')}
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
