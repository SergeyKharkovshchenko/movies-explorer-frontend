import React from "react";
import { Burger } from "../Burger";
import { ShortMenu } from "../ShortMenu";
import "./Menu320.css";

export const Menu320 = () => {
  return (
    <div className="menu320">
      <div className="menu__burger320">
        <Burger isClosed={true} />
      </div>
      <ShortMenu width320={true} />
    </div>
  );
};
