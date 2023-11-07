import { pages } from "./app.js";
import * as Utils from "./utils.js";
import { displayMovie } from "./displayMovie.js";

export async function homePage() {
  const bodyContainer = document.getElementById('container');
  const nav = document.querySelector('nav');
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  bodyContainer.innerHTML = '';
  bodyContainer.appendChild(nav);
  bodyContainer.appendChild(pages.home);
  const moviesUl = document.getElementById('movies-list');


  Utils.updateNavBar();


  // display movie section - get request and visualization
 moviesUl.innerHTML = '';

  const getURL = 'http://localhost:3030/data/movies'

  try{
    const request = await fetch(getURL, {method: 'GET'});
    if (request.status === 200){
      const response = await request.json();
      //console.log(response);

      response.forEach(movie => {
        const movieObj = {
          title: movie.title,
          img: movie.img,
          _id: movie._id,
        }

        const divEl = Utils.createMovieCard(movieObj);
        moviesUl.appendChild(divEl);
      });

    } else {
      console.log(`Server error: ${request.status} Message: ${request.message}`); 
    }
  }
  catch(err){
    console.log(err);
  }
 

}

