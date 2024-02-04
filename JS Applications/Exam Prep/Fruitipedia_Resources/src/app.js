import page from '../node_modules/page/page.mjs'
import { render } from '../node_modules/lit-html/lit-html.js'
import { layoutTemplate } from './views/layout.js'
import { getUserData } from './utils.js'
import { homePage } from './views/home.js'
import { loginPage } from './views/login.js'
import { registerPage } from './views/register.js'
import { dashboardPage } from './views/dashboard.js'
import { searchPage } from './views/search.js'
import { detailsPage } from './views/details.js'
import { editPage } from './views/edit.js'
import { createPage } from './views/addNew.js'


//TODO: Might need to change this const to apply to the use case
const root = document.getElementById('wrapper')

page(addContext)
page.redirect('/')
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/fruits', dashboardPage)
page('/fruits/:id', detailsPage)
page('/add-fruit', createPage)
page('/fruits/:id/edit', editPage)
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

