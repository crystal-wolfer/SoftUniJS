import { html } from '../../node_modules/lit-html/lit-html.js'
import { getById, updateIt } from '../data modules/motors.js'
import { createFormSubmitHandler } from '../utils.js'

const template = (motor,edit) => html`
  <section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
      <h2>Edit Motorcycle</h2>
      <form class="edit-form" @submit=${edit}>
        <input
          type="text"
          name="model"
          .value = ${motor.model}
          id="model"
          placeholder="Model"
        />
        <input
          type="text"
          name="imageUrl"
          .value = ${motor.imageUrl}
          id="moto-image"
          placeholder="Moto Image"
        />
        <input
          type="number"
          name="year"
          .value = ${motor.year}
          id="year"
          placeholder="Year"
        />
        <input
          type="number"
          name="mileage"
          .value = ${motor.mileage}
          id="mileage"
          placeholder="mileage"
        />
        <input
          type="number"
          name="contact"
          .value = ${motor.contact}
          id="contact"
          placeholder="contact"
        />
        <textarea
          id="about"
          name="about"
          .value = ${motor.about}
          placeholder="about"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Edit Motorcycle</button>
      </form>
    </div>
  </section>
`

export async function editPage(ctx) {
  const id = ctx.params.id
  const motor = await getById(id);
  ctx.render(template(motor, createFormSubmitHandler(edit)));

  async function edit(data) {
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
      await updateIt(id, body);
      ctx.page.redirect('/motorcycles/' + id);

  }
}