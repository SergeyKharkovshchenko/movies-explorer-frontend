import React from "react";
import "./AboutProjectData.css";

export const AboutProjectData = ({ left, right, mode }) => {
  const lightStyle = {
    color: "rgba(160, 160, 160, 1)",
    background: "white",
  };
  const darkStyle = {
    color: "black",
  };

  return (
    <div className="aboutProjectData">
      <div
        className="aboutProjectData__side_left-wrapper"
        style={mode == "light" ? lightStyle : darkStyle}
      >
        <p className="aboutProjectData__content">{left}</p>
      </div>
      <div
        className="aboutProjectData__side_right-wrapper"
        style={mode == "light" ? lightStyle : darkStyle}
      >
        <p className="aboutProjectData__content">{right}</p>
      </div>
    </div>
  );
};
