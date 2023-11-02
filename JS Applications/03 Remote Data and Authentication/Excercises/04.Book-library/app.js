const getURL = 'http://localhost:3030/jsonstore/collections/books'
const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadBooks);
const tableBody = document.querySelector('table > tbody')
const formH3 = document.querySelector('form > h3');
const formBtn = document.querySelector('form > button');
formBtn.addEventListener('click', updateEl);
const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');


//function that creates the tr element
function createTrElement(id, title, author) {
  // Create the table row element
  const tr = document.createElement("tr");

  // Create the first cell (<td>) and add it to the row
  const td1 = document.createElement("td");
  td1.textContent = title;
  tr.appendChild(td1);

  // Create the second cell (<td>) and add it to the row
  const td2 = document.createElement("td");
  td2.textContent = author;
  tr.appendChild(td2);

  // Create the third cell (<td>) and add it to the row
  const td3 = document.createElement("td");

  // Create the "Edit" button and add it to the third cell
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.dataset.id = id
  editButton.addEventListener('click', editEl)
  td3.appendChild(editButton);

  // Create the "Delete" button and add it to the third cell
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.id = id
  deleteButton.addEventListener('click', deleteEl)
  td3.appendChild(deleteButton);

  // Add the third cell to the row
  tr.appendChild(td3);

  // Return the created table row
  return tr;
};

async function loadBooks(e) {
  tableBody.innerHTML = '';
  try {
    const request = await fetch(getURL, { method: 'GET' })
    const response = await request.json();

    if (request.status === 200) {
      for (const key in response) {
        const id = key;
        const title = response[key].title;
        const author = response[key].author;

        const trEl = createTrElement(id, title, author);
        tableBody.appendChild(trEl);
      }
    } else {
      throw new Error(`Status error: ${request.status}`)
    }
  }
  catch (err) {
    throw new Error(`${err}`)
  }
}

function editEl(e) {
  const title = e.target.parentElement.parentElement.children[0];
  const author = e.target.parentElement.parentElement.children[1];

  formTitle.value = title.textContent
  formAuthor.value = author.textContent


  formH3.textContent = 'Edit FORM';
  formBtn.textContent = 'Save';
  formBtn.dataset.id = e.target.dataset.id;
  formBtn.addEventListener('click', updateEl);
}

async function updateEl(e) {
  e.preventDefault();
  let originBtn = e.target;

  // check if operation is PUT or POST
  if (originBtn.textContent === 'Save') {
    let id = originBtn.dataset.id;
    let URL = `${getURL}/${id}`;

    const book = {
      "author": formAuthor.value,
      "title": formTitle.value
    }

    let reqBody = {
      method: 'PUT',
      headers: {
        'content-type': 'application/json' // for REST API calls that work with JSON
      },
      body: JSON.stringify(book) // whatever you want to create as info can also be directly an object
    }

    // maket the request
    try {
      const request = await fetch(URL, reqBody)
      const response = await request.json();

      if (request.status === 200) {
        loadBooks();
        formAuthor.value = '';
        formTitle.value = '';
        formH3.textContent = 'FORM';
        formBtn.textContent = 'Submit';
      } else {
        throw new Error(`Status error: ${request.status}`)
      }
    }
    catch (err) {
      throw new Error(`${err}`)
    }
  } else {
    const book = {
      "author": formAuthor.value,
      "title": formTitle.value
    }
    const reqBody = {
      method: 'POST',
      headers: {
        'content-type': 'application/json' // for REST API calls that work with JSON
      },
      body: JSON.stringify(book)
    }

    if (formAuthor.value && formAuthor.value) {
      // maket the request
      try {
        const request = await fetch(getURL, reqBody)
        const response = await request.json();

        if (request.status === 200) {
          loadBooks();
          formAuthor.value = '';
          formTitle.value = '';
          formH3.textContent = 'FORM';
          formBtn.textContent = 'Submit';
        } else {
          throw new Error(`Status error: ${request.status}`)
        }
      }
      catch (err) {
        throw new Error(`${err}`)
      }
    }
  }

}

async function deleteEl(e) {
  let id = e.target.dataset.id;
  let URL = `${getURL}/${id}`;

  try {
    const request = await fetch(URL, { method: 'DELETE' })
    const response = await request.json();

    if (request.status === 200) {
      loadBooks();
    } else {
      throw new Error(`Status error: ${request.status}`)
    }
  }
  catch (err) {
    throw new Error(`${err}`)
  }
}