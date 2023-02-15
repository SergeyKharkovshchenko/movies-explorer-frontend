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
      <NavTab subject={"About a project"} />
      <AboutProject />
      <NavTab subject={"Technologies"} background={"grey"} />
      <Techs />
      <NavTab subject={"Student"} />
      <AboutMe />
      <Portfolio />
    </main>
    <footer>
    <Footer />
    </footer>
    </>
  );
};
