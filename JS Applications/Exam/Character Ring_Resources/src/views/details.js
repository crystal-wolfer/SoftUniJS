import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteIt, getById } from '../data modules/characters.js'
import { getUserData } from '../utils.js'
import * as likes from '../data modules/likes.js'


const template = (char, deleteItem, onLike) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${char.imageUrl} alt="example1" />
      <div>
        <p id="details-category">${char.category}</p>
        <div id="info-wrapper">
          <div id="details-description">
            <p id="description">${char.description}</p>
            <p id ="more-info">${char.moreInfo}</p>
          </div>
        </div>
        <h3>Is This Useful:<span id="likes">${char.numLikes}</span></h3>

        <!--Edit and Delete are only for creator-->
        ${char.isOwner || char.canLike ? html`
        <div id="action-buttons">
          ${char.isOwner ? html`
           <a href="/characters/${char._id}/edit" id="edit-btn">Edit</a>
            <a @click=${deleteItem} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}
          ${char.canLike ? html`  
             <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>` : null}
        </div>`: null}
      </div>
    </div>
  </section>
`
export async function detailsPage(ctx) {
  const id = ctx.params.id

  //bonus part
  const requests = [
    getById(id),
    likes.getFactLikes(id),

  ]

  //const fact = await getFactById(id);
  const userData = getUserData();
  if (userData){
    requests.push(likes.getUserLikes(id, userData._id))
  }

  //bonus part
  const [char, numLikes, hasLiked] = await Promise.all(requests)
  char.numLikes = numLikes

  if (userData){
    char.isOwner = userData._id === char._ownerId
    char.canLike = char.isOwner == false && hasLiked == 0 //the server returns 0 or 1, 0 if the user hasn't liked the fact yet
  }

  // if (userData && userData._id === fact._ownerId) {
  //   fact.isOwner = true;
  // }


  ctx.render(template(char, deleteItem, onLike));

  async function deleteItem(){
    const confirmation = confirm(`Are you sure you want to delete this item?`);
    if(confirmation) {
      await deleteIt(id); // id comes from the closeure above
      ctx.page.redirect('/characters');
    }
  }

  async function onLike(event){
    await likes.addLike(id);
    ctx.page.redirect('/characters/' + id);
  }
}
