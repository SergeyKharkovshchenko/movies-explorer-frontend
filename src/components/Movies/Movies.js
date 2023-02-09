import React, { useEffect, useState, useCallback } from "react";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import pic from "../../images/pic__COLOR_pic.png";
import { Preloader } from "../Preloader";
import { Button } from "../Button";
import { Header } from "../Header";
import { Footer } from "../Footer";
import * as moviesApi from "../../utils/MoviesApi";
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
  const [cards, setCards] = useState([]);
  const [isSwitched, setIsSwitched] = useState(false);
  const [dozenNumber, setDozenNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  
  // const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    cbGetMovies();
  },[]);
  
  const cbGetMovies = useCallback(async () => {
    try {
        setLoading(true);
        const movies = await moviesApi.getInitialMovies();
        JSON.stringify(movies);
        if (!movies) {
          throw new Error("Error");
        }
        setCards(movies);
      } catch (error) {console.log(`Ошибка: ${error}`)}
           finally {
        setLoading(false);
      }
});

const handleCardLike = useCallback(async (card) => {
  console.log(card.nameRU + " - liked");
  try {
      setLoading(true);

      const res = await moviesApi.handleLike(card);
      // JSON.stringify(movies);
      if (!res) {
        throw new Error("Error");
      }
      // setCards(movies);
    } catch (error) {console.log(`Ошибка: ${error}`)}
         finally {
      setLoading(false);
    }
});

  function handleMore() {
    if (cards.length < 12) {
      console.log("Карточек меньше 12");
    } else if (dozenNumber * 12 < cards.length) {
      setDozenNumber((dozenNumber) => dozenNumber + 12);
    } else {
      setDozenNumber((dozenNumber) => 1);
      console.log("Это все карточки, возвращаю на начало");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("handleClick");
  }

  function handleChange(e) {
    e.preventDefault();
    console.log("handleChange");
  }

  function handleSwitcher(e) {
    e.preventDefault();
    setIsSwitched(!isSwitched);
    console.log("isSwitched > " + isSwitched);
  }

  const handleCardRemove = useCallback(async (card) => {
    console.log(card.nameRU + " - liked");
    try {
        setLoading(true);
        const res = await moviesApi.removeFromSavedMovies(card);
        // JSON.stringify(movies);
        if (!res) {
          throw new Error("Error");
        }
        // setCards(movies);
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
          changeHandler={handleChange}
          switcherHandler={handleSwitcher}
          isSwitched={isSwitched}
        />
        <MoviesCardList
          cards={cards.slice(dozenNumber - 1, dozenNumber + 11)}
          onCardLike={handleCardLike}
          onCardDelete={handleCardRemove}
          mode='all'
        />
        <div className="movies__morebutton" >
          <Button color={"bigLightgrey"} onClick={handleMore} name="Ещё" isActive={true}/>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};
