import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js';
import { createFact } from '../data modules/facts.js';

const template = (create) => html`
<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form class="create-form" @submit=${create}>
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
              id="additional-info"
              name="additional-info"
              placeholder="Additional Info"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`

export function createPage(ctx) {
  ctx.render(template(createFormSubmitHandler(create)));

  async function create(data) {
    let { category, "image-url": imageUrl, description, "additional-info": moreInfo } = data;
    if (category == '' || imageUrl == '' || description == '' || moreInfo == '') {
      return alert(`All fields are required!`)
    } 
    let body = {
        category,
        imageUrl,
        description,
        moreInfo
      }
    await createFact(body);
    ctx.page.redirect('/fun-facts')

  }
}