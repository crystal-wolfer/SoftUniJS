import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from '../data modules/characters.js'

const template = (characters) => html`
<h2>Characters</h2>
  ${characters.length > 0 ? html`
  <section id="characters">
    <!-- Display a div with information about every post (if any)-->
    ${characters.map(renderChar)}
  </section>` : html`
   <!-- Display an h2 if there are no posts -->
   <h2>No added Heroes yet.</h2>
   `}`

export async function dashboardPage(ctx) {
  const characters = await getAll();
  ctx.render(template(characters));
}

function renderChar(char){
  let num = `${char.imageUrl.charAt(14)}`;
  const charTempl =  html `
    <div class="character">
      <img src=${char.imageUrl} alt="example" />
      <div class="hero-info">
        <h3 class="category">${char.category}</h3>
        <p class="description">${char.description}</p>
        <a class="details-btn" href="/characters/${char._id}">More Info</a>
      </div>
    </div>
  `
  return charTempl
}

