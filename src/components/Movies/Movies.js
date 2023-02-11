import React, { useEffect, useState, useCallback } from "react";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import pic from "../../images/pic__COLOR_pic.png";
import { Preloader } from "../Preloader";
import { Button } from "../Button";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { InfoTooltip } from "../InfoTooltip";
import * as moviesApi from "../../utils/MoviesApi";
import * as SearchUtil from "../../utils/SearchUtil";
import "./Movies.css";

// const moviesDummyArray = [
//   {
//     image: pic,
//     name: "Movie 1",
//     id: 1,
//     duration: "1ч 47м",
//   },
//   {
//     image: pic,
//     name: "Movie 2",
//     id: 2,
//     duration: "1ч 47м",
//   },
// ];

export const Movies = () => {
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('searchResult'))?JSON.parse(localStorage.getItem('searchResult')):[]);
  const [isSwitched, setIsSwitched] = useState(JSON.parse(localStorage.getItem('isSwitched')));
  const [loading, setLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [additional, setAdditional] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [searchKey , setSearchKey ] = useState(localStorage.getItem('searchKey'));
  
  const updateWidth = () => {
    if (window.innerWidth<860) {
      setAdditional(2);
      setTotalNumber(5)
    }
    if (window.innerWidth>860 && window.innerWidth<1280) {
      setAdditional(2);
      setTotalNumber(8)
    }
    if (window.innerWidth>1280) {
      setAdditional(3);
      setTotalNumber(12)
    }
  };

  useEffect(() => {   
  updateWidth();
},[]);

  useEffect(() => {   
    window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);      
  });
  
const handleCardLike = useCallback(async (card) => {
  try {
      setLoading(true);
      const res = await moviesApi.handleLike(card);
      card._id=res._id;
      if (!res) {
        throw new Error("Error");
      }
    } catch (error) {console.log(`Ошибка: ${error}`)}
         finally {
      setLoading(false);
    }
});

  function handleMore() {
      setTotalNumber((totalNumber) => totalNumber + additional);
  }

  const  handleClick = useCallback(async (e) => {
    e.preventDefault();
    updateWidth();
    try {
      setLoading(true);
      const movies = await moviesApi.getInitialMovies();
      JSON.stringify(movies);
      if (!movies) {
        throw new Error("Error");
      }
    const searchResult = await SearchUtil.Search(movies, e.target.inp.value.toLowerCase(),isSwitched);
    setCards(searchResult);
    localStorage.setItem('searchKey', e.target.inp.value.toLowerCase());
    setSearchKey(e.target.inp.value.toLowerCase());
    localStorage.setItem('isSwitched', JSON.stringify(isSwitched));
    localStorage.setItem('searchResult', JSON.stringify(searchResult));
    if (searchResult.length==0) {
      setInfoTooltipPopupOpen(true);
      setTooltipMessage("Ничего не найдено");
    }
    } catch (error) {console.log(`Ошибка: ${error}`)}
         finally {
      setLoading(false);
    }
  });

  const closeTooltip = () => {
    setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  }

  function handleSwitcher(e) {
    e.preventDefault();
    setIsSwitched(!isSwitched);
  }

  const handleCardRemove = useCallback(async (card) => {
    try {
        setLoading(true);
        const res = await moviesApi.removeFromSavedMovies(card);
        // JSON.stringify(movies);
        if (!res) {
          throw new Error("Error");
        }
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
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
          clickHandler={handleClick}
          // changeHandler={handleChange}
          switcherHandler={handleSwitcher}
          isSwitched={isSwitched}
          label={searchKey?searchKey:"Фильм"}
        />
        {(cards.length!=0)&&<MoviesCardList
          cards={cards.slice(0, totalNumber)}
          onCardLike={handleCardLike}
          onCardDelete={handleCardRemove}
          mode='all'
        />
        }
        {(cards.length>totalNumber)
        &&
        <div className="movies__morebutton" >
          <Button color={"bigLightgrey"} onClick={handleMore} name="Ещё" isActive={true}/>
        </div>}
      </main>
      <footer>
        <Footer />
      </footer>
      {isInfoTooltipPopupOpen&&<InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          // onClose={closeAllPopups}
          message={tooltipMessage}
          onClick={closeTooltip}
        />}
    </section>
  );
};
