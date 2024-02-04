import { html } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '../data modules/auth.js'

export const layoutTemplate = (userData, content) => html`
  <header>
    <!-- Navigation -->
      <a id="logo" href="/">
      <img id="logo-img" src="./images/logo.png" alt=""/></a>

    <nav>
        <div>
          <a href="/fun-facts">Fun Facts</a>
        </div>
        ${userData ? html`
        <!-- Logged-in users -->
        <div class="user">
          <a href="/add-fun-fact">Add Fact</a>
          <a href="" @click = ${logout}>Logout</a>
        </div>` : html`
          <!-- Guest users -->
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