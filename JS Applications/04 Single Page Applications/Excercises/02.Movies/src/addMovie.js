import { pages } from "./app.js";
import { homePage } from "./homePage.js";

export function addMovie(e){
  e.preventDefault();
  
  
  const bodyContainer = document.getElementById('container');
  const nav = document.querySelector('nav');


  bodyContainer.innerHTML = '';
  bodyContainer.appendChild(nav);
  bodyContainer.appendChild(pages.addMovie);

  // make a register request
  const addMovieForm = document.getElementById("add-movie-form");
  addMovieForm.addEventListener("submit", addMov);
  
}

async function addMov(e){
  e.preventDefault();
  const form = e.target; // assuming this function is attached to submit event
  const formData = new FormData(form); // assuming the form used name attributes
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  const addMovieForm = document.getElementById("add-movie-form");

  const movie = {
    title: formData.get('title'),
    description: formData.get('description'),
    img: formData.get('img'),
  }

  // set the URL and the request parameters
  const url = 'http://localhost:3030/data/movies'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': userData.accessToken
    },
    body: JSON.stringify(movie) // whatever you want to create as info can also be directly an object
  }

  if(movie.title && movie.description && movie.img) {
    try {
      const request = await fetch(url, reqBody);

      if (request.status === 200) {
        const response = await request.json();
        addMovieForm.reset()
        // redirect to the home page
        homePage();
      } else {
        alert(`Server error: ${request.status} Message: ${request.message}`)
      }
    }
    catch (err) {
      alert(`Fetch error: ${err}`)
    }

  }else {
    alert('Please provide all required inputs');
  }


}