import page from "../../node_modules/page/page.mjs"
import { renderCatalog } from './pages/homePage.js'
import { renderDetails } from './pages/detailsPage.js'
import { renderLogin } from './pages/loginPage.js'
import { renderRegister } from './pages/registerPage.js'
import { logoutFn } from './pages/logout.js'
import { renderCreate } from './pages/createPage.js'
import { renderEdit } from './pages/editPage.js'
import { renderPublications } from './pages/myPublicationsPage.js'



//capture elements
const navItems = {
  userNav: document.querySelector('#user'),
  guestNav: document.querySelector('#guest')
}



//update navigation function
export function updateNav() {
  const user = sessionStorage.getItem("user");
  const nav = document.querySelector('nav');
  const logoutBtn = document.querySelector('#logoutBtn');

  if (user) {
    if (nav.contains(navItems.guestNav)) {
      nav.removeChild(navItems.guestNav);
    }
    nav.appendChild(navItems.userNav);

  } else {
    if (nav.contains(navItems.userNav)) {
      nav.removeChild(navItems.userNav);
    }
    nav.appendChild(navItems.guestNav);
  }


  if (nav.contains(logoutBtn)) {
    logoutBtn.addEventListener('click', logoutFn);
  }
}
updateNav();
renderCatalog();

page("/", renderCatalog)
page("/details/:id", renderDetails)
page("/login", renderLogin)
page("/register", renderRegister)
page("/create", renderCreate)
page("/edit/:id", renderEdit)
page("/my-publications", renderPublications)
page.start();