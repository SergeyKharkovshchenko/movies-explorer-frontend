import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Button.css";

export const Button = ({ name, color, isActive, onClick }) => {
  function styleChoice(param) {
    switch (param) {
      case "green":
        return {
          background: "rgba(43, 224, 128, 1)",
          color: "black",
          width: "76px",
        };
      case "bigGreen":
        return {
          background: "rgba(43, 224, 128, 1)",
          color: "white",
          maxWidth: "396px",
          width: "100%",
          height: "45px",
          margin: "0"
        };
      case "grey":
        return {
          background: "rgba(92, 92, 92, 1)",
          color: "white",
          marginRight: "20px",
        };
      case "red":
        return {
          color: "red",
          margin: "0 auto",
          width: "auto",
          background: "white",
        };
      case "lightgrey":
        return {
          background: "rgba(249, 249, 249, 1)",
          color: "black",
          height: "32px",
          borderRadius: "20px",
        };
      case "bigLightgrey":
        return {
          background: "rgba(249, 249, 249, 1)",
          color: "black",
          width: "240px",
          height: "36px",
          borderRadius: "6px",
        };
      case "white":
        return {
          background: "rgba(255, 255, 255, 1)",
          color: "black",
          width: "auto",
        };

      default:
        return {
          background: "rgba(255, 255, 255, 1)",
          color: "black",
          width: "auto",
          marginRight: "45px",
        };
    }
  }

  function styleChoiceSmall(param) {
    switch (param) {
      case "green":
        return {
          background: "rgba(43, 224, 128, 1)",
          color: "black",
          width: "54px",
          height: "26px",
          fontSize: "12px",
        };
      case "bigGreen":
        return {
          background: "rgba(43, 224, 128, 1)",
          color: "white",
          width: "100%",
          height: "45px",
          marginLeft: "0",
        };
      case "grey":
        return {
          background: "rgba(92, 92, 92, 1)",
          color: "white",
          marginRight: "0",
          height: "26px",
          fontSize: "10px",
        };
      case "red":
        return {
          color: "red",
          margin: "0 auto",
          width: "auto",
          background: "white",
        };
      case "lightgrey":
        return {
          background: "rgba(249, 249, 249, 1)",
          color: "black",
          height: "32px",
          borderRadius: "20px",
        };
      case "bigLightgrey":
        return {
          background: "rgba(249, 249, 249, 1)",
          color: "black",
          width: "calc(100vw - 20px)",
          height: "36px",
          borderRadius: "6px",
        };
      case "white":
        return {
          background: "rgba(255, 255, 255, 1)",
          color: "black",
          width: "auto",
        };

      default:
        return {
          background: "rgba(255, 255, 255, 1)",
          color: "black",
          width: "auto",
          marginRight: "45px",
        };
    }
  }

  return (
    <button
      className={`button button__isActive_${isActive}`}
      style={
        useMediaQuery({ minWidth: 321 })
          ? styleChoice(color)
          : styleChoiceSmall(color)
      }
      disabled={!isActive}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
