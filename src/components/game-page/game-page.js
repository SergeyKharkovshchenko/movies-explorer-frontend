import React from "react";
import { useSelector} from 'react-redux';
import { GameBuy } from "../game-buy";
import { GameCover } from "../game-cover";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { useLocalStorage } from "../../utils/use_localstorage";
import "./game-page.css";

export const GamePage = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'en');

//достаем из ридакса эту игру
// идем в глобальный стейт, идем в наш редьюсер game и там забираем current game
  const game = useSelector(state => state.games.currentGame);

  if(!game) return null;

  return (
    
    <div className="game-page">
      <h1 className="game-page__title">
      {language=='en'? game.nameEN : game.nameRU }
      </h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.trailerLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={`https://api.nomoreparties.co/${game.image.url}`} />
          <p>{game.description}</p>
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
      <div className="movies__morebutton" >
          <Button color={"bigLightgrey"} onClick={() => navigate(-1)} name={t('Back')} isActive={true}/>
      </div>

    </div>
  );
};