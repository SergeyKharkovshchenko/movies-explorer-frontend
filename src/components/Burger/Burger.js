import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Navigation } from "../Navigation";
import "./Burger.css";

export const Burger = ({ isClosed }) => {
  const [isOpen, setIsOpen] = useState(isClosed);
  const [isInNavigation, setIsInNavigation] = useState(false);

  const nav = useNavigate();

  function handleClickL(e) {
    e.preventDefault();
    setIsInNavigation(!isInNavigation);
    setIsOpen(!isOpen);
  }

  function handleClickS(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    isOpen ? nav(-1) : nav("/menu");
  }

  return (
    <>
      <div
        className={isOpen == true ? "burger open" : "burger"}
        onClick={useMediaQuery({ minWidth: 321 }) ? handleClickL : handleClickS}
      >
        <div className="burger_btn"></div>
        {isInNavigation && <Navigation />}
      </div>
    </>
  );
};
