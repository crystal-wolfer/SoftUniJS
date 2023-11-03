// Capture elements
const navHomeBtn = document.querySelector('#home');
const navLogoutBtn = document.querySelector('#user #logout');
const navLoginBtn = document.querySelector('#guest #login');
const navRegisterBtn = document.querySelector('#guest #register');
const userNameSpan = document.querySelector('nav span');
const divCatches = document.querySelector('div#catches');
divCatches.innerHTML = '';
const loadBtn = document.querySelector('aside .load');
loadBtn.addEventListener('click', loadCatches);
const addBtn = document.querySelector('fieldset .add');
const formAdd = document.querySelector('#addForm');
formAdd.addEventListener('submit', addItem)

// VALIDATE IF USER IS LOGGED IN OR A GUEST
let isOwner = false;
let isGuest = true;
let userData

if (sessionStorage.getItem('userData')) {
  isGuest = false;
  userData = JSON.parse(sessionStorage.getItem('userData'));
};

function createCatchItem(angler, weight, species, location, bait, captureTime, itemId, isOwner) {
  let disabled = isOwner ? "" : 'disabled';
  let innerHTML =
    `<div class="catch">` +
    `<label>Angler</label>` +
    `<input type="text" class="angler" value="${angler}" ${disabled}>` +
    ` <label>Weight</label>` +
    `<input type="text" class="weight" value="${weight}" ${disabled}>` +
    `<label>Species</label>` +
    `<input type="text" class="species" value="${species}" ${disabled}>` +
    `<label>Location</label>` +
    `<input type="text" class="location" value="${location}" ${disabled}>` +
    `<label>Bait</label>` +
    `<input type="text" class="bait" value="${bait}" ${disabled}>` +
    `<label>Capture Time</label>` +
    `<input type="number" class="captureTime" value="${captureTime}" ${disabled}>` +
    `<button class="update" data-id=${itemId} ${disabled}>Update</button>` +
    `<button class="delete" data-id=${itemId} ${disabled}>Delete</button>` +
    `</div>`
  return innerHTML;
}

// USE CASE USER OR GUEST
if (isGuest) {
  navLogoutBtn.style.display = 'none'
} else {
  navLoginBtn.style.display = 'none'
  userNameSpan.textContent = `${userData.email}`
  addBtn.disabled = false;
}

async function loadCatches(e) {
  divCatches.innerHTML = '';
  const url = 'http://localhost:3030/data/catches'
  const reqBody = {
    method: 'GET'
  };

  // Making the GET request and handling the response errors
  try {
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      const response = await request.json();

      //Iterate through the response array
      response.forEach(element => {
        const angler = element.angler;
        const weight = element.weight;
        const species = element.species;
        const location = element.location;
        const bait = element.bait;
        const captureTime = element.captureTime;
        const itemId = element._id;
        const ownerId = element._ownerId;

        // check if the user is the owner of the item
        if (userData === null || userData === undefined) {
          isOwner = false;
        } else if (userData.id === ownerId) {
          isOwner = true;
        } else {
          isOwner = false;
        }

        // create the html element
        let item = createCatchItem(angler, weight, species, location, bait, captureTime, itemId, isOwner)

        divCatches.innerHTML += item;
      });

    } else {
      divCatches.textContent = `Server error: ${request.status} Message: ${request.message}`;
    }
  }
  catch (err) {
    divCatches.textContent = `Fetch error: ${err}`
  }

  // ADD EVENT LISTENERS TO THE DELETE BUTTONS
  let deleteButtons = Array.from(document.querySelectorAll('.delete'));
  if (deleteButtons.length > 0) {
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', deleteItem);
    });
  }

  // ADD EVENT LISTENERS TO THE UPDATE BUTTONS
  let updateBtns = Array.from(document.querySelectorAll('.update'));
  if (updateBtns.length > 0) {
    updateBtns.forEach(btn => {
      btn.addEventListener('click', updateItem);
    });
  }
}

// USE CASE USER LOGOUT
navLogoutBtn.addEventListener('click', logout);

async function logout(e) {
  // set the URL and the request parameters
  const url = 'http://localhost:3030/users/logout'
  const reqBody = {
    method: 'GET',
    headers: {
      'content-type': 'application/json', // for REST API calls that work with JSON
      'X-Authorization': userData.accessToken
    },
  }

  try {
    const request = await fetch(url, reqBody);
    if (request.status === 204) {
      // remove userData
      sessionStorage.removeItem('userData');
      window.location = 'index.html';
      loadCatches();
    } else {
      throw new Error(`Invalid response ${response.status} ${response.message}`);
    }
  }
  catch (err) {
    throw new Error(err);
  }

}


// USE CASE ADD NEW ITEM
async function addItem(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // Check for empty values
  let hasEmptyField = false;

  for (const [name, value] of formData.entries()) {
    if (value === '') {
      hasEmptyField = true;
      break; // Exit the loop as soon as an empty field is found
    }
  }

  if (hasEmptyField) {
    alert("All fields are required");
  }

  const newCatch = {
    angler: formData.get('angler'),
    weight: formData.get('weight'),
    species: formData.get('species'),
    location: formData.get('location'),
    bait: formData.get('bait'),
    captureTime: formData.get('captureTime')
  }
  const url = 'http://localhost:3030/data/catches'
  const reqBody = {
    method: "POST",
    headers: {
      'content-type': 'application/json',
      'X-Authorization': userData.accessToken
    },
    body: JSON.stringify(newCatch)
  }

  try {
    // send the request
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      const response = await request.json();
      loadCatches();
      form.reset();
    } else {
      throw new Error(`Invalid response ${request.status} ${request.message}`);
    }
  }
  catch (err) {
    console.log(`Fetch error: ${err}`);
  }

}


// USE CASE DELETE ITEM
async function deleteItem(e) {
  const btn = e.target;
  const itemId = btn.dataset.id;
  const url = `http://localhost:3030/data/catches/${itemId}`;

  const reqBody = {
    method: 'DELETE',
    headers: {
      'X-Authorization': userData.accessToken
    }
  }

  try {
    // send the request
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      loadCatches();
    } else {
      throw new Error(`Invalid response ${request.status} ${request.message}`);
    }
  }
  catch (err) {
    console.log(`Fetch error: ${err}`);
  }

}

// USE CASE UPDATE ITEM
async function updateItem(e) {
  const btn = e.target;
  const itemId = btn.dataset.id;
  const divCatch = btn.parentElement;
  let [angler, weight, species, location, bait, captureTime] = divCatch.querySelectorAll('input');

  const updatedItem = {
    angler: angler.value,
    weight: weight.value,
    species: species.value,
    location: location.value,
    bait: bait.value,
    captureTime: captureTime.value,
    _ownerId: userData.id,
    _id: itemId
  }

  const url = `http://localhost:3030/data/catches/${itemId}`;

  const reqBody = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'X-Authorization': userData.accessToken
    },
    body: JSON.stringify(updatedItem)
  }

  try {
    // send the request
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      loadCatches();
    } else {
      throw new Error(`Invalid response ${request.status} ${request.message}`);
    }
  }
  catch (err) {
    console.log(`Fetch error: ${err}`);
  }

}