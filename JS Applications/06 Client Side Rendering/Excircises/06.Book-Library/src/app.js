import { render } from "../../../../../../node_modules/lit-html/lit-html.js";
import * as api from "./api.js"
import { renderMain, renderTable } from "./templates/main.js"

const body = document.querySelector('body');
render(renderMain(), body);

const loadBtn = document.querySelector("#loadBooks")
loadBtn.addEventListener("click", loadBooks)
const tableBody = document.querySelector('tbody')

export async function loadBooks(event) {
  let response = await api.get("");
  const data = Object.entries(response);
  render(renderTable(data), tableBody);
}

