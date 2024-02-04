import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js'
import { register } from '../data modules/auth.js';


//TODO: Replace with actual html
const template = (onRegister) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit = ${onRegister}>
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
      </form>
    </div>
  </section>
`

export function registerPage(ctx){
  ctx.render(template(createFormSubmitHandler(onRegister)));

  async function onRegister({email, password, "re-password": rePass}, form){
    if(email == ''|| password == ''|| rePass == ''){
      return alert ('Please enter all fields')
    }
    if(rePass !== password){
      return alert ('Passwords do not match');
    }

    await register(email, password);
    form.reset();
    ctx.page.redirect('/')
  }
}