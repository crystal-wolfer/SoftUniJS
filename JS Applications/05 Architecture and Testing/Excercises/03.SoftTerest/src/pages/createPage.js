import { sections } from "../app.js";
import * as api from "../api.js";
import { dataValidator } from "../auth.js";

export function showCreatePage(context) {
  context.renderSection(sections.createPage);
  const formData = new FormData(document.querySelector('form'));
  document.querySelector('form').addEventListener('submit', create);
}


async function create(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const title = formData.get('title');
  const descr = formData.get('description');
  const img = formData.get('imageURL');

  const url = '/data/ideas'

  if (dataValidator(title, descr, img)) {
    await api.post(url, { title, description: descr, img })
    document.querySelector('form').reset();
    alert('You have successfully submitted your idea.');
  } else {
    alert('Please provide all required inputs');
  }

}