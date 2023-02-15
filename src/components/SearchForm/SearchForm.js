import React, { useState, useEffect } from "react";
import { FilterCheckbox } from "../FilterCheckbox";
import { Underline } from "../Underline";
import "./SearchForm.css";

export const SearchForm = ({
  clickHandler,
  switcherHandler,
  isSwitched,
  label,
  search
}) => {

const [state, setState]=useState(search);
const [errorName, setErrorName]=useState('');
const [isActive, setIsActive]=useState(true);

 function onChange(e){
    setState(e.target.value);    
}

useEffect(() => {
  if (!state) {
    setErrorName("Please enter search key");
    setIsActive(false);
  } else {
    setIsActive(true);
  }
}, [state])

  return (
    <section className="searchForm">
      <form 
      className="searchForm__searchWrapper" 
      onSubmit={clickHandler}
      >
      <div className="searchForm__inputblock">
        <input
          name="inp"
          className="searchForm__search"
          type="text"
          placeholder={label}
          value={state}
          onChange={e => onChange(e)}
        />
        {(!isActive)&&<span className={`searchForm__error`}>{errorName}</span>}
        </div>
        <button
          type="submit"
          className={isActive?"searchForm__submit":"searchForm__submit searchForm__disabled"}
          disabled={!isActive}
          >
          Search
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
