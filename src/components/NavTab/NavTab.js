import React from "react";
import { Underline } from "../Underline";
import { useMediaQuery } from "react-responsive";
import "./NavTab.css";

export const NavTab = ({ subject, background }) => {
  const greyStyle = {
    background: "rgba(245, 245, 245, 1)",
    paddingTop: "100px",
  };
  const transpStyle = {};
  return (
    <div
      className="navTab"
      style={
        useMediaQuery({ maxWidth: 321 })
          ? transpStyle
          : background == "grey"
          ? greyStyle
          : transpStyle
      }
    >
      <div className="navTab__title">{subject}</div>
      <Underline mode={"blackStyle"} />
    </div>
  );
};
