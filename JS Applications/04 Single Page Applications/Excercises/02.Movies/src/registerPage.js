import { pages } from "./app.js";
import { homePage } from "./homePage.js";

export function registerPage() {
  const bodyContainer = document.getElementById('container');
  const nav = document.querySelector('nav');

  bodyContainer.innerHTML = '';
  bodyContainer.appendChild(nav);
  bodyContainer.appendChild(pages.register);

  // make a register request
  const registerForm = document.getElementById("register-form");
  registerForm.addEventListener('submit', register);
}

async function register(e) {
  e.preventDefault();
  const form = e.target; // assuming this function is attached to submit event
  const formData = new FormData(form); // assuming the form used name attributes
  const pass = formData.get("password");
  const rePass = formData.get("repeatPassword")

  // SOFTUNI API request requires email and password
  const user = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  // set the URL and the request parameters
  const url = 'http://localhost:3030/users/register'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // for REST API calls that work with JSON
    },
    body: JSON.stringify(user) // whatever you want to create as info can also be directly an object
  }

  let isLongEnough = pass.length >= 6 && rePass.length >= 6 ? true : false;
  let isTheSame = pass === rePass ? true : false;

  if (user.email && user.password && rePass && isTheSame && isLongEnough) {
    //send the request
    try {
      const request = await fetch(url, reqBody);

      if (request.status === 200) {
        let response = await request.json();
        // obj to keep all needed information about the user
        const userData = {
          id: response._id,
          accessToken: response.accessToken,
          email: response.email,
        }

        //store the userData
        sessionStorage.setItem('userData', JSON.stringify(userData));

        // clean form fields
        form.reset();

        // redirect to the home page
        homePage();

      } else {
        alert(`Server error: ${request.status} Message: ${request.message}`)
      }

    }
    catch (err) {
      alert(`Fetch error: ${err}`)
    }
  }

  else {
    if (!isTheSame) {
      alert(`Passwords do not match`)
      return
    } else if (!isLongEnough){
      alert(`Password must be at least 6 symbols in length`)
      return
    } else {
      alert(`You must fill all of the required fields`)
    }
  }

}
