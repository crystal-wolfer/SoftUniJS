import { sections } from "../app.js";
import * as api from "../api.js";


export function showLoginPage(context) {
  context.renderSection(sections.loginPage);
  const formData = new FormData(document.querySelector('form'))
  document.querySelector('form').addEventListener('submit', loggedIn);
  

  const signUpBtn = document.querySelector('p a');
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    context.goTo('/register')
  });

  async function loggedIn(event){
    event.preventDefault();
    const email = document.querySelector('#inputEmail').value;
    const password = document.querySelector('#inputPassword').value;
    
    await api.login(email, password);
    document.querySelector('form').reset();
    context.goTo('/');
  }

}
