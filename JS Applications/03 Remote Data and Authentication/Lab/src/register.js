const form = document.querySelector('form');
form.addEventListener('submit', register);

async function register(e) {
  e.preventDefault();
  const formData = new FormData(form);

  // SOFTUNI API request requires email and password
  const userData = {
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
    body: JSON.stringify(userData) // whatever you want to create as info can also be directly an object
  }

  if (formData.get('password') !== formData.get('rePass')) {
    alert('Password doesnt match!')
  } else {
    // send the request
    let response = await fetch(url, reqBody);
    let responseResult = await response.json();

    // in order to keep the login token inside the sessionStorage of the browser we need to set it
    sessionStorage.setItem('accessToken', responseResult.accessToken)
    window.location = 'index.html';
  }
}

