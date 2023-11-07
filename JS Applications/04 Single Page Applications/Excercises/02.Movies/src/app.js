const bodyContainer = document.getElementById('container');
const nav = document.querySelector('nav');
nav.addEventListener('click', onNavigate);
const addMovieBtn = document.querySelector('section#add-movie-button > a');
addMovieBtn.removeEventListener('click', addMovie);
addMovieBtn.addEventListener('click', addMovie);

// imports
import { loginPage } from "./loginPage.js";
import { registerPage } from "./registerPage.js";
import { homePage } from "./homePage.js";
import { logout } from "./logout.js";
import { addMovie } from "./addMovie.js";

export let pages = {
  home: document.getElementById('home-page'),
  addMovie: document.getElementById('add-movie'),
  movie: document.getElementById('movie-example'),
  editMovie: document.getElementById('edit-movie'),
  login: document.getElementById('form-login'),
  register: document.getElementById('form-sign-up'),
}

export let navMenu = {
  userLi: document.querySelectorAll("li.user"),
  guestLi: document.querySelectorAll("li.guest"),
  addMovieSection: document.getElementById("add-movie-button")

}

// // on loading show only the home page
//   bodyContainer.innerHTML = '';
//   bodyContainer.appendChild(nav);
//   homePage();

// must change the href in the html file to those same keys
let routes = {
  "/": homePage,
  "/login": loginPage,
  "/register": registerPage,
  "/logout": logout,
}

function onNavigate(event){
  // setting the trigger only when an a tag is clicked
  if(event.target.tagName === 'A' && event.target.href){
    event.preventDefault();
    //construct URL object
    const urlObj = new URL(event.target.href)
    const view = routes[urlObj.pathname]; // returns the /*text* path that appears after the home page url this is needed to get the functionality we want to render
    view();
  } 
}

