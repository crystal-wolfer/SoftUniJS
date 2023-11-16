import * as utils from '../utils.js'
import page from "../../node_modules/page/page.mjs"

export async function logoutFn(event){
  event.preventDefault()
  await utils.logout();
  page.redirect('/')

}
