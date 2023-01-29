import React, { useState } from "react";
import { Burger } from "../Burger";
import { ShortMenu } from "../ShortMenu";
import "./Navigation.css";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <section>
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
    </section>
  );
};
