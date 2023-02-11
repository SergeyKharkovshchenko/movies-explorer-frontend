export const Search = (cards, keyWord, isShort)  => {
    console.log('Search cards '+cards)
    console.log('Search keyWord '+keyWord)
    console.log('Search isShort '+isShort)
    let filtered = cards.filter(movie => movie.nameRU.toLowerCase().includes(keyWord));
    if (isShort) {
        return filtered.filter(movie => movie.duration < 40);
    } else {
        return filtered;
    }

  }
