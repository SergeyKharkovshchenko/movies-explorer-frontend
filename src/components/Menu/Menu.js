import React, { useState } from "react";
import { Burger } from "../Burger";
import { ShortMenu } from "../ShortMenu";
import "./Menu.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className="overlay">
      <div
        className={!isOpen ? "menu" : "menu menu__closed"}
        onClick={handleClick}
      >
        <div className="menu__burger">
          <Burger />
        </div>
        <ShortMenu width320={false} />
      </div>
    </div>
  );
};
