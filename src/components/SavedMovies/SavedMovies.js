import React, { useEffect, useState, useCallback } from "react";
import { Preloader } from "../Preloader";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import pic from "../../images/pic__COLOR_pic.png";
import { Header } from "../Header";
import { Button } from "../Button";
import { Footer } from "../Footer";
import * as moviesApi from "../../utils/MoviesApi";
import * as SearchUtil from "../../utils/SearchUtil";
import "./SavedMovies.css";

// const moviesDummyArray = [
//   {
//     image: pic,
//     name: "Movie 1",
//     id: 1,
//     duration: "1ч 47м",
//   },
// ];

export const SavedMovies = () => {

const [cards, setCards] = useState(JSON.parse(localStorage.getItem('searchResultSaved'))?JSON.parse(localStorage.getItem('searchResultSaved')):[]);
const [allMovies, setAllMovies] = useState([]);
const [isSwitched, setIsSwitched] = useState(JSON.parse(localStorage.getItem('isSwitchedSaved')));
const [searchKey , setSearchKey ] = useState(localStorage.getItem('searchKeySaved')?localStorage.getItem('searchKeySaved'):'');
const [loading, setLoading] = useState(false);
const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
const [tooltipMessage, setTooltipMessage] = useState("");
const [additional, setAdditional] = useState(0);
const [totalNumber, setTotalNumber] = useState(0);
const [savedMovies, setSavedMovies] = useState([]);


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
handleClick(searchKey);
},[isSwitched]);

useEffect(() => {   
  window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);      
});


const  handleClick = useCallback(async (searchWord) => {
    updateWidth();
  try {
    setLoading(true);
      const movies = await moviesApi.getSavedMovies();
      if (!movies) {
        throw new Error("Error");
      }
      JSON.stringify(movies);
      setAllMovies(movies);
      const searchResult = await SearchUtil.Search(movies, searchWord.toLowerCase(),isSwitched);
      setCards(searchResult);
      if (searchResult.length==0) {
        setInfoTooltipPopupOpen(true);
        setTooltipMessage("Ничего не найдено");
      }

  localStorage.setItem('searchKeySaved', searchWord.toLowerCase());
  setSearchKey(searchWord.toLowerCase());
  localStorage.setItem('isSwitchedSaved', JSON.stringify(isSwitched));
  localStorage.setItem('searchResultSaved', JSON.stringify(cards));
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

const handleCardRemove = useCallback(async (card) => {
  try {
      setLoading(true);
      const res = await moviesApi.removeFromSavedMovies(card);
      // JSON.stringify(movies);
      handleClick(searchKey);
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
          clickHandler={(e)=>handleClick(e.target.inp.value)}
          // changeHandler={handleChange}
          switcherHandler={handleSwitcher}
          isSwitched={isSwitched}
          label={"Фильм"}
          search={searchKey}
        />

        <MoviesCardList 
        cards={cards} 
        savedMovies={allMovies}
        onCardLike={handleCardRemove} 
        mode='saved' 
        onCardDelete={handleCardRemove} 
        />

      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};
