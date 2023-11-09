import { sections } from "../app.js";
import * as api from "../api.js";

// we need a global variable for this module since we need the context in multiple functions
let curContext = null;

export async function showDashboardPage(context) {
  curContext = context;
  const dashboardSection = sections.dashboardPage
  curContext.renderSection(dashboardSection);
  dashboardSection.addEventListener('click', detailsClickHandler);
  context.updateNav();


  const url = "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc"
  const ideas = await api.get(url)

  // using map instead of loop
  dashboardSection.replaceChildren(...ideas.map(renderHTML))

}

function renderHTML(idea) {
  const div = document.createElement("div");
  div.className = "card overflow-hidden current-card details";
  div.style.width = "20rem";
  div.style.height = "18rem";

  div.innerHTML = `
    <div class="card-body">
    <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a class="btn" data-id = "${idea._id}" href="/details">Details</a>
  `

  return div
}


function detailsClickHandler(event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    const id = event.target.dataset.id;

    if (id) {
      curContext.goTo('/details', id)
    }

  }
}