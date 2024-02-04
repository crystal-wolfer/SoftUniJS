import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteIt, getById } from '../data modules/fruits.js'
import { getUserData } from '../utils.js'

const template = (fruit, deleteItem) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fruit.imageUrl} alt="example1" />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id = "details-nutrition">${fruit.nutrition}</p>
        </div>
        ${fruit.isOwner ? html`
          <div id="action-buttons">
            <a href="/fruits/${fruit._id}/edit" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${deleteItem} id="delete-btn">Delete</a>
          </div>` : null}
      </div>
    </div>
  </section>
`

export async function detailsPage(ctx){
  const id = ctx.params.id
  const fruit = await getById(id);
  const userData = getUserData();
  if (userData && userData._id === fruit._ownerId) {
    fruit.isOwner = true;
  }
    
  ctx.render(template(fruit, deleteItem));

  async function deleteItem(){
    const confirmation = confirm(`Are you sure you want to delete this item?`);
    if(confirmation) {
      await deleteIt(id); // id comes from the closeure above
      ctx.page.redirect('/fruits');
    }
  }
}