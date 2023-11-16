//------------------------------------------------------------------------------------------//
// HTML-LIT TEMPLATES
import {html, render} from '../node_modules/lit-html/lit-html.js'

// 1. Define the function that generates the html template with the inputs it accepts
const htmlTemplate = () => html`<h2>Hello, Lit-HTML!</h2>`;
// 2. Use the render method to render the template into the dom element
render(htmlTemplate(), document.getElementById('div-main')); 

// check if user.id is set or not
${data._ownerId === user?.id} //? is covering the null case


// Handling FORM html element - must have "name" and "value" attributes
  // 1.Capture the form and set event listener to the button element
const form = document.getElementById("formID");
form.addEventListener("submit", submitFunction)

  //2. Keep the input as Map objects collections of key-value pairs.
async function submitFunction(e) {
  e.preventDefault(); // prevent the default page refresh
  const form = e.target
  let formData = new FormData(form);
  form.reset() // resets the form inputs
  const formDataArray = Array.from(formData.entries())


  //2* Map methods to access  different properties and values
  mapName.get('nameKey') - returns the value associated with the key nameKey
  mapName.set('nameKey', 'newValue') - changes the value associated with the key nameKey it doens't change the value attribute
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
    let request = await fetch(url, reqBody);
    let response = await response.json();

    // in order to keep the login token inside the sessionStorage of the browser we need to set it
    sessionStorage.setItem('email', response.email)
    sessionStorage.setItem('accessToken', response.accessToken)

    // more sophisticated way to keep the user information in the session
    // obj to keep all needed information about the user
    const userData = {
      id: response._id,
      accessToken: response.accessToken,
      email: response.email,
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));

    const data = sessionStorage.getItem('userData');
    const getUserData = JSON.parse(data); // convert it into an object
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

//------------------------------------------------------------------------------------------//
  // AJAX GET Request
  const httpRequest = new XMLHttpRequest();
  httpRequest.addEventListener("readystatechange",function () {
     if (httpRequest.readyState === 4 && httpRequest.status === 200){
      // write the logic
      //httpRequest.responseText -> the returned response as and arr of objects
     }
  });

  httpRequest.open('GET', url);
  httpRequest.send();

  // AJAX POST Request

  const postReq = new XMLHttpRequest();
  const obj = {
    "firstName": fName,
    "lastName": lName,
    "facultyNumber": facNum,
    "grade": Number(grade).toFixed(2),
  }

  // send tht data to the server
  postReq.open('POST', URL, true);
  postReq.setRequestHeader("Content-Type", "application/json");
  const data = JSON.stringify(obj);
  postReq.send(data);

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
  

//------------------------------------------------------------------------------------------//
 // Proper error handling for API requests
    // Making GET request and handling the response errors
    try{
      const request = await fetch(url, reqBody);
      if (request.status === 200){
        const response = await request.json();
      } else {
        divCatches.textContent = `Server error: ${request.status} Message: ${request.message}`;
      }
    }
    catch (err) {
      divCatches.textContent = `Fetch error: ${err}`
    }



// Date in UTC
var now = new Date(); // Create a Date object with the current date and time
var utcNow = new Date(now.toISOString()); // Convert to UTC by using ISO format

console.log(utcNow.toISOString()); // UTC time in ISO format