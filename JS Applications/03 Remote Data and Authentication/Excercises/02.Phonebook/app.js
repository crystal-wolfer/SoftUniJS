function attachEvents() {
  // capture elements
  const phonebookUL = document.getElementById('phonebook');
  const nameInput = document.getElementById('person');
  const numberInput = document.getElementById('phone');
  const loadBtn = document.getElementById('btnLoad');
  const createBtn = document.getElementById('btnCreate');
  const baseURL = "http://localhost:3030/jsonstore/phonebook"

  // add event handlers
  loadBtn.addEventListener('click', loadPhoneBook);
  createBtn.addEventListener('click', createPhoneEntry);

  async function loadPhoneBook(e) {
    phonebookUL.innerHTML = '';
    try {
      const request = await fetch(baseURL, { method: 'GET' });
      const result = await request.json();

      if (request.status === 200) {
        for (const key in result) {
          let keyValue = key;
          let person = result[key].person;
          let phone = result[key].phone;

          // creating the html elements
          const liItem = document.createElement('li');
          liItem.textContent = `${person}: ${phone}`;
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = "Delete";
          deleteBtn.id = "deleteBtn";
          deleteBtn.dataset.id = keyValue;
          deleteBtn.addEventListener('click', deleteEntry)

          liItem.appendChild(deleteBtn);
          phonebookUL.appendChild(liItem);
        }
      } else {
        throw new Error(`Status error: ${request.status}`)
      }
    }
    catch (err) {
      throw new Error(`${err}`)
    }
  }

  async function createPhoneEntry(e) {
    const phoneEntry = {
      "person": nameInput.value,
      "phone": numberInput.value
    }

    const reqBody = {
      method: 'POST',
      headers: {
        'content-type': 'application/json' // for REST API calls that work with JSON
      }, 
      body: JSON.stringify(phoneEntry)
    }

    if (nameInput.value && numberInput.value) {
      try {
        const request = await fetch(baseURL, reqBody);
        const result = await request.json();

        if (request.status === 200){
          nameInput.value = '';
          numberInput.value = '';
          phonebookUL.innerHTML = '';
          loadPhoneBook();
        }else {
          throw new Error(`Status error: ${request.status}`)
        }
      }
      catch (err) {
        throw new Error(`${err}`)
      }
    } else {
      alert("Please enter a name and a phone number")
    }

  }

  async function deleteEntry(e) {
    let id = e.target.dataset.id;
    const URL = `${baseURL}/${id}`;

    try{
      const request = await fetch(URL, {method: "DELETE"});
      const response = await request.json();

      if (request.status === 200) {
        phonebookUL.innerHTML = '';
        loadPhoneBook();
      } else {
        throw new Error(`Status error: ${request.status}`)
      }
    }
    catch (err) {
      throw new Error(`${err}`);
    }
  }
}

attachEvents();

// GET & POST http://localhost:3030/jsonstore/phonebook
// DELETE http://localhost:3030/jsonstore/phonebook/:key> , where :key is the unique key of the entry 