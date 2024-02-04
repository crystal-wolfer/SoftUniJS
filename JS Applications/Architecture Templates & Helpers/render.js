//import {render} from  'lit-html'
//import {layoutTemplate} from  '.../layout/template.js' -> this is the base layout template that is hooked to all pages

const body = document.body

export function addRender(ctx, next){
  ctx.render = renderView.bind(null, ctx.user)
  next()
}

function renderView(user, content){
  render(layoutTemplate(user, content), body)
}

// to add this function into the ctx  of every page request into app.js
page (addRender)