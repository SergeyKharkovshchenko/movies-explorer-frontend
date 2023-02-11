const getResponse = res => 
{
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

 export const getInitialMovies = ()  => {
    return fetch(`${baseUrl}/`, {
            method: "GET",
           headers: {
            "Origin": "https://sergey-kh.dilpom.nomoredomainsclub.ru",
            "Accept": "application/json",        
            "Content-Type": "application/json",
          },
    })
    .then((res) => getResponse(res));
  }
  

  export const getSavedMovies = ()  => {
    return fetch(`${baseUrl2}/movies`, {
            method: "GET",
            credentials: 'include',
           headers: {
            "Origin": "https://sergey-kh.dilpom.nomoredomainsclub.ru",
            "Accept": "application/json",        
            "Content-Type": "application/json",
          },
    })
    .then((res) => getResponse(res));
  }


  
 export const handleLike = (card)  => {
    return fetch(`${baseUrl2}/movies`, {
            method: "POST",
            credentials: 'include',
           headers: {
            "Origin": "https://sergey-kh.dilpom.nomoredomainsclub.ru",
            "Accept": "application/json",        
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: 'https://api.nomoreparties.co'+card.image.url,
            trailerLink: card.trailerLink,
            thumbnail: `${baseUrl}`+card.image.formats.thumbnail.hash+card.image.formats.thumbnail.ext,
            movieId: card.id,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
          }),
    })
    .then((res) => getResponse(res));
  }
  
  export const removeFromSavedMovies = (card)  => {
    return fetch(`${baseUrl2}/movies/${card._id}`, {
            method: "DELETE",
            credentials: 'include',
           headers: {
            "Origin": "https://sergey-kh.dilpom.nomoredomainsclub.ru",
            "Accept": "application/json",        
            "Content-Type": "application/json",
          },
    })
    .then((res) => getResponse(res));
  }

export const baseUrl = "https://api.nomoreparties.co/beatfilm-movies";
export const baseUrl2 = "https://api.sergey-kh.dilpom.nomoredomains.rocks";