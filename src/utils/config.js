const text1 = "Дипломный проект включал 5 этапов";
const text2 =
  "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.";
const text3 = "На выполнение диплома ушло 5 недель";
const text4 =
  "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.";
const text5 = "1 неделя";
const text6 = "4 недели";
const text7 = "Back-end";
const text8 = "Front-end";

const main = { name: "Главная", link: "/", id: 1 };
const signup = { name: "Регистрация", link: "/signup", id: 2 };
const signin = { name: "Войти", link: "/signin", id: 3 };
const profile = { name: "Аккаунт", link: "/profile", id: 4 };
const movies = { name: "Фильмы", link: "/movies", id: 5 };
const savedMovies = {
  name: "Сохранённые фильмы",
  link: "/saved-movies",
  id: 6,
};

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
};
