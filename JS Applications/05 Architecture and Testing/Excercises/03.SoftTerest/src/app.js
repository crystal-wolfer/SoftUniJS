// create a reference to the the different sections
export const sections = {
  homePage: document.getElementById("home-section"),
  registerPage: document.getElementById("register-section"),
  loginPage: document.getElementById("login-section"),
  dashboardPage: document.getElementById("dashboard-holder"),
  detailsPage: document.getElementById("details-section"),
  createPage: document.getElementById("create-section"),
}

// clean the page
document.getElementById("views").remove();

// imports
import { showHomePage } from "./pages/homePage.js"
import { showDashboardPage } from "./pages/dashboardPage.js";
import {showLoginPage } from "./pages/loginPage.js";
import {showRegisterPage } from "./pages/registerPage.js"
import {showDetailsPage } from "./pages/detailsPage.js";
import {showCreatePage } from "./pages/createPage.js";
import { initialize } from "./router.js";
import { logout } from "./pages/logoutHandler.js"

const routes = {
  '/': showHomePage,
  '/dashboard': showDashboardPage,
  '/login': showLoginPage,
  '/register': showRegisterPage,
  '/details': showDetailsPage,
  '/create': showCreatePage,
  '/logout': logout,
}

// set the home page
const router = initialize(routes)
router.goTo('/') // this should render the home page
router.updateNav() // this will update the navigation bar

