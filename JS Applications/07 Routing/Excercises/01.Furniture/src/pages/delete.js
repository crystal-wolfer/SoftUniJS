import * as api from "../api.js"
import page from "../../../../../../node_modules/page/page.mjs"


export async function onDelete(event) {
  event.preventDefault();
  const id = event.target.dataset.id

  const url = `/data/catalog/${id}`
  let confirmation = confirm("Are you sure you want to delete this item?")
  if (confirmation) {
    await api.del(url)
    page.redirect('/')
  }
}