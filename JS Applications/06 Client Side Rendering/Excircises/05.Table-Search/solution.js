import { html, render } from "../../../../node_modules/lit-html/lit-html.js";

function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);
  const url = 'http://localhost:3030/jsonstore/advanced/table'
  const tbody = document.querySelector('tbody')
  let response

  async function loadData() {
    // GET request
    try {
      const request = await fetch(url);
      if (request.status === 200) {
        response = await request.json();
      } else {
        alert(`Error: ${request.status} ${request.message}`);
      }
    }
    catch (e) {
      alert(`Error fetching: ${e.message}`);
    }

    const data = Object.values(response);

    // html template
    const rows = (data) => html `
    ${data.map((row) => html`
    <tr id = ${row._id}>
        <td>${row.firstName} ${row.lastName}</td>
        <td>${row.email}</td>
        <td>${row.course}</td>
      </tr>
    `)}`

    render(rows(data), tbody)
  }
  loadData();

  function onClick(event) {
    let input = document.getElementById("searchField")
    let inputText = input.value.toLowerCase();
    const rows = document.querySelectorAll("tbody tr")
    
    rows.forEach(row => {
      const inputs = Array.from(row.children);
      for (const element of inputs) {
        let el = element.textContent.toLocaleLowerCase();
        if(el.includes(inputText)){
          row.classList.add("select")
          return element
        } else {
          row.classList.remove("select")
        }
      }
    });

    document.getElementById("searchField").value = '';
  }
}
solve()
