import { pages } from "./app.js";
import { createMovieElement } from "./utils.js"

export async function displayMovie(e){
  const bodyContainer = document.getElementById('container');
  const nav = document.querySelector('nav');
  const userData = JSON.parse(sessionStorage.getItem('userData'))


  bodyContainer.innerHTML = '';
  bodyContainer.appendChild(nav);
  bodyContainer.appendChild(pages.movie);

  const movieSection = document.getElementById('movie-example');
  movieSection.innerHTML = '';

  const movieId = e.target.parentElement.id;

  // make a request to show the movie details
  const url = `http://localhost:3030/data/movies/${movieId}`

  try{
    const request = await fetch(url, {method: 'GET'});
    if (request.status === 200){
      const response = await request.json();
      const title = response.title
      const imgSrc = response.img
      const description = response.description
      const ownerId = response._ownerId
    
      const divEl = createMovieElement(title, imgSrc, description, ownerId, movieId);

      movieSection.appendChild(divEl);

      // remove buttons if the user is not owner
      if (ownerId !== userData.id){
        const delBtn = document.querySelector('a.btn-danger')
        const editBtn = document.querySelector('a.btn-warning')
        const divParent = document.querySelector('div.col-md-4');

        divParent.removeChild(delBtn);
        divParent.removeChild(editBtn);
      }

    } else {
      throw new Error(`Server error: ${request.status} Message: ${request.message}`);
    }
  }
  catch (err) {
    throw new Error(`Fetch error: ${err}`)
  }

  

}