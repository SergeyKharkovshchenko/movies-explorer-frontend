import React from "react";
import { MoviesCard } from "../MoviesCard";
import "./MoviesCardList.css";

export const MoviesCardList = ({ cards, onCardLike, mode, onCardDelete }) => {
  return (
    <section className="moviesCardList">
      <ul className="moviesCardList__cards">
        {cards.map((card) => (
          <MoviesCard
            key={card.id}
            card={card}
            mode= {mode} 
            onCardLike={(card) => { onCardLike(card);}}
            onCardDelete={onCardDelete}
          />
        ))}
      </ul>
    </section>
  );
};
