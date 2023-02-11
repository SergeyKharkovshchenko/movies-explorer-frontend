import React, { useState } from "react";
import { FilterCheckbox } from "../FilterCheckbox";
import { Underline } from "../Underline";
import "./SearchForm.css";

export const SearchForm = ({
  clickHandler,
  switcherHandler,
  isSwitched,
  label
}) => {
  return (
    <section className="searchForm">
      <form 
      className="searchForm__searchWrapper" 
      onSubmit={clickHandler}
      >
        <input
          name="inp"
          className="searchForm__search"
          type="text"
          placeholder={label||"Фильм"}
          required
        />
        <button
          type="submit"
          className="searchForm__submit"
        >
          Поиск
        </button>
      </form>
      <FilterCheckbox
        isSwitched={isSwitched}
        handleSwitcher={switcherHandler}
      />
      <Underline mode={"greyStyle"} />
    </section>
  );
};
