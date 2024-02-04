import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllFacts } from '../data modules/facts.js';

const template = (facts) => html`
<h2>Fun Facts</h2>
  ${facts.length > 0 ? html`
    <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
      ${facts.forEach(fact => renderFact(fact))}
      //${facts.map(renderFact)}
    </section>` : html `
      <!-- Display an h2 if there are no posts -->
      <h2>No Fun Facts yet.</h2>
  `}`

export async function dashboardPage(ctx) {
  const facts = await getAllFacts();
  ctx.render(template(facts));
}

function renderFact(fact){
  let num = `${fact.imageUrl.charAt(13)}`;
  const factTempl =  html `
    </div><div class="fact">
      <img src=${fact.imageUrl} alt="example${num}"/>
      <h3 class="category">${fact.category}</h3>
      <p class="description">${fact.description}</p>
      <a class="details-btn" href="/fun-facts/${fact._id}">More Info</a>
    </div>
  `
  return factTempl
}