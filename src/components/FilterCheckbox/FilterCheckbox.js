import React, {useState} from "react";
import "./FilterCheckbox.css";

export const FilterCheckbox = ({ isSwitched, handleSwitcher }) => {

function handleSwitch (e) {
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
            (isSwitched==true)
              ? "filterCheckbox__submitCircleOn filterCheckbox__submitCircle"
              : "filterCheckbox__submitCircle"
          }
        ></div>
      </button>
      <h2 className="filterCheckbox__title">Shorts</h2>
    </form>
  );
};
