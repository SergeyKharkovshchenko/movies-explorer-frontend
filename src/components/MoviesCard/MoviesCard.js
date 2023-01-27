import React, { useState } from "react";
import "./MoviesCard.css";
import likePic from "../../images/save9green.svg";
import notLikePic from "../../images/save9d.svg";

export const MoviesCard = ({ id, card, onCardLike }) => {
  const [isLiked, setisLiked] = useState(false);

  const handleCardLike = () => {
    onCardLike(card);
    setisLiked(!isLiked);
  };

  return (
    <li className="moviesCard" id={id}>
      <div className="moviesCard__top">
        <div className="moviesCard__descripton">
          <h2 className="moviesCard__title">{card.name}</h2>
          <h3 className="moviesCard__subtitle">{card.duration}</h3>
        </div>
        <button
          className="moviesCard__likeButton"
          type="button"
          onClick={(e) => {
            handleCardLike(e);
          }}
        >
          {isLiked ? <img src={`${likePic}`} /> : <img src={`${notLikePic}`} />}
        </button>
      </div>
      <img
        src={card.image}
        className="moviesCard__foto"
        alt={`фото ${card.name}`}
      />
    </li>
  );
};
