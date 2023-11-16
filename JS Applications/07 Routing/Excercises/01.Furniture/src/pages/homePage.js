import { html, render } from "../../../../../../node_modules/lit-html/lit-html.js";
import * as utils from '../utils.js'
import { updateNav } from "../app.js";

const root = document.querySelector("#root")

const cards = (data) => html`
  <div class="row space-top">
  <div class="col-md-12">
  <h1>Welcome to Furniture System</h1>
  <p>Select furniture from the catalog to view details.</p>
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

export async function renderCatalog() {
  const data = await utils.loadAllFurniture();
  render(cards(data), root);
  updateNav();
}



