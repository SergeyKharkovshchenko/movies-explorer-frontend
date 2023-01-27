import React from "react";
import "./Footer.css";
import { Underline } from "../Underline";

export const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <Underline mode={"greyStyle"} />
      <div className="footer__nav">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            target="_blank"
            className="footer__link"
          >
            Яндекс.Практикум
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
    </div>
  );
};
