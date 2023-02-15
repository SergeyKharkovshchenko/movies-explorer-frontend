import React from "react";
import "./Footer.css";
import { Underline } from "../Underline";

export const Footer = () => {
  return (
    <section className="footer">
      <h2 className="footer__title">Yandex.Praktikum х BeatFilm.</h2>
      <Underline mode={"greyStyle"} />
      <div className="footer__nav">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            target="_blank"
            className="footer__link"
          >
            Yandex.Praktikum
          </a>
          <a
            href="https://github.com/SergeyKharkovshchenko"
            target="_blank"
            className="footer__link"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};
