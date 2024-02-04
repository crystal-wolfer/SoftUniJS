import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, updateIt } from '../data modules/characters.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (char, edit) => html`
  <section id="edit">
    <div class="form">
      <img class="border" src="./images/border.png" alt="">
      <h2>Edit Character</h2>
      <form class="edit-form" @submit=${edit}>
        <input
        type="text"
        name="category"
        .value = ${char.category}
        id="category"
        placeholder="Character Type"
      />
      <input
        type="text"
        name="image-url"
        .value = ${char.imageUrl}
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
      id="description"
      name="description"
      .value = ${char.description}
      placeholder="Description"
      rows="2"
      cols="10"
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      .value = ${char.moreInfo}
      placeholder="Additional Info"
      rows="2"
      cols="10"
    ></textarea>
        <button type="submit">Edit</button>
      </form>
      <img class="border" src="./images/border.png" alt="">
    </div>
  </section>
`

export async function editPage(ctx) {
  const id = ctx.params.id
  const char = await getById(id);
  ctx.render(template(char, createFormSubmitHandler(edit)));

  async function edit(data) {
      let { category, "image-url": imageUrl, description, "additional-info": moreInfo} = data;
      if (category == '' || imageUrl == '' || description == '' || moreInfo == '') {
         return alert(`All fields are required!`)
      } 
      let body = {
        category,
        imageUrl,
        description,
        moreInfo
      }
      await updateIt(id, body);
      ctx.page.redirect('/characters/' + id);
  }
}