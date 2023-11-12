import {html, render} from '../../../../node_modules/lit-html/lit-html.js';

const loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', loadTowns);
const divRoot = document.getElementById('root');
const input = document.querySelector('#towns');

function loadTowns(event){
  event.preventDefault();
  const inputArr = input.value.split(', ');

  render(htmlTemplate(inputArr), divRoot);

}

function htmlTemplate(data) {
  const ul = html`
  <ul>
    ${data.map((item) => html`<li>${item}</li>`)}
  </ul>
`
  return ul
}