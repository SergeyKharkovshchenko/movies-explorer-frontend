import React from "react";
import "./FilterCheckbox.css";
import { useTranslation } from "react-i18next";

export const FilterCheckbox = ({ isSwitched, handleSwitcher }) => {

  const { t } = useTranslation();

  function handleSwitch(e) {
    e.preventDefault();
    handleSwitcher();
  }

  return (
    <form className="filterCheckbox">
      <button
        type="submit"
        className="filterCheckbox__submit"
        onClick={handleSwitch}
      >
        <div
          className={
            isSwitched == true
              ? "filterCheckbox__submitCircleOn filterCheckbox__submitCircle"
              : "filterCheckbox__submitCircle"
          }
        ></div>
      </button>
      <h2 className="filterCheckbox__title">{t('Shorts')}</h2>
    </form>
  );
};
