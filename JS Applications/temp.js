// Handling FORM html element - must have "name" and "value" attributes
  // 1.Capture the form and set event listener to the button element
const form = document.getElementById("formID");
form.addEventListener("submit", submitFunction)

  //2. Keep the input as Map objects collections of key-value pairs.
async function submitFunction(e) {
  e.preventDefault(); // prevent the default page refresh
  const form = e.target
  let formData = new FormData(form);

  //2* Map methods to access  different properties and values
  mapName.get('nameKey') - returns the value associated with the key nameKey
  mapName.set('nameKey', 'newValue') - changes the value associated with the key nameKey
  mapName.size - returns the number of elements in the map
  mapName.delete('nameKey') - deletes the value associated with the key nameKey
  let arrayMap = [... mapName.entries()] - returns an array of arrays with the key-value pairs
  mapName.clear() - removes all elements from the map 
}


// CRUD operations for API calls
  //1. GET
  const url = 'YOUR_API_URL'
  const reqBody = {
    method: 'GET'
  }

  //2. POST
  const user = {
    name: mapName.get('name'),
    age: mapName.get('age'),
  }
  const url = 'YOUR_API_URL'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // for REST API calls that work with JSON
      'X-Authorization': '{token}' // for the authorization on siftuni API
    }, 
    body: JSON.stringify(user) // whatever you want to create as info can also be directly an object
  }

  //3. DELETE
    //3* when creating the HTML element for the DELETE button we can attach the ID of the record so that it can be accessed easily using the dataset attribute
  deleteBtn.dataset.id = id // you mush provide the id of the record to the function that creates the button
  const id = deleteBtn.dataset.id

  const url = `YOUR_API_URL/${id}`
  const reqBody = {
    method: 'DELETE',
    headers: { //if authorization is needed
      'X-Authorization': '{token}' // for the authorization on siftuni API
    }
  }
 
  //4. PUT
  const form = e.target
  const idValue = form.getElementById('id')
  const id = idValue.value // you must set a hidden field on the form and pass the id value to it
  const user = {
    name: mapName.get('name'),
    age: mapName.get('age'),
    _id: id
  }
  const url = `YOUR_API_URL/${id}`
  const reqBody = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json' // for REST API calls that work with JSON
      'X-Authorization': '{token}' // for the authorization on siftuni API
    }, 
    body: JSON.stringify(user) // whatever you want to create as info can also be directly an object
  }


//------------------------------------------------------------------------------------------//

  // Login and Register = absolutelly the same flow

    // 1. Login API request flow
  async function login(e){
    const form = e.target; // assuming this function is attached to submit event
    const formData = new FormData(form); // assuming the form used name attributes

    // SOFTUNI API request requires email and password
    const userData = {
      email: formData.get('email'),
      password: formData.get('password') 
    }

    // set the URL and the request parameters
    const url = 'http://localhost:3030/users/login'
    const reqBody = {
      method: 'POST',
      headers: {
        'content-type': 'application/json' // for REST API calls that work with JSON
      }, 
      body: JSON.stringify(userData) // whatever you want to create as info can also be directly an object
    }

    // send the request
    let response = await fetch(url, reqBody);
    let responseResult = await response.json();

    // in order to keep the login token inside the sessionStorage of the browser we need to set it
    sessionStorage.setItem('email', responseResult.email)
    sessionStorage.setItem('accessToken', responseResult.accessToken)
  }


    //2. Logout request
  async function login(e){
     // set the URL and the request parameters
    const url = 'http://localhost:3030/users/login'
    const reqBody = {
      method: 'GET',
      headers: {
        'content-type': 'application/json', // for REST API calls that work with JSON
        'X-Authorization': '{token}' // for the authorization on siftuni API
      }, 
    }

    try {
      // send the request
      let response = await fetch(url, reqBody);
      // according to documentation successful request will return 204 
      if (response.status === 204) {
        // remove the token from the sessionStorage
        sessionStorage.removeItem('accessToken')
        // redirect to the home page
        window.location = 'index.html';
      } else {
        throw new Error(`Invalid response ${response.status} ${response.message}`);
      }
    } catch (e) {
      console.log(`failed to fetch`);
    }
  } 

