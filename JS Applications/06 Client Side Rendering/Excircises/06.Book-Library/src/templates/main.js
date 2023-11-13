import { html, render } from "../../../../../../node_modules/lit-html/lit-html.js";
import * as api from "../api.js"
import { loadBooks } from "../app.js";

export function renderMain() {
  const template = html`
    <button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <div id="form-container">
      <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" @click=${createItem} value="Submit">
      </form>
    </div>
  `
  return template;
}

export function renderEditForm(data, id) {

  const template = html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." value = ${data[1]}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." value = ${data[0]}>
        <input type="submit" data-id=${id} @click=${saveItem} value="Save">
    </form>
  `
  return template
}

function renderAddForm() {
  const template = html`
      <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" @click=${saveItem} value="Submit">
      </form>
  `
  return template
}

export function renderTable(data) {
  const template = html`
  ${data.map((row) => html`
  <tr>
    <td>${row[1].title}</td>
    <td>${row[1].author}</td>
    <td>
      <button data-id = ${row[0]} @click=${editItem}>Edit</button>
      <button data-id = ${row[0]} @click=${deleteItem}>Delete</button>
    </td>
  </tr>
  `)}`

  return template
}

async function editItem(event) {
  const id = event.target.dataset.id;
  const div = document.getElementById("form-container")
  const addForm = document.getElementById('add-form')
  // render the edit form
  let response = await api.get(`/${id}`);
  const data = Object.values(response);
  if (addForm) {
    div.removeChild(addForm)
  }
  render(renderEditForm(data, id), div);

}


async function deleteItem(event) {
  const id = event.target.dataset.id;
  await api.del(`/${id}`);
  loadBooks();
}

async function saveItem(event) {
  event.preventDefault();
  const id = event.target.dataset.id;
  const body = document.querySelector('body');
  const formData = new FormData(document.getElementById("edit-form"));
  const data = {
    author: formData.get("author"),
    title: formData.get("title")
  }
  await api.put(`/${id}`, data);
  const div = document.getElementById("form-container")
  const editForm = document.getElementById('edit-form')
  if (editForm) {
    div.removeChild(editForm)
  }
  render(renderAddForm(), div);

  loadBooks();

}

async function createItem(event) {
  event.preventDefault();
  const formData = new FormData(document.getElementById("add-form"));
  const data = {
    author: formData.get("author"),
    title: formData.get("title")
  }
  await api.post("", data);
  loadBooks();
  document.getElementById("add-form").reset();
}