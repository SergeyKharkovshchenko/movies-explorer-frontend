import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Menu } from "../Menu";
import "./Burger.css";

export const Burger = ({ isClosed }) => {
  const [isOpen, setIsOpen] = useState(isClosed);
  const [isInMenu, setIsInMenu] = useState(false);

  const nav = useNavigate();

  function handleClickL(e) {
    e.preventDefault();
    setIsInMenu(!isInMenu);
    setIsOpen(!isOpen);
  }

  function handleClickS(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
    isOpen ? nav(-1) : nav("/Menu");
  }

  return (
    <>
      <div
        className={isOpen == true ? "burger open" : "burger"}
        onClick={useMediaQuery({ minWidth: 321 }) ? handleClickL : handleClickS}
      >
        <div className="burger_btn"></div>
        {isInMenu && <Menu />}
      </div>
    </>
  );
};
