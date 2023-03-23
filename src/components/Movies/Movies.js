import React, { useEffect, useState, useCallback } from "react";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import { Preloader } from "../Preloader";
import Button from "../Button";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { InfoTooltip } from "../InfoTooltip";
import { logOut } from "../../utils/MainApi";
import * as moviesApi from "../../utils/MoviesApi";
import * as SearchUtil from "../../utils/SearchUtil";
import "./Movies.css";
import { useTranslation } from "react-i18next";
import { updWidth } from "../../utils/updateWidth";

export const Movies = () => {

  const { t } = useTranslation();

  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('searchResult'))?JSON.parse(localStorage.getItem('searchResult')):[]);
  const [allMovies, setAllMovies] = useState([]);
  const [isSwitched, setIsSwitched] = useState(JSON.parse(localStorage.getItem('isSwitched')));
  const [searchKey , setSearchKey ] = useState(localStorage.getItem('searchKey')?localStorage.getItem('searchKey'):'');
  const [loading, setLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [additional, setAdditional] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);
 
  const updateWidth = () => {
      setAdditional(updWidth(window.innerWidth).additional);
      setTotalNumber(updWidth(window.innerWidth).totalNumber);
  };
 
  useEffect(() => {   
  updateWidth();
},[]);

useEffect(() => {   
handleClick(searchKey);
},[isSwitched]);

  useEffect(() => {   
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);      
  });
  
const handleCardLike = useCallback(async (card) => {
  try {
      const res = await moviesApi.handleLike(card);
      card._id=res._id;
      if (!res) {
        throw new Error("Error");
      }
      const saved = await moviesApi.getSavedMovies();
      JSON.stringify(saved);
      setSavedMovies(saved)
    } catch (error) {
      console.log(`Error: ${error}`)
      if (error.status == 401) logOut();
    }
});

  function handleMore() {
      setTotalNumber((totalNumber) => totalNumber + additional);
  }

  function refreshSearchResult(movie,searchWord,isSwitched ){
    const searchResult = SearchUtil.Search(movie, searchWord.toLowerCase(),isSwitched);
    setCards(searchResult);
    if (searchResult.length==0) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Ничего не найдено");
    }
  }

   const  handleClick = useCallback(async (searchWord) => {
    try {
      setLoading(true);
      if (allMovies.length==0) {
        const movies = await moviesApi.getInitialMovies();
        if (!movies) {
          throw new Error("Error");
        }
        JSON.stringify(movies);
        setAllMovies(movies);
        refreshSearchResult(movies, searchWord,isSwitched)
      } else {
        refreshSearchResult(allMovies, searchWord, isSwitched)
      }
      const saved = await moviesApi.getSavedMovies();
      setSavedMovies(saved)  
    localStorage.setItem('searchKey', searchWord.toLowerCase());
    setSearchKey(searchWord.toLowerCase());
    localStorage.setItem('isSwitched', JSON.stringify(isSwitched));
    localStorage.setItem('searchResult', JSON.stringify(cards));
    } catch (error) {console.log(`Ошибка: ${error}`)}
         finally {
      setLoading(false);
    }
  });

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  }

  function handleSwitcher() {
    setIsSwitched(!isSwitched);
  }

  const handleCardRemove = useCallback(async (_id) => {
    try {
        const res = await moviesApi.removeFromSavedMovies(_id);
        if (!res) {
          throw new Error("Error");
        }
        const saved = await moviesApi.getSavedMovies();
        JSON.stringify(saved);
        setSavedMovies(saved)
      } catch (error) {console.log(`Error: ${error}`)}
  });

  if (loading) {
    return <Preloader />;
  }

  return (
    <section className="movies">
      <header>
        <Header mode={"white"} />
      </header>
      <main>
        <SearchForm
          clickHandler={(e)=>handleClick(e.target.inp.value)}
          switcherHandler={handleSwitcher}
          isSwitched={isSwitched}
          search={searchKey}
        />
        {(cards.length!=0)&&<MoviesCardList
          cards={cards.slice(0, totalNumber)}
          onCardLike={handleCardLike}
          onCardDelete={handleCardRemove}
          savedMovies={savedMovies}
          mode='all'
        />
        }
        {(cards.length>totalNumber)
        &&
        <div className="movies__morebutton" >
          <Button color={"bigLightgrey"} onClick={handleMore} name={t('More')} isActive={true}/>
        </div>}
      </main>
      <footer>
        <Footer />
      </footer>
      {isInfoTooltipPopupOpen&&<InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          message={tooltipMessage}
          onClick={closeTooltip}
        />}
    </section>
  );
};
