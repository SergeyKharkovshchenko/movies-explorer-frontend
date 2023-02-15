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

export const Header = ({ mode, isLoggedIn }) => {
  const mainStyle = {};
  const moviesStyle = {
    background: "rgba(255, 255, 255, 1)",
  };

  return (
    <section
      className="header"
      style={mode == "white" ? moviesStyle : mainStyle}
    >
      <NavLink className="link" to={main.link}>
        <img
          src={`${logoImage}`}
          alt="Logo - green donut"
          className="header__logo"
        />
      </NavLink>
      {mode == "main" && !isLoggedIn ? (
        <div className="header__nav">
          <NavLink
            className={(navData) =>
              navData.isActive ? "header__active header__link" : "header__link"
            }
            to={signup.link}
          >
            <Button name={signup.name} color={"grey"} isActive={"true"} />
          </NavLink>
          <NavLink className="link" to={signin.link}>
            <Button name={signin.name} color={"green"} isActive={"true"} />
          </NavLink>
        </div>
      ) : (
        <>
          <div className="header__nav">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__active header__link header__link_light"
                  : "header__link header__link_light"
              }
              to={movies.link}
            >
              <Button
                name={movies.name}
                isActive={"true"}
                color={isLoggedIn ? "grey" : ""}
              />
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__active header__link header__link_light"
                  : "header__link header__link_light"
              }
              to={savedMovies.link}
            >
              <Button
                name={savedMovies.name}
                isActive={"true"}
                color={isLoggedIn ? "bigGrey" : ""}
              />
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__active header__link header__link_light"
                  : "header__link header__link_light"
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
