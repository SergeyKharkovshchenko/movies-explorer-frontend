import React from "react";
import "./Footer.css";
import { Underline } from "../Underline";
import { useTranslation } from "react-i18next";

export const Footer = () => {

  const { t } = useTranslation();

  return (
    <section className="footer">
      <h2 className="footer__title">{t('Sergey')} х BeatFilm.</h2>
      <Underline mode={"greyStyle"} />
      <div className="footer__nav">
        <p className="footer__copyright">© 2023</p>
        <div className="footer__links">
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
