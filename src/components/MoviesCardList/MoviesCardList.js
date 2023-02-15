import React from "react";
import { MoviesCard } from "../MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = ({
  cards,
  savedMovies,
  onCardLike,
  mode,
  onCardDelete,
}) => {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        {cards.map((card) => (
          <MoviesCard
            key={Math.random(1000000)}
            card={card}
            mode={mode}
            savedMovies={savedMovies}
            onCardLike={(card) => {
              onCardLike(card);
            }}
            onCardDelete={(card) => {
              onCardDelete(card);
            }}
          />
        ))}
      </ul>
    </section>
  );
};
