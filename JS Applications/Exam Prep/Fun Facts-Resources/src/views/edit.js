import { html } from '../../node_modules/lit-html/lit-html.js'
import { createFormSubmitHandler } from '../utils.js';
import { getFactById, updateFact } from '../data modules/facts.js';

const template = (fact, edit) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form class="edit-form" @submit=${edit}>
              <input
              type="text"
              name="category"
              .value = ${fact.category}
              id="category"
              placeholder="Category"
            />
            <input
              type="text"
              name="image-url"
              .value = ${fact.imageUrl}
              id="image-url"
              placeholder="Image URL"
            />
            <textarea
            id="description"
            name="description"
            .value = ${fact.description}
            placeholder="Description"
            rows="10"
            cols="50"
          ></textarea>
          <textarea
            id="additional-info"
            name="additional-info"
            .value = ${fact.moreInfo}
            placeholder="Additional Info"
            rows="10"
            cols="50"
          ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
`

export async function editPage(ctx) {
  const id = ctx.params.id
  const fact = await getFactById(id);
  ctx.render(template(fact, createFormSubmitHandler(edit)));

  async function edit(data) {
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
      await updateFact(id, body);
      ctx.page.redirect('/fun-facts/' + id);

  }
}