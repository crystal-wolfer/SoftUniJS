import { html, render } from "../../node_modules/lit-html/lit-html.js"
import * as utils from '../utils.js'
import { updateNav } from "../app.js";

const root = document.querySelector("#root")

const cards = (data) => html`
  <div class="row space-top">
  <div class="col-md-12">
  <h1>My Furniture</h1>
  <p>This is a list of your publications.</p>
  </div>
  </div>
  <div class="row space-top">
    ${data.map(card => item(card))}
  </div>
`

const item = (data) => html`
  <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=${data.img}/>
            <p>${data.description}</p>
            <footer>
            <p>Price: <span>${data.price} $</span></p>
            </footer>
        <div>
          <a data-id=${data._id} data-owner=${data._ownerId} href="/details/${data._id}" class="btn btn-info">Details</a>
        </div>
      </div>
    </div>
  </div>
`

export async function renderPublications() {
  const userData = JSON.parse(sessionStorage.getItem('user'));
  const userId = userData._id
  const data = await utils.myFurniture(userId);
  render(cards(data), root);
  updateNav();
}