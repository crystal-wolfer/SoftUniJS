const host = 'http://localhost:3030';
import * as user from '../utils.js'

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


  // check if we have a user
  const userData = user.getUserData();
  if (userData) {
    reqBody.headers["content-type"] = "application/json";
    reqBody.headers["X-Authorization"] = userData.accessToken;
  }


  try {
    const request = await fetch(`${host}${url}`, reqBody);

    if (request.ok) {
      // extra check to make sure logout doesnt throw an error
      if (request.status === 200) {
        return await request.json();
      }
    } else if (request.status == 403) {
      // this status is returned when the token is no longer valid 
      user.clearUserData();
      const response = await request.json();
      throw response
    } else {
      throw `Invalid response ${request.status} ${request.message}`;
    }

  }
  catch (err) {
    alert(err.message);
    throw (err.message);
  }
}

// bind method creates a bound funcion that has the same body, doing this means that we can call specific methods instead of passing it into the function. Null is because our function doesnt have multiple methods inside and we don't need it 
export const get = makeRequest.bind(null, "GET")
export const post = makeRequest.bind(null, "POST")
export const put = makeRequest.bind(null, "PUT")
export const del = makeRequest.bind(null, "DELETE")
