import React from "react";
import logoImage from "../../images/logo__COLOR_main-1.svg";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { Burger } from "../Burger";
import { CartBlock } from '../cart-block'
import "./Header.css";
import {
  main,
  signup,
  signin,
  profile,
  movies,
  savedMovies,
} from "../../utils/config";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "../../utils/use_localstorage";
import i18n from "../../utils/i18n";

export const Header = ({ mode, isLoggedIn
  // , handleLanguageChange
}) => {
  const mainStyle = {};
  const moviesStyle = {
    background: "rgba(255, 255, 255, 1)",
  };

  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const handleLanguageChange = () => {
    if (language === 'en') {
        i18n.changeLanguage('ru');
        setLanguage('ru');
    } else if (language === 'ru') {
        i18n.changeLanguage('en');
        setLanguage('en');
    }
};


  return (
    <section
      className="header"
      style={mode == "white" ? moviesStyle : mainStyle}
    >
      <div className='header__left'>
      <NavLink className="link" to={main.link}>
        <img
          src={`${logoImage}`}
          alt="Logo - green donut"
          className="header__logo"
        />
      </NavLink>
      <div className='header__lang'>
      {mode == "main" ? (
        <Button name={language === 'ru' ? t('english'):t('russian')} 
        color={"bigGrey"} isActive={"true"} onClick={handleLanguageChange} />

      ):(
        <Button name={language === 'ru' ? t('english'):t('russian')} 
        color={"white"} isActive={"true"} onClick={handleLanguageChange} />
      )
      }
      </div>
      
      

      {/* {mode == "main" && !isLoggedIn ? ( */}
        <div className="header__nav">
          <NavLink
            className={(navData) =>
              navData.isActive ? "header__active header__link" : "header__link"
            }
            to={signup.link}
          >
            <Button name={signup.name} 
            color={"smallGrey"} 
            isActive={"true"} />
          </NavLink>
          <NavLink className="link" to={signin.link}>
            <Button name={signin.name} color={"green"} isActive={"true"} />
          </NavLink>
        </div>
      
</div>
<div className='header__right'>
      {/* ) : ( */}
        {/* <> */}
          {/* <div className="header__nav"> */}      
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "header__active header__link header__link_light"
                  : "header__link header__link_light"
              }
              to={movies.link}
            >
              <Button
                // name={movies.name}
                name={t(`${movies.name}`)} 
                isActive={"true"}
                // color={isLoggedIn ? "grey" : ""}
                color={mode == "white" ? "" : "bigGrey"}
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
                name={t(`${savedMovies.name}`)}
                isActive={"true"}
                // color={isLoggedIn ? "bigGrey" : ""}
                color={mode == "white" ? "" : "bigGrey"}
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
                name={t(`${profile.name}`)}
                isActive={"true"}
                color={"lightgrey"}
              />
            </NavLink>

            <div className="header__cart">
            <CartBlock mode={mode}/>
            </div>

            <div>
          
            <div className="header__burger">
            <Burger mode={mode}/>
          </div>
          
          </div>

</div>          
{/* // </div> */}
        
        {/* </> */}
      {/* )} */}
    </section>
  );
};
