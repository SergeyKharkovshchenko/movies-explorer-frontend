import React from "react";
import "./AboutMe.css";
import SKFotoImage from "../../images/SKFoto.jpg";

export const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__left">
        <h2 className="aboutMe__title">Сергей</h2>
        <h3 className="aboutMe__subtitle">Web-разработчик</h3>
        <p className="aboutMe__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
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
    </div>
  );
};
