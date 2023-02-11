import React, { useState } from "react";
import { FilterCheckbox } from "../FilterCheckbox";
import { Underline } from "../Underline";
import "./SearchForm.css";

export const SearchForm = ({
  clickHandler,
  // changeHandler,
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
          // onClick={(e)=>clickHandler(e)}
          // onChange={(e)=>changeHandler(e)}
          type="text"
          placeholder={label||"Фильм"}
          required
        />
        <button
          type="submit"
          className="searchForm__submit"
          // onClick={(e)=>clickHandler(e)}
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
