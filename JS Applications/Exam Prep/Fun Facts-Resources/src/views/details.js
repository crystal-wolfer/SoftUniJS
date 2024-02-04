import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteFact, getFactById } from '../data modules/facts.js';
import { getUserData } from '../utils.js';
import * as likes from '../data modules/likes.js'


const template = (fact, deleteItem, onLike) => html`
  <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fact.imageUrl} alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">${fact.description}</p>
                   <p id ="more-info">${fact.moreInfo}</p>
              </div>

          <h3>Likes:<span id="likes">${fact.numLikes}</span></h3>
          ${fact.isOwner || fact.canLike ? html`
          <div id="action-buttons">
            ${fact.isOwner ? html`
            <a href="/fun-facts/${fact._id}/edit" id="edit-btn">Edit</a>
            <a @click=${deleteItem} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
            ${fact.canLike ? html`
            <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
          </div>` : null}
          </div> 
        </div>
  </section>
`

export async function detailsPage(ctx) {
  const id = ctx.params.id

  //bonus part
  const requests = [
    getFactById(id),
    likes.getFactLikes(id),

  ]

  //const fact = await getFactById(id);
  const userData = getUserData();
  if (userData){
    requests.push(likes.getUserLikes(id, userData._id))
  }

  //bonus part
  const [fact, numLikes, hasLiked] = await Promise.all(requests)
  fact.numLikes = numLikes

  if (userData){
    fact.isOwner = userData._id === fact._ownerId
    fact.canLike = fact.isOwner == false && hasLiked == 0 //the server returns 0 or 1, 0 if the user hasn't liked the fact yet
  }

  // if (userData && userData._id === fact._ownerId) {
  //   fact.isOwner = true;
  // }


  ctx.render(template(fact, deleteItem, onLike));

  async function deleteItem(){
    const confirmation = confirm(`Are you sure you want to delete this item?`);
    if(confirmation) {
      await deleteFact(id); // id comes from the closeure above
      ctx.page.redirect('/fun-facts');
    }
  }

  async function onLike(event){
    await likes.addLike(id);
    ctx.page.redirect('/fun-facts/' + id);
  }
}