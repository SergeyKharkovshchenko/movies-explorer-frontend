import React from "react";
import { Promo } from "../Promo";
import { NavTab } from "../NavTab";
import { AboutProject } from "../AboutProject";
import { Techs } from "../Techs";
import { AboutMe } from "../AboutMe";
import { Portfolio } from "../Portfolio";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./Main.css";

export const Main = ({isLoggedIn}) => {

  return (
    <>
    <header>       
    <Header mode={"main"} isLoggedIn={isLoggedIn}/>
    </header>
    <main className="main">
      <Promo />
      <NavTab subject={"О проекте"} />
      <AboutProject />
      <NavTab subject={"Технологии"} background={"grey"} />
      <Techs />
      <NavTab subject={"Студент"} />
      <AboutMe />
      <Portfolio />
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  );
};
