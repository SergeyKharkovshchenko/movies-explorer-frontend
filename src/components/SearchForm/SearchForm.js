import React, { useState } from "react";
import "./SearchForm.css";
import { FilterCheckbox } from "../FilterCheckbox";
import { Underline } from "../Underline";

export const SearchForm = ({
  clickHandler,
  changeHandler,
  switcherHandler,
  isSwitched,
}) => {
  return (
    <div className="searchForm">
      <form className="searchForm__searchWrapper" onSubmit={clickHandler}>
        <input
          className="searchForm__search"
          onClick={clickHandler}
          onChange={changeHandler}
          type="text"
          placeholder="Фильм"
          //   ref={}
        />

        <button
          type="submit"
          className="searchForm__submit_type_search"
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
    </div>
  );
};
