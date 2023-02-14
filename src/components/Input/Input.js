import React from "react";
import { Underline } from "../Underline";
import "./Input.css";

export const Input = ({
  mode,
  label,
  name,
  cbChange,
  userData,
  errorName,
  placeholder
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
          type={(name=='Password')?"password":"text"}
          id={`edit-${name}`}
          className={`input__input_type_${mode} input__${name}_type_${mode}`}
          value={userData || ""}
          onChange={(e) => change(e)}
          placeholder={placeholder}
        />
      </div>
      <Underline />
      {`bad${name}In` && (
        <span className={`input__error`}>{errorName}</span>
      )}
    </div>
  );
};
