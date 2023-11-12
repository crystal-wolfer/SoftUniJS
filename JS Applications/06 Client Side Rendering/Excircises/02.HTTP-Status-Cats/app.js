import { html, render } from "../../../../node_modules/lit-html/lit-html.js";
import {cats} from './catSeeder.js'

const section = document.getElementById("allCats")

function ulTempl(data){
  const ul = html `
    <ul>
      ${data.map((cat) => htmlCat(cat))}
    </ul>
  `
  return ul;
}


function htmlCat(data){
  const li = html `
    <li>
      <img src="./images/${data.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
      <div class="info">
        <button class="showBtn" @click = ${onClick}>Show status code</button>
        <div class="status" style="display: none" id=${data.id}>
          <h4>Status Code: ${data.statusCode}</h4>
          <p>${data.statusMessage}</p>
        </div>
      </div>
    </li>
  `
  return li;
} 

function onClick(event) {
  event.preventDefault();
  const btn = event.target
  const div = btn.parentElement.children[1]
  if (btn.textContent === "Show status code"){
    div.style.display = "block";
    btn.textContent = "Hide status code";
  } else {
    div.style.display = "none";
    btn.textContent = "Show status code";
  }
}

function renderCats(input) {
  render(ulTempl(input), section);
}
renderCats(cats);

