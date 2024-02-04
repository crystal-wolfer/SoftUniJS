import { html } from '../../node_modules/lit-html/lit-html.js'
import { createNew } from '../data modules/characters.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (create) => html`
  <section id="create">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Add Character</h2>
      <form class="create-form" @submit=${create}>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
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
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
        <button type="submit">Add Character</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export async function createPage(ctx) {
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
    await createNew(body);
    ctx.page.redirect('/characters')
  }
}