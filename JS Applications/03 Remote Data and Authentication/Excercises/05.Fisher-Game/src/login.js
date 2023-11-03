// Capture elements
const navHomeBtn = document.querySelector('#home');
const navLogoutBtn = document.querySelector('#user #logout');
const navLoginBtn = document.querySelector('#guest #login');
const navRegisterBtn = document.querySelector('#guest #register');
const form = document.querySelector('section form');
const pNotify = document.querySelector('form .notification');

// Hide not needed nav items and change active class
navLogoutBtn.style.display = 'none';
navHomeBtn.classList.remove('active');
navLoginBtn.classList.add('active');

form.addEventListener('submit', login)

async function login(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const user = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  // set the URL and request parameters
  const url = 'http://localhost:3030/users/login'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json' // for REST API calls that work with JSON
    },
    body: JSON.stringify(user)
  }

  try {
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      const response = await request.json();

      // obj to keep all needed information about the user
      const userData = {
        id: response._id,
        accessToken: response.accessToken,
        email: response.email,
      }

      sessionStorage.setItem('userData', JSON.stringify(userData));
      window.location = 'index.html';
    } else {
      const response = await request.json();
      pNotify.textContent = `Opps! ${response.message}`
    }
  }
  catch (err) {
    pNotify.textContent = `Fetch error: ${err}`
  }

}

