import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from './views/layout.js'
import { getUserData } from './utils.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'


//TODO: Might need to change this const to apply to the use case
const root = document.body

page(addContext)
page.redirect('/')
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)

page.start();

function addContext(ctx, next){
  ctx.render = renderView;
  next();
}

//TODO: Inject dependencies
function renderView(content){
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);
}

