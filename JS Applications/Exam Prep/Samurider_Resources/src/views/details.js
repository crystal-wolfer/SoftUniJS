import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteIt, getById } from '../data modules/motors.js'
import { getUserData } from '../utils.js'

const template = (motor, deleteItem) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${motor.imageUrl} alt="example1" />
      <p id="details-title">${motor.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${motor.year}</p>
          <p class="mileage">Mileage: ${motor.mileage} km.</p>
          <p class="contact">Contact Number: ${motor.contact}</p>
            <p id = "motorcycle-description">${motor.about}</p>
        </div>
  <!--Edit and Delete are only for creator-->
        ${motor.isOwner ? html`
          <div id="action-buttons">
            <a href="/motorcycles/${motor._id}/edit" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${deleteItem} id="delete-btn">Delete</a>
          </div>
        ` : null}
      </div>
    </div>
  </section>
`
export async function detailsPage(ctx){
  const id = ctx.params.id
  const motor = await getById(id);
  const userData = getUserData();
  if (userData && userData._id === motor._ownerId) {
    motor.isOwner = true;
  }
    
  ctx.render(template(motor, deleteItem));

  async function deleteItem(){
    const confirmation = confirm(`Are you sure you want to delete this item?`);
    if(confirmation) {
      await deleteIt(id); // id comes from the closeure above
      ctx.page.redirect('/motorcycles');
    }
  }
}