window.addEventListener('load', solution);

async function solution() {
  //capture elements
  const mainDiv = document.getElementById('main');

  //function that creates the html section for each article
  function generateSectionHTML(spanTitle, btnID, pMoreText) {
    const accordionDiv = document.createElement("div");
    accordionDiv.classList.add("accordion");

    const headDiv = document.createElement("div");
    headDiv.classList.add("head");

    const spanElement = document.createElement("span");
    spanElement.textContent = spanTitle;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("button");
    buttonElement.id = btnID;
    buttonElement.textContent = "More";
    buttonElement.addEventListener("click", toggleMore)

    headDiv.appendChild(spanElement);
    headDiv.appendChild(buttonElement);

    const extraDiv = document.createElement("div");
    extraDiv.classList.add("extra");
    extraDiv.style.display = "none";

    const pElement = document.createElement("p");
    pElement.textContent = pMoreText;

    extraDiv.appendChild(pElement);

    accordionDiv.appendChild(headDiv);
    accordionDiv.appendChild(extraDiv);

    return accordionDiv;
  }

  //fetching all the ids and keeping them in array
  let arrId = [];
  const fetchReq = (r) => {
    if (r.status !== 200) {
      throw new Error(`Server error: ${r.status}`);
    }

    return r;
  };

  try {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/articles/list'
    const response = await fetch(baseURL, { method: 'GET' })
    const fetchResult = fetchReq(response);
    const arrEntries = await fetchResult.json();

    //loop through the entries and create section for each entry
    arrEntries.forEach(entry => {
      arrId.push(entry._id);
    });
  }
  catch (err) {
    throw new Error(`Fetch Error: ${err}`);
  }

  // go through each id and create section for each entry
  arrId.forEach(async (id) => {
    try {
      const URL = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;
      const response = await fetch(URL, { method: 'GET' });
      const fetchResult = fetchReq(response);
      const itemObj = await fetchResult.json();
      const itemId = itemObj._id;
      const title = itemObj.title;
      const content = itemObj.content;

      const sectionDiv = generateSectionHTML(title, itemId, content);
      mainDiv.appendChild(sectionDiv);
    }
    catch (err) {
      throw new Error(`Fetch Error: ${err}`);
    }
  });

  // define the toggleMore click event
  function toggleMore(e){
    const btn = e.target;
    const divHidden = e.target.parentElement.parentElement.querySelector(".extra");

    if (btn.textContent === "More"){
      divHidden.style.display = "block";
      btn.textContent = "Less";
    } else{
      divHidden.style.display = "none";
      btn.textContent = "More";
    }
  }


}