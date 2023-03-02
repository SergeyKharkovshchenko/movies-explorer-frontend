import React from "react";
import "./AboutProject.css";
import { AboutProjectData } from "../AboutProjectData";
import { AboutProjectDetails } from "../AboutProjectDetails";
import { useTranslation } from "react-i18next";

export const AboutProject = () => {

  const { t } = useTranslation();

  return (
    <section className="aboutProject">
      <div className="aboutProject__description">
        <AboutProjectDetails title={t('text1')} text={t('text2')} />
        <AboutProjectDetails title={t('text3')} text={t('text4')} />
      </div>
      <AboutProjectData mode="dark" left={t('text5')} right={t('text6')} />
      <AboutProjectData mode="light" left={t('text7')} right={t('text8')} />
    </section>
  );
};
