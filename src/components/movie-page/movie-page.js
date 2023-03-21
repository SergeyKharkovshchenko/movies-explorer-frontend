import React from "react";
import { useSelector} from 'react-redux';
import { ProductBuy } from "../product-buy";
import { Header } from "../Header";
import { MovieCover } from "../movie-cover";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { useLocalStorage } from "../../utils/use_localstorage";
import "./movie-page.css";

export const MoviePage = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

//we get this movie out of Redux
// we go to global state, then to reducer 'movie' and receiver 'current movie'
  const movie = useSelector(state => state.movies.currentMovie);

  if(!movie) return null;

  return (
    <>
      <Header mode="white"/>
    <div className="movie-page">
      <h1 className="movie-page__title">
      {language=='en'? movie.nameEN : movie.nameRU }
      </h1>
      <div className="movie-page__content">
        <div className="movie-page__left">
          <iframe
            width="90%"
            height="400px"
            src={movie.trailerLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="movie-page__right">
          <MovieCover movie={movie} />
          <p>{movie.description}</p>
          <div className="movie-page__buy-movie">
            <ProductBuy movie={movie} />
          </div>
        </div>
      </div>
      <div className="movies__morebutton" >
          <Button color={"bigLightgrey"} onClick={() => navigate(-1)} name={t('Back')} isActive={true}/>
      </div>

    </div>
    </>
  );
};