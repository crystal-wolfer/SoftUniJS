import { html } from '../../node_modules/lit-html/lit-html.js'
import { createNew } from '../data modules/motors.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (create) => html`
  <section id="create">
    <h2>Add Motorcycle</h2>
    <div class="form">
      <h2>Add Motorcycle</h2>
      <form class="create-form" @submit=${create}>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Model"
        />
        <input
          type="text"
          name="imageUrl"
          id="moto-image"
          placeholder="Moto Image"
        />
        <input
        type="number"
        name="year"
        id="year"
        placeholder="Year"
      />
      <input
      type="number"
      name="mileage"
      id="mileage"
      placeholder="mileage"
    />
    <input
      type="text"
      name="contact"
      id="contact"
      placeholder="contact"
    />
      <textarea
        id="about"
        name="about"
        placeholder="about"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Motorcycle</button>
      </form>
    </div>
  </section>
`

export async function createPage(ctx) {
  ctx.render(template(createFormSubmitHandler(create)));

  async function create(data) {
    let { model, imageUrl, year, mileage, contact, about} = data;
    if (model == '' || imageUrl == '' || year == '' || mileage == '' || contact == '' || about == '') {
      return alert(`All fields are required!`)
    } 
    let body = {
        model,
        imageUrl,
        year,
        mileage,
        contact,
        about
      }
    await createNew(body);
    ctx.page.redirect('/motorcycles')

  }
  
}