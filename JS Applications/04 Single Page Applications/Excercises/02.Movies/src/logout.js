import { homePage } from "./homePage.js";

export async function logout(){
  const userData = JSON.parse(sessionStorage.getItem('userData'))

  // set the URL and the request parameters
  const url = 'http://localhost:3030/users/logout'
  const reqBody = {
    method: 'GET',
    headers: {
      'content-type': 'application/json', // for REST API calls that work with JSON
      'X-Authorization': userData.accessToken
    },
  }

  try {
    const request = await fetch(url, reqBody);
    if (request.status === 204) {
      // remove userData
      sessionStorage.removeItem('userData');
      homePage();
    } else {
      throw new Error(`Invalid response ${request.status} ${request.message}`);
    }
  }
  catch (err) {
    throw new Error(err);
  }

}