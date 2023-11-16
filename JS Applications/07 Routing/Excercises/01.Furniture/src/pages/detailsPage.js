import { html, render } from "../../node_modules/lit-html/lit-html.js"
import * as utils from '../utils.js'
import { updateNav } from "../app.js";
import { onDelete } from "./delete.js";

const root = document.querySelector("#root")
const user = JSON.parse(sessionStorage.getItem('user'));
let isOwner

const details = (data) => {
  isOwner = data._ownerId === user?._id

  return html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Furniture Details</h1>
    </div>
  </div>
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${data.img} />
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Make: <span>${data.make}</span></p>
      <p>Model: <span>${data.model}</span></p>
      <p>Year: <span>${data.year}</span></p>
      <p>Description: <span>${data.description}</span></p>
      <p>Price: <span>${data.price}</span></p>
      <p>Material: <span>${data.material}</span></p>
      <div>
        ${isOwner
      ? html`
            <a href="/edit/${data._id}" class="btn btn-info">Edit</a>
            <a href="javascript:void(0)" data-id="${data._id}" class="btn btn-red">Delete</a>`
      : null}
      </div>
    </div>
  </div>
`}

export async function renderDetails(ctx) {
  const id = ctx.params.id
  const data = await utils.furnitureById(id);
  render(details(data), root);
  updateNav();

  if (isOwner) {
    const deleteBtn = document.querySelector('.btn-red')
    deleteBtn.addEventListener('click', onDelete);
  }
}
