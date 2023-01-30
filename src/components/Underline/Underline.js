import React from "react";
import "./Underline.css";

export const Underline = ({ mode }) => {
  const blackStyle = {
    background: "rgba(0, 0, 0, 1)",
  };
  const greyStyle = {
    background: "rgba(232, 232, 232, 1)",
  };
  return (
    <div
      className="underline"
      style={mode == "blackStyle" ? blackStyle : greyStyle}
    ></div>
  );
};
