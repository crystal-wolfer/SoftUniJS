// TODO: Change user object according to project requirements - does it need more than just email and password???

import * as api from './api.js';
import { setUserData, clearUserData } from '../utils.js';
import page from '../../node_modules/page/page.mjs'


const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
}


//Login function
export async function login(email, password) {
  // make the request and wait for the response
  const user = await api.post(endpoints.login, { email, password, });
  //set the user data in the sessionStorage
  setUserData(user)
}


// Logout function TODO: Change where to redirect as required
export async function logout() {
  const user = api.get(endpoints.logout)
  clearUserData();
  page.redirect('/')
}

// Register function
export async function register(email, password) {
  // make the request and wait for the response
  const user = await api.post(endpoints.register, { email, password,});
  //set the user data in the sessionStorage
  setUserData(user)
}