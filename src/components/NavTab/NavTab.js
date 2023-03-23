import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Underline } from '../Underline';
import './NavTab.css';

export const NavTab = ({ subject, background }) => {
  const greyStyle = {
    background: 'rgba(245, 245, 245, 1)',
    paddingTop: '100px',
  };
  const transpStyle = {};
  return (
    <section
      className="navTab"
      style={
        useMediaQuery({ maxWidth: 321 })
          ? transpStyle
          : background == 'grey'
            ? greyStyle
            : transpStyle
      }
    >
      <h2 className="navTab__title">{subject}</h2>
      <Underline mode={'blackStyle'} />
    </section>
  );
};
