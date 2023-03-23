import React from 'react';
import './AboutProjectDetails.css';

export const AboutProjectDetails = ({ title, text }) => (
    <div className="aboutProjectDetails">
      <h2 className="aboutProjectDetails_title">{title}</h2>
      <p className="aboutProjectDetails_text">{text}</p>
    </div>
);
