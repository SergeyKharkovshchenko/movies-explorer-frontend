import React, { useEffect, useState } from "react";
import "./SavedMovies.css";
import { SearchForm } from "../SearchForm";
import { MoviesCardList } from "../MoviesCardList";
import pic from "../../images/pic__COLOR_pic.png";
import { Preloader } from "../Preloader";
import { Header } from "../Header";
import { Button } from "../Button";
import { Footer } from "../Footer";

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
];

export const SavedMovies = () => {
  const [cards, setCards] = useState([]);
  const [isSwitched, setIsSwitched] = useState(false);

  useEffect(() => {
    setCards(moviesDummyArray);
  });

  function handleCardLike(card) {
    console.log(card.name + " liked");
  }

  function handleMore() {
    console.log("handleMore");
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
      <MoviesCardList cards={cards} onCardLike={handleCardLike} />
      <div className="movies__morebutton">
        <Button
          color={"bigLightgrey"}
          onClick={handleMore}
          name="More"
          isActive="true"
        />
      </div>
      <Footer />
    </div>
  );
};
