import React from "react";
import { Underline } from "../Underline";
// import { Validation } from '../Validation';
import "./Input.css";

export const Input = ({
  mode,
  label,
  name,
  cbChange,
  blurHandler,
  userData,
  errorName,
}) => {
  function change(e) {
    e.preventDefault();
    cbChange(name, e.target.value);
  }

  return (
    <div className="input">
      <div className={`${mode}__input-block`}>
        <p className={`${mode}__label`}>{label}</p>
        <input
          name={name}
          type="text"
          id={`edit-${name}`}
          className={`${mode}__input ${mode}__${name}`}
          placeholder={`${name}`}
          value={userData || ""}
          onChange={(e) => change(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </div>
      <Underline />

      {`${name}InDirty&&bad${name}In` && (
        <span className={`${mode}__error`}>{errorName}</span>
      )}
    </div>
  );
};
