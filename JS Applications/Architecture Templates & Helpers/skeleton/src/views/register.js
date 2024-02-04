import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js'
import { register } from '../data modules/auth.js';


//TODO: Replace with actual html
const template = (onRegister) => html`
  <h1>Login Page</h1>
  <form @submit=${onRegister}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat Password: <input type="password" name="rePass"></label>
    <button>Login</button>
  </form>`

export function registerPage(ctx){
  ctx.render(template(createFormSubmitHandler(onRegister)));

  // TODO: Change user object based on requirements and rename vars as needed example: "re-password": rePass
  async function onRegister({email, password, rePass}, form){
    if(email == ''|| password == ''|| rePass == ''){
      return alert ('Please enter all fields')
    }
    if(rePass !== password){
      return alert ('Passwords do not match');
    }

    await register(email, password);
    form.reset();
    //TODO: Change redirect route as required if necessary
    ctx.page.redirect('/')
  }
}