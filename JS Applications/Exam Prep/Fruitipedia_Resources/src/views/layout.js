import { html } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '../data modules/auth.js'

//TODO: add the applicable layout 
export const layoutTemplate = (userData, content) =>html` 
    <header>
        <!-- Navigation -->
        <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/fruits">Fruits</a>
            <a href="/search">Search</a>
          </div>
          ${userData ? html`
          <div class="user">
            <a href="/add-fruit">Add Fruit</a>
            <a href="javascript:void(0)" @click = ${logout}>Logout</a>
          </div>` : html`
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
          `}
        </nav>
    </header>
    <main>
      ${content}
    </main> 
  `