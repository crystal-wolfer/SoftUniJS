import * as api from "../api.js";
import { sections } from "../app.js";
import { auth } from "../auth.js";


export async function showDetailsPage(context, id) {
  const detailsSection = sections.detailsPage
  context.renderSection(detailsSection);
  detailsSection.addEventListener('click', deleteClickHandler);

  const url = `/data/ideas/${id}`
  const idea = await api.get(url)

  detailsSection.innerHTML = renderHTML(idea);

  const delBtnDiv = document.querySelector('.text-center');

  if (sessionStorage.getItem("user")) {
    const userData = JSON.parse(sessionStorage.getItem("user"));

    if (userData._id === idea._ownerId) {
      detailsSection.appendChild(delBtnDiv);
    }else {
      detailsSection.removeChild(delBtnDiv);
    }
  } else {
    detailsSection.removeChild(delBtnDiv);
  }

  function deleteClickHandler(event) {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const id = event.target.dataset.id;
      const ownerId = event.target.dataset.owner;

      if (id && auth.isOwner(ownerId)) {
        api.del(`/data/ideas/${id}`)
        context.goTo('/dashboard')
      }

    }
  }
}

function renderHTML(idea) {
  const html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
      <h2 class="display-5">${idea.title}</h2>
      <p class="infoType">Description:</p>
      <p class="idea-description">${idea.description}</p>
    </div>
    <div class="text-center">
      <a class="btn detb" data-id = "${idea._id}" data-owner= "${idea._ownerId}" href="" >Delete</a>
    </div>
  `
  return html
}

