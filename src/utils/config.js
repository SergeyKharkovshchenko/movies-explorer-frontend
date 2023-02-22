const text1 = "Diplom has included 5 stages";
const text2 =
  "Building a plan, working on backend, layout, adding functionality and finishing.";
const text3 = "Working on it took 4 weeks";
const text4 = "Every stage ahd soft and hard deadlines.";
const text5 = "1 week";
const text6 = "3 weeks";
const text7 = "Back-end";
const text8 = "Front-end";

const main = { name: "Main", link: "/", id: 1 };
const signup = { name: "Sign up", link: "/signup", id: 2 };
const signin = { name: "Sign in", link: "/signin", id: 3 };
const profile = { name: "Account", link: "/profile", id: 4 };
const movies = { name: "Movies", link: "/movies", id: 5 };
const savedMovies = {
  name: "Saved movies",
  link: "/saved-movies",
  id: 6,
};

const windowWidthS = 860;
const windowWidthL = 1280;
const additionalColsS = 2;
const additionalColsM = 2;
const additionalColsL = 3;
const totalCardsS = 5;
const totalCardsM = 8;
const totalCardsL = 12;

const shortsDuration = 40;

const baseUrlMoviesApi = "https://api.nomoreparties.co/beatfilm-movies";
const baseUrlMyApi = "https://fierce-cap-worm.cyclic.app";
const baseUrlMyFrontend = "https://movies-explorer-frontend-ivory.vercel.app";


module.exports = {
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  main,
  signup,
  signin,
  profile,
  movies,
  savedMovies,
  windowWidthS,
  windowWidthL,
  additionalColsS,
  additionalColsM,
  additionalColsL,
  totalCardsS,
  totalCardsM,
  totalCardsL,
  shortsDuration,
  baseUrlMoviesApi,
  baseUrlMyApi,
  baseUrlMyFrontend,
};
