import React from "react";
import { Promo } from "../Promo";
import { NavTab } from "../NavTab";
import { AboutProject } from "../AboutProject";
import { Techs } from "../Techs";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useTranslation } from "react-i18next";

export const Main = ({ handleLanguageChange }) => {

  const { t } = useTranslation();

  return (
    <>
      <header>
        <Header 
        mode={"main"} 
        handleLanguageChange={handleLanguageChange}  
        />
      </header>
      <main className="main">
        <Promo />
        <NavTab subject={t("About a project")} />
        <AboutProject />
        <NavTab subject={t("Technologies")} background={"grey"} />
        <Techs />
        <NavTab subject={t("Developer")} />
        <AboutMe />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
