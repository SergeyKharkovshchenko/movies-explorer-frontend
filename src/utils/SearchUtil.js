import {
    shortsDuration
   } from "./config";

export const Search = (cards, keyWord, isShort)  => {
    let filtered = cards.filter(movie => movie.nameRU.toLowerCase().includes(keyWord));
    if (isShort) {
        return filtered.filter(movie => movie.duration < shortsDuration);
    } else {
        return filtered;
    }
  }
