import React from "react";
import "./AboutMe.css";
import SKFotoImage from "../../images/SKFoto.jpg";

export const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="aboutMe__left">
        <h2 className="aboutMe__title">Sergey</h2>
        <h3 className="aboutMe__subtitle">Web-developer</h3>
        <p className="aboutMe__text">
          I was born im Moscow, graduated Institute for Electronics and Math,
          Applied Math. I'm married and have 8 years old boy. I like soul music
          and football. After few courses I have changed my Sales carrier to IT.
          I have worked in automated QA (load testing), but switched to Web
          development.
        </p>
        <a
          href="https://github.com/SergeyKharkovshchenko"
          className="aboutMe__gitlink"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/SergeyKharkovshchenko
        </a>
      </div>
      <div className="aboutMe__right">
        <img src={`${SKFotoImage}`} alt="Фото С.Х." className="aboutMe__foto" />
      </div>
    </section>
  );
};
