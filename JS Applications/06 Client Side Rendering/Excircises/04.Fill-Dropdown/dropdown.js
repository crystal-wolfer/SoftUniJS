import { html, render } from "../../../../node_modules/lit-html/lit-html.js";

let response
const select = document.getElementById("menu");
const form = document.querySelector("form");
form.addEventListener("submit", addItem);
const url = `http://localhost:3030/jsonstore/advanced/dropdown`

async function addItem(event) {
  event.preventDefault();

  // POST request
  const data = {
    text: document.getElementById('itemText').value,
  }
  const reqBody = {
    method: 'POST',
    headers: {
      'content-type': 'application/json', // for REST API calls that work with JSON
    },
    body: JSON.stringify(data)
  }

  try {
    const request = await fetch(url, reqBody);
    if (request.status === 200) {
      const response = await request.json();
      renderList();
      alert(`Successfully added ${response.text}`);
      form.reset() // resets the form inputs
    } else {
      alert(`Error: ${request.status} ${request.message}`);
    }
  }
  catch (e) {
    alert(`Error fetching: ${e.message}`);
  }
}

async function renderList() {
  // GET request
  try {
    const request = await fetch(url);
    if (request.status === 200) {
      response = await request.json();
    } else {
      alert(`Error: ${request.status} ${request.message}`);
    }
  }
  catch (e) {
    alert(`Error fetching: ${e.message}`);
  }

  let array = Object.values(response);

  // html template
  const options = (data) => html`
  ${data.map((item) => html`<option value=${item._id}>${item.text}</option>`)}
`
  render(options(array), select)
}

renderList();


