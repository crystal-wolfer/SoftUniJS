import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data modules/fruits.js';


const template = (fruits) => html`
  <h2>Fruits</h2>
  ${fruits.length > 0 ? html`
      <section id="dashboard">
        ${fruits.map(renderFruit)}
      </section>
    `: html `
      <h2>No fruit info yet.</h2>
    `}`

export async function dashboardPage(ctx) {
  const fruits = await getAll();
  ctx.render(template(fruits));
}

function renderFruit(fruit){
 return html `
    <div class="fruit">
      <img src=${fruit.imageUrl} alt="example1" />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="/fruits/${fruit._id}">More Info</a>
    </div>
  `
}

