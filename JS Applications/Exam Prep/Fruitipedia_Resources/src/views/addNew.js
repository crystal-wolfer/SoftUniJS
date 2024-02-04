import { html } from '../../node_modules/lit-html/lit-html.js'
import { createNew } from '../data modules/fruits.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (create) => html`
  <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form class="create-form" @submit=${create}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
        />
        <input
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image"
        />
        <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>
`

export async function createPage(ctx) {
  ctx.render(template(createFormSubmitHandler(create)));

  async function create(data) {
    let { name, imageUrl, description, nutrition } = data;
    if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
      return alert(`All fields are required!`)
    } 
    let body = {
        name,
        imageUrl,
        description,
        nutrition
      }
    await createNew(body);
    ctx.page.redirect('/fruits')

  }
}