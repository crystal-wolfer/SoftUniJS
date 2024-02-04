import { html } from '../../node_modules/lit-html/lit-html.js'
import { logout } from '../data modules/auth.js'

//TODO: add the applicable layout 
export const layoutTemplate = (userData, content) =>html` 
    <nav>
      <a href="/">Home</a>
      ${userData ? html `
      <a href="javascript:void(0)" @click=${logout}>Logout</a>` : html `
      <a href="/login">Login</a>
      <a href="/register">Register</a>`
      }
      
      
    </nav>
    <main>
      ${content}
    </main> 
  `