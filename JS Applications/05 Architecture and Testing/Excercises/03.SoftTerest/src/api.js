const baseUrl = 'http://localhost:3030';

async function makeRequest(method, url, data) {
  const reqBody = {
    method,
    headers: {

    },
  }

  // check if we pass data into the request then we want to have headers and body
  if (data !== undefined) {
    reqBody.headers["content-type"] = "application/json";
    reqBody.body = JSON.stringify(data);
  }

  // check if we have a user access token into the sessionstorage
  const userData = JSON.parse(sessionStorage.getItem('user'));

  if (userData) {
    reqBody.headers["content-type"] = "application/json";
    reqBody.headers["X-Authorization"] = userData.accessToken;
  }

  try {
    const request = await fetch(`${baseUrl}${url}`, reqBody);

    if (request.ok) {
      // extra check to make sure logout doesnt throw an error
      if (request.status === 200) {
        return request.json();
      }
    } else {
      throw new Error(`Invalid response ${request.status} ${request.message}`);
    }
  }
  catch (err) {
    alert(err.message);
    throw new Error(err.message);
  }
}

// bind method creates a bound funcion that has the same body, doing this means that we can call specific methods instead of passing it into the function. Null is because our function doesnt have multiple methods inside and we don't need it 
export const get = makeRequest.bind(null, "GET")
export const post = makeRequest.bind(null, "POST")
export const put = makeRequest.bind(null, "PUT")
export const del = makeRequest.bind(null, "DELETE")


// -------- Adding Functions That Handle The Requests ------------

const urlList = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout",
}

//Login function
export async function login(email, password) {
  // make the request and wait for the response
  const user = await post(urlList.login, { email, password, });
  //set the user data in the sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));
}


// Logout function
export async function logout() {
  const user = get(urlList.logout)
  sessionStorage.removeItem("user");
}

// Register function
export async function register(email, password) {
  // make the request and wait for the response
  const user = await post(urlList.register, { email, password,});
  //set the user data in the sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));
}
