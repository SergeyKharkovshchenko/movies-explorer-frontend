/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from '../Navigation';
import './Burger.css';

export const Burger = function ({ isClosed, mode }) {
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
    isOpen ? nav(-1) : nav('/menu');
  }

  return (
    <>
      <div
        className={isOpen == true ? 'burger open' : 'burger' }
        onClick={useMediaQuery({ minWidth: 20 }) ? handleClickL : handleClickS}
      >
        <div className={mode == 'white' ? 'burger_btn' : 'burger_btn burger__dark'}></div>
        {isInNavigation && <Navigation />}
      </div>
    </>
  );
};
