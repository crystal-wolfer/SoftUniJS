import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { search } from '../data modules/motors.js';
import { createFormSubmitHandler } from '../utils.js'

const template = (onSearch) => html`
  <section id="search">
    <div class="form">
      <h4>Search</h4>
      <form class="search-form" @submit = ${onSearch}>
        <input
          type="text"
          name="search"
          id="search-input"
        />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    <div class="search-result">
      
    </div>
  </section>
`

const searchResult = (results) => html`
  ${results !== undefined ? html`${results.length > 0 ? html`${results.map(renderResult)}`
      : html `<<h2 class="no-avaliable">No result.</h2>`}`
      : null}
`

export function searchPage(ctx){
  ctx.render(template(createFormSubmitHandler(onSearch)));

  async function onSearch(data){
    const query = data.search;
    //console.log(typeof query);
    const results = await search(query);
    const div = document.querySelector(".search-result");
    
    render(searchResult(results), div);

  }
}

  
function renderResult(result){
  return html `
  <div class="motorcycle">
    <img src=${result.imageUrl} alt="example1" />
    <h3 class="model">${result.model}</h3>
    <a class="details-btn" href="/motorcycles/${result._id}">More Info</a>
  </div>
  `
}
