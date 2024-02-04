import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from './views/layout.js'
import { getUserData } from './utils.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { dashboardPage } from './views/dashboard.js'
import { detailsPage } from './views/details.js'
import { createPage } from './views/add.js'
import { searchPage } from './views/search.js'
import { editPage } from './views/edit.js'


const root = document.getElementById("wrapper")

page(addContext)
page.redirect('/')
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/motorcycles', dashboardPage)
page('/motorcycles/:id', detailsPage)
page('/motorcycles/:id/edit', editPage)
page('/add-new', createPage)
page('/search', searchPage)



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

