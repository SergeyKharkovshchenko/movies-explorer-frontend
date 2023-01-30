import React, { useState } from "react";
import { FilterCheckbox } from "../FilterCheckbox";
import { Underline } from "../Underline";
import "./SearchForm.css";

export const SearchForm = ({
  clickHandler,
  changeHandler,
  switcherHandler,
  isSwitched,
}) => {
  return (
    <section className="searchForm">
      <form className="searchForm__searchWrapper" onSubmit={clickHandler}>
        <input
          className="searchForm__search"
          onClick={clickHandler}
          onChange={changeHandler}
          type="text"
          placeholder="Фильм"
          required
          //   ref={}
        />
        <button
          type="submit"
          className="searchForm__submit"
          onClick={clickHandler}
          isActive="true"
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
