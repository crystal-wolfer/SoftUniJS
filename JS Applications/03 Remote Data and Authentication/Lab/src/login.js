const form = document.querySelector('form');
form.addEventListener('submit', login);

async function login(e) {
  e.preventDefault();
  const formData = new FormData(form);

  // the API request requires email and password
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
  try {
    let response = await fetch(url, reqBody);
    let responseResult = await response.json();
    if (response.status === 200 && responseResult.email == sessionStorage.getItem('email')) {
      // in order to keep the login token inside the sessionStorage of the browser we need to set it
      sessionStorage.setItem('accessToken', responseResult.accessToken)
      window.location = 'index.html';
    } else {
      if (sessionStorage.getItem('accessToken') == undefined) {
        alert(`Failed to login: You have to register first.`);
      } else {
        alert(`Failed to login: ${ responseResult.message }`)
      }
    }
  }
  catch (err) {
    throw new Error(err);;
  }

}