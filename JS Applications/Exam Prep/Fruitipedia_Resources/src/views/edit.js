import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, updateIt } from '../data modules/fruits.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (fruit, edit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${edit}>
        <input
          type="text"
          name="name"
          .value = ${fruit.name}
          id="name"
          placeholder="Fruit Name"
        />
        <input
          type="text"
          name="imageUrl"
          .value = ${fruit.imageUrl}
          id="Fruit-image"
          placeholder="Fruit Image URL"
        />
        <textarea
          id="fruit-description"
          name="description"
          .value = ${fruit.description}
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          id="fruit-nutrition"
          name="nutrition"
          .value = ${fruit.nutrition}
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`

export async function editPage(ctx) {
  const id = ctx.params.id
  const fruit = await getById(id);
  ctx.render(template(fruit, createFormSubmitHandler(edit)));

  async function edit(data) {
      let { name, imageUrl, description, nutrition} = data;
      if (name == '' || imageUrl == '' || description == '' || nutrition == '') {
         return alert(`All fields are required!`)
      } 
      let body = {
        name,
        imageUrl,
        description,
        nutrition
      }
      await updateIt(id, body);
      ctx.page.redirect('/fruits/' + id);
  }
}