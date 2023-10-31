async function getRecipes() {
    const response = await fetch('http://localhost:3030/data/recipes?select=_id%2Cname%2Cimg');
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/data/recipes/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    return result;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    // show the buttons depending if the user is logged in or not
    let isUserLogged = sessionStorage.getItem('accessToken');
    if (isUserLogged == undefined) {
        // if the user is not logged in: show the guestDiv
        const guestDiv = document.querySelector("#guest");
        guestDiv.style.display = 'inline-block';
    } else {
        // if the user is logged in: show the userDiv
        const userDiv = document.querySelector("#user");
        userDiv.style.display = 'inline-block';
    }

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
});

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}

// Handle logout
let logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', logout)

async function logout(e) {
    e.preventDefault();

    // set the URL and the request parameters
    const url = 'http://localhost:3030/users/logout'
    const reqBody = {
        method: 'GET',
        headers: {
            'content-type': 'application/json', // for REST API calls that work with JSON
            'X-Authorization': sessionStorage.getItem('accessToken') // for the authorization on siftuni API
        },
    }

    try {
        // send the request
        let response = await fetch(url, reqBody);
        if (response.status === 204) {
            // remove the token from the sessionStorage
            sessionStorage.removeItem('accessToken')
            window.location = 'index.html';

        } else {
            throw new Error(`Invalid response ${response.status} ${response.message}`);
        }
    } catch (e){
        console.log(`failed to fetch`);
    }
}
