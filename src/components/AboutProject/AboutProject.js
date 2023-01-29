import React from "react";
import "./AboutProject.css";
import { AboutProjectData } from "../AboutProjectData";
import { AboutProjectDetails } from "../AboutProjectDetails";

import {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
} from "../../utils/config";

export const AboutProject = () => {
  return (
    <section className="aboutProject">
      <div className="aboutProject__description">
        <AboutProjectDetails title={text1} text={text2} />
        <AboutProjectDetails title={text3} text={text4} />
      </div>
      <AboutProjectData mode="dark" left={text5} right={text6} />
      <AboutProjectData mode="light" left={text7} right={text8} />
    </section>
  );
};
