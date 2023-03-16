import React, { useEffect, useState, useCallback } from "react";
import { Preloader } from "../Preloader";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
// import { InfoTooltip } from "../InfoTooltip";
import { Header } from "../Header";
import { Footer } from "../Footer";
import * as moviesApi from "../../utils/MoviesApi";
import * as SearchUtil from "../../utils/SearchUtil";
import "./SavedMovies.css";

export const SavedMovies = ( ) => {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("searchResultSaved"))
      ? JSON.parse(localStorage.getItem("searchResultSaved"))
      : []
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSwitched, setIsSwitched] = useState(
    JSON.parse(localStorage.getItem("isSwitchedSaved"))
  );
  const [searchKey, setSearchKey] = useState(
    localStorage.getItem("searchKeySaved")
      ? localStorage.getItem("searchKeySaved")
      : ""
  );
  const [loading, setLoading] = useState(false);
  // const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = useState(false);
  // const [tooltipMessage, setTooltipMessage] = useState("");

  useEffect(() => {
    handleClick(searchKey);
  }, [isSwitched]);

  const handleClick = useCallback(async (searchWord) => {
    try {
      const movies = await moviesApi.getSavedMovies();
      if (!movies) {
        throw new Error("Error");
      }
      JSON.stringify(movies);
      setSavedMovies(movies);
      const searchResult = SearchUtil.Search(
        movies,
        searchWord.toLowerCase(),
        isSwitched
      );
      setCards(searchResult);
      if (searchResult.length == 0) {
        // setInfoTooltipPopupOpen(true);
        // setTooltipMessage("Nothing was found");
      }

      localStorage.setItem("searchKeySaved", searchWord.toLowerCase());
      setSearchKey(searchWord.toLowerCase());
      localStorage.setItem("isSwitchedSaved", JSON.stringify(isSwitched));
      localStorage.setItem("searchResultSaved", JSON.stringify(cards));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  });

  function handleSwitcher() {
    setIsSwitched(!isSwitched);
  }

  const handleCardRemove = useCallback(async (card) => {
    try {
      const res = await moviesApi.removeFromSavedMovies(card);
      handleClick(searchKey);
      if (!res) {
        throw new Error("Error");
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  });

  // const closeTooltip = () => {
  //   setInfoTooltipPopupOpen(!isInfoTooltipPopupOpen);
  // }

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
          clickHandler={(e) => handleClick(e.target.inp.value)}
          switcherHandler={handleSwitcher}
          isSwitched={isSwitched}
          label={"Movie"}
          search={searchKey}
        />

        <MoviesCardList
          cards={cards}
          savedMovies={savedMovies}
          onCardLike={handleCardRemove}
          mode="saved"
          onCardDelete={handleCardRemove}
        />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* {isInfoTooltipPopupOpen&&<InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          message={tooltipMessage}
          onClick={closeTooltip}
        />} */}
    </section>
  );
};
