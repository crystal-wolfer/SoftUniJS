window.addEventListener('load', solve);

function solve() {
  // capture elements
  const fNameInput = document.getElementById("first-name");
  const lNameInput = document.getElementById("last-name");
  const numPeopleInput = document.getElementById("people-count");
  const dateInput = document.getElementById("from-date");
  const daysCountInput = document.getElementById("days-count");
  const nextBtn = document.getElementById("next-btn");
  const previewUl = document.querySelector(".ticket-info-list");
  const confirmUl = document.querySelector(".confirm-ticket");
  const divMain = document.querySelector("#main");
  const body = document.querySelector("#body");

  // attach event listener
  nextBtn.addEventListener("click", nextBtnClick);

  // Func that creates the preview html element
  function createTicketHTML(name, fromDate, days, people) {
    const li = document.createElement('li');
    li.className = 'ticket';

    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = 'Name: ' + name;

    const fromDateP = document.createElement('p');
    fromDateP.textContent = 'From date: ' + fromDate;

    const daysP = document.createElement('p');
    daysP.textContent = 'For ' + days + ' days';

    const peopleP = document.createElement('p');
    peopleP.textContent = 'For ' + people + ' people';

    article.appendChild(h3);
    article.appendChild(fromDateP);
    article.appendChild(daysP);
    article.appendChild(peopleP);

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    const continueBtn = document.createElement('button');
    continueBtn.className = 'continue-btn';
    continueBtn.textContent = 'Continue';

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    return li;
  }

  // Func to create the Confirm html
  function confirmTicketHTML(name, fromDate, days, people) {
    const li = document.createElement('li');
    li.className = 'ticket-content';

    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = name

    const fromDateP = document.createElement('p');
    fromDateP.textContent = fromDate;

    const daysP = document.createElement('p');
    daysP.textContent = days;

    const peopleP = document.createElement('p');
    peopleP.textContent = people;

    article.appendChild(h3);
    article.appendChild(fromDateP);
    article.appendChild(daysP);
    article.appendChild(peopleP);

    const editBtn = document.createElement('button');
    editBtn.className = 'confirm-btn';
    editBtn.textContent = 'Confirm';

    const continueBtn = document.createElement('button');
    continueBtn.className = 'cancel-btn';
    continueBtn.textContent = 'Cancel';

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    return li;
  }

  // Next Btn
  function nextBtnClick(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
    let name = `${fNameInput.value} ${lNameInput.value}`;
    let fromDate = dateInput.value;
    let days = daysCountInput.value;
    let people = numPeopleInput.value;

    // validate for empty string
    if (fNameInput.value && lNameInput.value && fromDate && days && people) {
      let previewItem = createTicketHTML(name, fromDate, days, people);
      previewUl.appendChild(previewItem);

      // clear the input fields
      fNameInput.value = "";
      lNameInput.value = "";
      dateInput.value = "";
      daysCountInput.value = "";
      numPeopleInput.value = "";

      // disable next button
      nextBtn.disabled = true;

      // attach event listeners to the btns
      let editBtn = previewItem.querySelector(".edit-btn");
      let continueBtn = previewItem.querySelector('.continue-btn');

      editBtn.addEventListener("click", editBtnClick);
      continueBtn.addEventListener("click", continueBtnClick);
    }
  }

  // Edit button
  function editBtnClick(evtProp) {
    let previewItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    fNameInput.value = article.children[0].textContent.replace("Name: ", "").split(" ")[0];
    lNameInput.value = article.children[0].textContent.replace("Name: ", "").split(" ")[1];
    dateInput.value = article.children[1].textContent.replace("From date: ", "");
    daysCountInput.value = article.children[2].textContent.replace("For ", "").replace(" days", "");
    numPeopleInput.value = article.children[3].textContent.replace("For ", "").replace(" people", "");

    previewUl.removeChild(previewItem);
    nextBtn.disabled = false;
  }

  function continueBtnClick(evtProp) {
    let previewItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    let name = article.children[0].textContent;
    let date = article.children[1].textContent;
    let days = article.children[2].textContent;
    let people = article.children[3].textContent;

    let confirmItem = confirmTicketHTML(name, date, days, people);
    confirmUl.appendChild(confirmItem);
    previewUl.removeChild(previewItem);

    // Add even listeners to the btns;
    let cancelBtn = confirmItem.querySelector(".cancel-btn");
    let confirmBtn = confirmItem.querySelector(".confirm-btn");
    
    cancelBtn.addEventListener("click", cancelBtnClick);
    confirmBtn.addEventListener("click", confirmBtnClick);
  }

  function cancelBtnClick(evtProp){
    let item = evtProp.target.parentElement;
    confirmUl.removeChild(item);
    nextBtn.disabled = false;
  }

  function confirmBtnClick(evtProp){
    body.removeChild(divMain);
    const h1 = document.createElement('h1');
    h1.id = "thank-you";
    h1.textContent = "Thank you, have a nice day!";
    const btn = document.createElement('button');
    btn.id = "back-btn";
    btn.textContent = "Back";

    // Append the elements
    body.appendChild(h1);
    body.appendChild(btn);

    //reload page
    btn.onclick = () => location.reload();
  }
}

//1:05h 