import { html, render } from "../../../../../../node_modules/lit-html/lit-html.js";
import * as api from "../api.js"
import { updateNav } from "../app.js";
import page from "../../../../../../node_modules/page/page.mjs"


const root = document.querySelector("#root")
const user = JSON.parse(sessionStorage.getItem('user'));
let isFormValid = true;

const template = () => {
  return html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" @click = ${onClick} class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
  `
}

export async function renderCreate() {
  render(template(), root);
  updateNav();
}

async function onClick(event) {
  event.preventDefault();
  const form = document.querySelector('form');
  const formData = new FormData(form)
  const make = formData.get('make');
  const model = formData.get('model');
  const year = formData.get('year');
  const description = formData.get('description');
  const price = formData.get('price');
  const img = formData.get('img');
  const material = formData.get('material');
  const inputsArr = form.querySelectorAll('.form-control')

  let inputs = [];
  inputs.push(make, model, year, description, price, img);
  validateInput(inputsArr, inputs);


  if (isFormValid){
    const url = '/data/catalog'
    const data = {
      make,
      model,
      year,
      description,
      price,
      img,
      material,
    }
    await api.post(url, data);
    page.redirect("/");
  } else {
    console.log(`invalid input`); 
  }

}

function validateInput(arr, inputs){
  //make [0]
  inputs[0].length > 3 ? addClass(arr[0], true) : addClass(arr[0] , false)
  //model
  inputs[1].length > 3 ? addClass(arr[1], true) : addClass(arr[1] , false)
  //year
  inputs[2] > 1950 && inputs[2] < 2050 ? addClass(arr[2], true) : addClass(arr[2] , false)
  //description
  inputs[3].length > 10 ? addClass(arr[3], true) : addClass(arr[3] , false)
  //price
  inputs[4].length > 0 ? addClass(arr[4], true) : addClass(arr[4] , false)
  //img
  inputs[5].length > 0 ? addClass(arr[5], true) : addClass(arr[5] , false)
}

function addClass(el, bool){
  if(bool){
    el.classList.add('is-valid');
    if(el.classList.contains('is-invalid')){
      el.classList.remove('is-invalid');
      isFormValid = true;
    }
  }else if(!bool){
    el.classList.add('is-invalid');
    if(el.classList.contains('is-valid')){
      el.classList.remove('is-valid');
    }
    isFormValid = false;
  }
}