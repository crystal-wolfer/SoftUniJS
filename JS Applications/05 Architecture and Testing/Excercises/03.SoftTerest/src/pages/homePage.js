import { sections } from "../app.js";


// injecting the context object from the router so that we can invoket the renderSection method
export function showHomePage(context){
  context.renderSection(sections.homePage);
  context.updateNav();
}

