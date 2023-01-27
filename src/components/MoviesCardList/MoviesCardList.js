import React from "react";
import "./MoviesCardList.css";
import { MoviesCard } from "../MoviesCard";

export const MoviesCardList = ({ cards, onCardLike }) => {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            onCardLike={(card) => {
              onCardLike(card);
            }}
          />
        ))}
      </ul>
    </section>
  );
};
