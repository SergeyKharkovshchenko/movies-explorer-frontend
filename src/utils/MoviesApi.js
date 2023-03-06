import { 
  baseUrlMoviesApi, 
  baseUrlMyApi,
  baseUrlMyFrontend 
} from "./config";

const getResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getInitialMovies = () => {
  return fetch(`${baseUrlMoviesApi}/`, {
    method: "GET",
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => getResponse(res));
};

export const getSavedMovies = () => {
  return fetch(`${baseUrlMyApi}/movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => getResponse(res));
};

export const handleLike = (card) => {
  return fetch(`${baseUrlMyApi}/movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: "https://api.nomoreparties.co" + card.image.url,
      trailerLink: card.trailerLink,
      thumbnail:
        `${baseUrlMoviesApi}` +
        card.image.formats.thumbnail.hash +
        card.image.formats.thumbnail.ext,
      movieId: card.id,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      id: card.id,
    }),
  }).then((res) => getResponse(res));
};

export const removeFromSavedMovies = (_id) => {
  return fetch(`${baseUrlMyApi}/movies/${_id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Origin: `${baseUrlMyFrontend}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => getResponse(res));
};

// export const baseUrl = baseUrlMoviesApi;
// export const baseUrl2 = baseUrlMyApi;
