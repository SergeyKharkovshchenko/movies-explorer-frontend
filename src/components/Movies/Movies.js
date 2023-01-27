import React, { useEffect, useState } from "react";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import pic from "../../images/pic__COLOR_pic.png";
import { Preloader } from "../Preloader";
import { Button } from "../Button";
import { Header } from "../Header";
import { Footer } from "../Footer";
import "./Movies.css";

const moviesDummyArray = [
  {
    image: pic,
    name: "Movie 1",
    id: 1,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 2",
    id: 2,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 3",
    id: 3,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 4",
    id: 4,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 5",
    id: 5,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 6",
    id: 6,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 7",
    id: 7,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 8",
    id: 8,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 9",
    id: 9,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 10",
    id: 10,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 11",
    id: 11,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 12",
    id: 12,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 13",
    id: 13,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 14",
    id: 14,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 15",
    id: 15,
    duration: "1ч 47м",
  },
  {
    image: pic,
    name: "Movie 16",
    id: 16,
    duration: "1ч 47м",
  },
];

export const Movies = () => {
  const [cards, setCards] = useState([]);
  const [isSwitched, setIsSwitched] = useState(false);
  const [dozenNumber, setDozenNumber] = useState(1);

  useEffect(() => {
    setCards(moviesDummyArray);
  });

  function handleCardLike(card) {
    console.log(card.name + " liked");
  }

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

  return (
    <div className="movies">
      <Header mode={"white"} />
      <SearchForm
        clickHandler={handleClick}
        changeHandler={handleChange}
        switcherHandler={handleSwitcher}
        isSwitched={isSwitched}
      />
      <MoviesCardList
        cards={cards.slice(dozenNumber - 1, dozenNumber + 11)}
        onCardLike={handleCardLike}
      />
      <div className="movies__morebutton">
        <Button color={"bigLightgrey"} onClick={handleMore} name="Ещё" />
      </div>
      <Footer />
    </div>
  );
};
