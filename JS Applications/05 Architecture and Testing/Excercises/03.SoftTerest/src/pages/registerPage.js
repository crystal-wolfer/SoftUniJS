import { sections } from "../app.js";
import * as api from "../api.js";
import { registerValidator } from "../auth.js";

export function showRegisterPage(context) {
  context.renderSection(sections.registerPage);
  const formData = new FormData(document.querySelector('form'))
  document.querySelector('form').addEventListener('submit', register);

  const signInBtn = document.querySelector('p a');
  signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    context.goTo('/login')
  });

  async function register(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const pass = formData.get('password');
    const rePass = formData.get('repeatPassword');

    if (registerValidator(email, pass, rePass)) {
      await api.register(email, pass);
      document.querySelector('form').reset();
      context.goTo('/');
    } else {
      alert('Please enter all required fields, make sure passwors match and email and password are at least 3 characters long!');
    }

  }
}

