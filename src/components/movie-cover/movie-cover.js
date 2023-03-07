import React from "react";
import "./movie-cover.css";

export const MovieCover = ({ movie }) => {
  let url = '';
  console.log('movie'+movie.nameRU)
  if (!movie.image.url) {
    url = `${movie.image}`
  } else {
     url = `https://api.nomoreparties.co/${movie.image.url}`
  }
  return (
    <div className="movie-cover" style={{backgroundImage: `url(${url})`}} />
  );
};
