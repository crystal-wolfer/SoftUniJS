import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js'
import { login } from '../data modules/auth.js';


//TODO: Replace with actual html
const template = (onLogin) => html`
  <h1>Login Page</h1>
  <form @submit=${onLogin}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Login</button>
  </form>`

export function loginPage(ctx){
  ctx.render(template(createFormSubmitHandler(onLogin)));

  // TODO: Change user object based on requirements
  async function onLogin({email, password}, form){
    await login(email, password);
    form.reset();
    //TODO: Change redirect route as required if necessary
    ctx.page.redirect('/')
  }
}