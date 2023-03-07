# Movies Browser - work example of Sergey Kharkovshchenko

## For ease of use you can use
login: 
test111@test.ru 
password: 
test111

## Decription

Movies Browser is a service, that allows to find a movie by request, save it in your personal account or purchase.

## Functionality

- available on mobile devices 
- user registration and authorization 
- the type of the header changes depending on the authorization status
- you can add movie to cart or remove it from cart

<img src="./src/images/buy.jpg" /></img>
- see what is in cart

<img src="./src/images/cart_menu.jpg" /></img>
- press purchase and get to final page

<img src="./src/images/order_page.jpg" /></img>
- if the cards have already been displayed on the page in the results block, clicking on the checkbox "Shorts" leads to the re-filtering of the result

<img src="./src/images/filter.jpg" /></img>
- for optimization, the request to get all movies is executed only once, after which they are saved in local storage 
- the grid of movies depends on the width of the screen. When you click on the "More" button, as many films as there are currently displayed in one row (3, 2 or 5) will be displayed. 

<img src="./src/images/more.jpg"></img>
- save/delete movies. When changing pages, the current data is displayed. On the "Saved" page, you can only delete 

<img src="./src/images/save.jpg"></img>
- when you click on a movie poster in a new tab, it opens the movie page with description and trailer (if any) 
- switch language 

<img src="./src/images/language.jpg"></img>
- when you try to go to any protected route, a redirect to the main one occurs 
- if the user was authorized and closed the tab, he can immediately return to any page of the application at the URL 
- the user receives a message in case of any error 
- when searching, the query text, found movies and the state of the shorts switcher are saved in the storage 
- form fields are blocked while sending requests, and the user is not able to send a new request until the previous one is completed 
- all forms are validated on the client side, the user cannot send a request with invalid data 
- editing profile (name, email) 
- the user is shown a notification about a successful request to the server when saving the profile 
- if the information entered on the profile editing page corresponds to the current user data, the "Save" button is disabled and it is not possible to send a save request 
- the preloader is spinning while the movie request is being executed 
- some animation - burger on clock, search button on hover
- when you try to go to a non-existent page, a redirect to the "404" page occurs 

## Technologies

- React
- Redux
- React Router
- Hooks (useState, useEffect, useContext)
- custom hooks (validation, screen width checking, etc.)
- local storage and cookies
- asynch API
- HOC-components
- BEM
- Git handling
- authorization
- responsive/adaptive
- example of Jest tests in AboutMe component
- JWT handling (in backend part)
- SASS/SCSS
- choice of language (using i18next)

## Instruction

Few simple steps to run this project.

- Create a folder and go in this folder:

```
cd <Folder name>
```

- Clone this rep:

```
git clone https://github.com/SergeyKharkovshchenko/movies-explorer-frontend
```

- Install dependencies:

```
npm install
```

- Run a project:

```
npm start
```

## Node version

Node.js v18.13.0

## Git of backend:
https://github.com/SergeyKharkovshchenko/movies-explorer-api


## Link to a web site:
https://movies-explorer-frontend-ivory.vercel.app/


