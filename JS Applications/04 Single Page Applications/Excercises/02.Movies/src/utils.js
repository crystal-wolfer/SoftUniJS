import { navMenu } from "./app.js";
import { displayMovie } from "./displayMovie.js";


export function updateNavBar(){
  const navUl = document.querySelector('ul');
  const welcomeLi = navMenu.userLi[0]
  const welcomeTag = navMenu.userLi[0].querySelector('a');
  const logout = navMenu.userLi[1];
  const navGuestArr = navMenu.guestLi;
  const addMovie = navMenu.addMovieSection;
  const homeSection = document.getElementById('home-page');

  // obj with user data that was stored
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  //remove unnecessary elements
  navUl.innerHTML = '';

  // check if the addMovie button is there
  function hasSpecificChild(parentElement, specificChildTagName) {
    for (var i = 0; i < parentElement.childNodes.length; i++) {
      var child = parentElement.childNodes[i];
      if (child.innerText === specificChildTagName) {
        return true; // Found the specific child
      }
    }
    return false; // Specific child not found
  }

  let hasAddMovieButton = hasSpecificChild(homeSection, "Add Movie")

  //if user is authenticated
  if (userData){
      welcomeTag.textContent = `Welcome, ${userData.email}`;
      navUl.appendChild(welcomeLi);
      navUl.appendChild(logout);
      homeSection.appendChild(addMovie);

  } else{
    navGuestArr.forEach(li => {
      navUl.appendChild(li);
    });

    if (hasAddMovieButton){
      homeSection.removeChild(addMovie)
    }
  }
}

//function that creates a movie card
export function createMovieCard(movie) {
  const userData = JSON.parse(sessionStorage.getItem('userData'))
  let disable = !userData ? 'pointer-events: none' : '';

  // Create the main card div
  var card = document.createElement("div");
  card.className = "card mb-4";

  // Create the card image
  var cardImage = document.createElement("img");
  cardImage.className = "card-img-top";
  cardImage.src = movie.img;
  cardImage.alt = "Card image cap";
  cardImage.width = "400";
  card.appendChild(cardImage);

  // Create the card body
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);

  // Create the card title
  var cardTitle = document.createElement("h4");
  cardTitle.className = "card-title";
  cardTitle.textContent = movie.title;
  cardBody.appendChild(cardTitle);

  // Create the card footer
  var cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  card.appendChild(cardFooter);

  // Create the "Details" link with the provided movie._id
  var detailsLink = document.createElement("a");
  detailsLink.href = "#";
  detailsLink.id = movie._id;
  detailsLink.setAttribute('style',`${disable}`);
  detailsLink.addEventListener("click", displayMovie)

  // Create the "Details" button
  var detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.className = "btn btn-info";
  detailsButton.textContent = "Details";

  // Append the button to the link
  detailsLink.appendChild(detailsButton);

  cardFooter.appendChild(detailsLink);

  return card;
}


// function that creates a movie details element
export function createMovieElement(h1, imgSrc, p, ownerId, movieId) {
  
  // Create the container div
  var container = document.createElement("div");
  container.className = "container";

  // Create the row div
  var row = document.createElement("div");
  row.className = "row bg-light text-dark";
  container.appendChild(row);

  // Create the h1 element for movie title
  var h1Element = document.createElement("h1");
  h1Element.textContent = "Movie title: " + h1;
  row.appendChild(h1Element);

  // Create the col-md-8 div
  var col8 = document.createElement("div");
  col8.className = "col-md-8";
  row.appendChild(col8);

  // Create the image element
  var imgElement = document.createElement("img");
  imgElement.className = "img-thumbnail";
  imgElement.src = imgSrc;
  imgElement.alt = "Movie";
  col8.appendChild(imgElement);

  // Create the col-md-4 div
  var col4 = document.createElement("div");
  col4.className = "col-md-4 text-center";
  row.appendChild(col4);

  // Create the h3 element for description
  var h3Element = document.createElement("h3");
  h3Element.className = "my-3";
  h3Element.textContent = "Movie Description";
  col4.appendChild(h3Element);

  // Create the p element for the description
  var pElement = document.createElement("p");
  pElement.textContent = p;
  col4.appendChild(pElement);

  // Create the delete, edit, and like buttons
  var deleteButton = document.createElement("a");
  deleteButton.className = "btn btn-danger";
  deleteButton.href = "#";
  deleteButton.textContent = "Delete";
  

  var editButton = document.createElement("a");
  editButton.className = "btn btn-warning";
  editButton.href = "#";
  editButton.textContent = "Edit";

  var likeButton = document.createElement("a");
  likeButton.className = "btn btn-primary";
  likeButton.href = "#";
  likeButton.textContent = "Like";

  col4.appendChild(deleteButton);
  col4.appendChild(editButton);
  col4.appendChild(likeButton);

  // Create the span for enrolled
  var enrolledSpan = document.createElement("span");
  enrolledSpan.className = "enrolled-span";
  col4.appendChild(enrolledSpan);

  // Add dataset properties to the container
  container.dataset.ownerId = ownerId;
  container.dataset.movieId = movieId;

  return container;
}
