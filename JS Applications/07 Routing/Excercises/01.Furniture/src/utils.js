import * as api from './api.js'

// -------- Adding Functions That Handle The Requests ------------

const urlList = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
}

//Login function
export async function login(email, password) {
  // make the request and wait for the response
  const user = await api.post(urlList.login, { email, password, });
  //set the user data in the sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));
}


// Logout function
export async function logout() {
  const user = api.get(urlList.logout)
  sessionStorage.removeItem("user");
}

// Register function
export async function register(email, password) {
  // make the request and wait for the response
  const user = await api.post(urlList.register, { email, password,});
  //set the user data in the sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));
}

// -------- Adding Functions That Handle The Requests ------------

const ulrBase = {
  allFurniture: "/data/catalog",
  furnitureById: "/data/catalog/",
  myFurniture: "/data/catalog?where=_ownerId%3D%22"
}

// Load all furniture
export function loadAllFurniture(){
  return api.get(ulrBase.allFurniture);
}

// Load furniture by ID
export function furnitureById(id){
  return api.get(`${ulrBase.furnitureById}${id}`);
}

// Load MY furnitures
export function myFurniture(userId){
  return api.get(`${ulrBase.myFurniture}${userId}%22`);
}