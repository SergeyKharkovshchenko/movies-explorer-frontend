import React from "react";
import logoImage from "../../images/logo__COLOR_main-1.svg";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { Burger } from "../Burger";
import "./Header.css";
import {
  main,
  signup,
  signin,
  profile,
  movies,
  savedMovies,
} from "../../utils/config";

export const Header = ({ mode }) => {
  const mainStyle = {};
  const moviesStyle = {
    background: "rgba(255, 255, 255, 1)",
  };

  return (
    <section className="header" style={mode == "white" ? moviesStyle : mainStyle}>
          <NavLink className="link"
            to={main.link}
          >

      <img
        src={`${logoImage}`}
        alt="Логотип - зеленый бублик"
        className="header__logo"
      />
      </NavLink>
      {mode == "main" ? (
        <div className="header__nav">
          <NavLink
            className={(navData) => (navData.isActive ? "active link" : "link")}
            // activeClassName="active" className="link"
            to={signup.link}
          >
            <Button name={signup.name} color={"grey"} isActive={"true"}/>
          </NavLink>
          <NavLink className="link" to={signin.link}>
            <Button name={signin.name} color={"green"} isActive={"true"}/>
          </NavLink>
        </div>
      ) : (
        <>
          <div className="header__nav">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active link link_light" : "link link_light"
              }
              // activeClassName="active" className="link link_light"
              to={movies.link}
            >
              <Button name={movies.name} isActive={"true"} />
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "active link link_light" : "link link_light"
              }
              // activeClassName="active" className="link link_light"
              to={savedMovies.link}
            >
              <Button name={savedMovies.name} isActive={"true"} />
            </NavLink>
            <NavLink
              // activeClassName="active" className="link link_light"
              className={(navData) =>
                navData.isActive ? "active link link_light" : "link link_light"
              }
              to={profile.link}
            >
              <Button
                name={profile.name}
                isActive={"true"}
                color={"lightgrey"}
              />
            </NavLink>
          </div>
          <div className="header__burger">
            <Burger />
          </div>
        </>
      )}
    </section>
  );
};
