//POST http://localhost:3030/data/recipes
form.addEventListener('submit', createRecipe);


async function createRecipe(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  //let ingredientsAsArray = [formData.get('ingredients').split('\n')];
  //let stepsAsArray = [formData.get('steps').split('\n')];

  const recipeData = {
    name: formData.get('name'),
    img: formData.get('img'),
    ingredients: formData.get('ingredients').split('\n'), //has to be done here because if not it becomes array of array
    steps: formData.get('steps').split('\n')
  }

  // set the URL and the request parameters
  const url = 'http://localhost:3030/data/recipes'
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // for REST API calls that work with JSON
      'X-Authorization': sessionStorage.getItem('accessToken')
    },
    body: JSON.stringify(recipeData) // whatever you want to create as info can also be directly an object
  }

  try {
    // send the request
    let response = await fetch(url, reqBody);
    if (response.status === 200) {
      window.location = 'index.html';
    }else{
      throw new Error(`Request failed with status ${response.status} message ${response.message}`);
    }
  } catch (err) {
    console.log(`Failed to fetch data from server`);
  }

}