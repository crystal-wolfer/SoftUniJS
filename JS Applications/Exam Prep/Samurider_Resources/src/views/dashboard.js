import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAll } from "../data modules/motors.js";
import { createFormSubmitHandler } from '../utils.js';


const template = (motors) => html`
  <h2>Available Motorcycles</h2>
    ${motors.length > 0 ? html`
      <section id="dashboard">
        ${motors.map(renderMotor)}
      </section>
    `: html `
      <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>
    `}`

export async function dashboardPage(ctx) {
  const motors = await getAll();
  ctx.render(template(motors));
}

function renderMotor(motor){
 return html `
    <div class="motorcycle">
      <img src=${motor.imageUrl} alt="example1" />
      <h3 class="model">${motor.model}</h3>
      <p class="year">Year: ${motor.year}</p>
      <p class="mileage">Mileage: ${motor.mileage} km.</p>
      <p class="contact">Contact Number: ${motor.contact}</p>
      <a class="details-btn" href="/motorcycles/${motor._id}">More Info</a>
    </div>`
}

