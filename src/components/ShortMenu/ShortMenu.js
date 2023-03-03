import React from "react";
import { Link } from "react-router-dom";
import "./ShortMenu.css";
import { Button } from "../Button";
import { useTranslation } from "react-i18next";
import { main, profile, movies, savedMovies } from "../../utils/config";

export const ShortMenu = ({ width320 }) => {
  const items = [main, movies, savedMovies];
  const { t } = useTranslation();

  return (
    <section className="shortmenu">
      <nav className="shortmenu__content">
        <ul className="shortmenu__menu">
          {items.map((item) => (
            <li key={item.id} className="shortmenu__link-wrapper">
              <Link to={`${item.link}`} className="shortmenu__link">
                {t(item.name)}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={profile.link}
          className={
            width320 ? "shortmenu__footer_short" : "shortmenu__footer_long"
          }
        >
          <Button name={profile.name} color={"lightgrey"} isActive="true" />
        </Link>
      </nav>
    </section>
  );
};
