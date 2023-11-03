//Capture elements
const logOutNavBtn = document.querySelector('nav #logout');
const registerNavBtn = document.querySelector('nav #register');
const homeNavBtn = document.querySelector('nav #home');
const form = document.querySelector('form#register');
form.addEventListener('submit', register)
const pNotify = document.querySelector('form .notification');

// Hide not needed nav items and change active class
logOutNavBtn.style.display = 'none';
homeNavBtn.classList.remove('active');
registerNavBtn.classList.add('active');

async function register(e) {
  e.preventDefault();
  const form = e.target
  const formData = new FormData(form);
  const formDataArray = Array.from(formData.entries())

  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  // set the URL and the request parameters
  const url = 'http://localhost:3030/users/register'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // for REST API calls that work with JSON
    },
    body: JSON.stringify(user)
  }

  // Validate the entered passwords match
  if (formData.get('password') === formData.get('rePass')) {
    try {
      // send the request
      let request = await fetch(url, reqBody);
      let response = await request.json();

      if (request.status === 200) {
        // obj to keep all needed information about the user
        const userData = {
          id: response._id,
          accessToken: response.accessToken,
          email: response.email,
        }
        sessionStorage.setItem('userData', JSON.stringify(userData));
        window.location = 'index.html';
      } else {
        pNotify.textContent = `Error: ${response.message}`
      }
    }
    catch (err) {
      
    }
  } else {
    pNotify.textContent = `Passwords do not match`
  }

}