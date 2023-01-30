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
      <div className={`input__inputblock_type_${mode}`}>
        <p className={`input__label_type_${mode}`}>{label}</p>
        <input
          name={name}
          type="text"
          id={`edit-${name}`}
          className={`input__input_type_${mode} input__${name}_type_${mode}`}
          placeholder={`${name}`}
          value={userData || ""}
          onChange={(e) => change(e)}
          onBlur={(e) => blurHandler(e)}
        />
      </div>
      <Underline />
      {`${name}InDirty&&bad${name}In` && (
        <span className={`input__error`}>{errorName}</span>
      )}
    </div>
  );
};
