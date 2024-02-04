//import * as api from './api.js'  -> NEEDS THE API 

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

// Function that creates form submit handler and passes trimeed data to the handler
export function createFormSubmitHandler(callback){
  return function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries([...formData.entries()].map(([key, value]) => [key, value.trim()]));

    callback(data, form); 
  }
}

// Loading elelent - to be cooler can get a ready element from codepen
// the template function must accept the isLoading bool example of such template
const template = (data, isLoading) => html`
  <h1>Page Title</h1>
  ${isLoading ? html`<p>Loading &hellip</p>` : html`... actual content` }
`

render(template([], true))

// Handling situations where we want to display states in between http requests
try {
  await ... 
} catch (err) {
  // Ignore or write logic that shows the error to the user
} finally {
  // the logic we want to include in any case should the call succeed or fail
}

// Function that gets the count of entries in the database
export function countEntries(){
  return api.get(`${ulrBase}?count`);
}

// Search function
export async function search(url, query){
  const searchParam = `label LIKE "${query}"`
  //encodeURIComponent() encodes symbols like = ""
  return api.get(`${ulrBase}/${url}?where=${encodeURIComponent(searchParam)}`) // accepts &count + pagination
}