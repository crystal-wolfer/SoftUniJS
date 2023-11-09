import * as api from "../api.js";


export function logout(context){
  api.logout();
  context.goTo('/')
}