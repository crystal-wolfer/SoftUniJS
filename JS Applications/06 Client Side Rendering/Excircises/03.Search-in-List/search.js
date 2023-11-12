import { towns } from "./towns.js";
import { html, render } from "../../../../node_modules/lit-html/lit-html.js";

const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search);
const result = document.getElementById('result')

function ulEl(data){
   const ul = html`
      <ul>
         ${data.map((item) => html`<li id = ${item}>${item}</li>`)}
      </ul>
   `
   return ul;
}

// arrow function for the same purpose as the ulEl function
const UL = (data) => html`
<ul>
   ${data.map((item) => html`<li id = ${item}>${item}</li>`)}
</ul>
`

render(UL(towns), document.getElementById('towns'))

function search(event) {
   const input = document.getElementById('searchText').value
   let filtered = towns.filter((town) => {
      if (town.includes(input)) {
         let li = document.getElementById(`${town}`);
         li.className = "active"
         return town
      } else {
         let li = document.getElementById(`${town}`);
         li.className = ""
      }
   })

   result.textContent = `${filtered.length} matches found`
}
