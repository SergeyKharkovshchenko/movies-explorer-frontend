import React, { useState, useEffect, useContext, useCallback } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import likePic1 from "../../images/save9green.svg";
import likePic2 from "../../images/d9.svg";
import notLikePic from "../../images/save9d.svg";
import * as moviesApi from "../../utils/MoviesApi";
import "./MoviesCard.css";

export const MoviesCard = ({ 
  card, 
  savedMovies,
  onCardLike, 
  mode, 
  onCardDelete }) => {

  const [isLiked, setisLiked] = useState(false);
  const [id, setId] = useState('');
  
  function handleDuration (minutes) {
    let mins = minutes%60;
    let hours = Math.floor(minutes/60);
    if (hours>0) 
    {return hours + ' ч. ' + mins +' мин.';}
    else 
    {return minutes +' мин.';}
  }

  useEffect(() => {
    checkLike();
  },[isLiked]);
  
  const checkLike = useCallback(async () => {
        let likedMovie = savedMovies.filter((savedMovie) => (savedMovie.nameRU == card.nameRU)||(savedMovie.nameEN == card.nameEN))
            if (likedMovie.length!=0){
              setisLiked(true);
              setId(likedMovie[0]._id);
            }
  },[]);

  const handleCardLike = () => {
    if (isLiked) 
    {
    onCardDelete(id);
    }
    else {
    onCardLike(card);
    }
    setisLiked(!isLiked);
  };

  return (
    <section>
      <li className="moviesCard" >
        <div className="moviesCard__top">
          <div className="moviesCard__description">
            <h2 className="moviesCard__title">{card.nameRU}</h2>
            <h3 className="moviesCard__subtitle">{handleDuration(card.duration)}</h3>
          </div>
          <button
            className="moviesCard__likeButton"
            type="button"
            onClick={(e) => {handleCardLike(e);}}
          >
            {isLiked ? 
            <img src={ mode == "all" ? likePic1 : likePic2 } />
            : 
            <img src={ mode == "all" ? notLikePic : likePic2 } />
            }
          </button>
        </div>
        <a href={card.trailerLink} className="portfolioLink__linkblock" target="_blank" rel="noreferrer">
        <img
          src={ mode == "all" ? `https://api.nomoreparties.co/${card.image.url}` : card.image }
          className="moviesCard__foto"
          alt={`фото ${card.nameRU}`}
        />
        </a>
      </li>
    </section>
  );
};
