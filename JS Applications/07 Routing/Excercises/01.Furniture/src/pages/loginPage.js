import { html, render } from "../../node_modules/lit-html/lit-html.js"
import * as utils from '../utils.js'
import page from "../../node_modules/page/page.mjs"

const root = document.querySelector("#root")

const template = () => {
  return html`
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form>
      <div class="row space-top">
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-control-label" for="email">Email</label>
              <input class="form-control" id="email" type="text" name="email">
            </div>
            <div class="form-group">
              <label class="form-control-label" for="password">Password</label>
              <input class="form-control" id="password" type="password" name="password">
            </div>
            <input type="submit" @click = ${onClick} class="btn btn-primary" value="Login" />
          </div>
      </div>
    </form>
  `
}

export function renderLogin() {
  render(template(), root)
}


async function onClick(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  const formData = new FormData(form)

  //const {email, password} = Object.fromEntries(formData); 

  // THIS can replaced by the above
  const email = formData.get('email')
  const pass = formData.get('password')

  if (email && pass) {
    await utils.login(email, pass);
    page.redirect('/')
  } else{
    alert('Please enter your email and password');
  }
}


