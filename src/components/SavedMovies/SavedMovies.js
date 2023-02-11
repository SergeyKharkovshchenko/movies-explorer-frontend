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
  const [cards, setCards] = useState([]);
  const [isSwitched, setIsSwitched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isReloading, setIsReloading] = useState(true);

  useEffect(() => {
    cbGetMovies();
  }, [isReloading]);
  
  const cbGetMovies = useCallback(async () => {
    try {
        setLoading(true);
        const movies = await moviesApi.getSavedMovies();
        // JSON.stringify(movies);
        if (!movies) {
          throw new Error("Error");
        }
        setCards(movies);
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
});

const handleCardRemove = useCallback(async (card) => {
  try {
      // setLoading(true);
      const res = await moviesApi.removeFromSavedMovies(card);
      if (!res) {
        throw new Error("Error");
      }
      setIsReloading(!isReloading);
    } catch (error) {console.log(`Ошибка: ${error}`)}
    //      finally {
    //   setLoading(false);
    // }
});

  function handleClick(e) {
    e.preventDefault();
    setCards(SearchUtil.Search(cards, e.target.inp.value.toLowerCase(),isSwitched));
  }

  // function handleChange(e) {
  //   e.preventDefault();
  //   console.log("handleChange");
  // }

  function handleSwitcher(e) {
    e.preventDefault();
    setIsSwitched(!isSwitched);
  }

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
        />
        <MoviesCardList cards={cards} onCardLike={handleCardRemove} mode='saved' onCardDelete={handleCardRemove} />
        {/* <div className="savedmovies__morebutton">
          <Button
            color={"bigLightgrey"}
            onClick={handleMore}
            name="More"
            isActive="true"
          />
        </div> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};
