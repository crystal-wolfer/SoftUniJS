import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js'
import { login } from '../data modules/auth.js';


const template = (onLogin) => html`
  <section id="login">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Login</h2>
      <form class="login-form" @submit=${onLogin}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="/register">Create an account</a>
        </p>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>`

export function loginPage(ctx){
  ctx.render(template(createFormSubmitHandler(onLogin)));

  async function onLogin({email, password}, form){
    if (email == "" || password == ""){
      return alert("Please enter all the required fields");
    }
    
    await login(email, password);
    form.reset();
    ctx.page.redirect('/')
  }
}