window.addEventListener('load', solve);

function solve() {
  // capture elements
  const fNameInput = document.getElementById("first-name");
  const lNameInput = document.getElementById("last-name");
  const dateInInput = document.getElementById("date-in");
  const dateOutInput = document.getElementById("date-out");
  const peopleCountInput = document.getElementById("people-count");
  const nextBtn = document.getElementById("next-btn");
  const reservationUl = document.querySelector(".info-list");
  const confirmUl = document.querySelector(".confirm-list");
  const completeRes = document.getElementById("complete-reservation");
  const h1 = document.getElementById("verification");

  // add event listener
  nextBtn.addEventListener("click", nextBtnClick);

  // Reservation html element list
  function createReservation(name, fromDate, toDate, numberOfPeople) {
    const li = document.createElement('li');
    li.className = 'reservation-content';

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = 'Name: ' + name;
    const fromDateP = document.createElement('p');
    fromDateP.textContent = 'From date: ' + fromDate;
    const toDateP = document.createElement('p');
    toDateP.textContent = 'To date: ' + toDate;
    const numberOfPeopleP = document.createElement('p');
    numberOfPeopleP.textContent = 'For ' + numberOfPeople + ' people';

    article.appendChild(h3);
    article.appendChild(fromDateP);
    article.appendChild(toDateP);
    article.appendChild(numberOfPeopleP);

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

  // Confirm html element list
  function confirm(name, fromDate, toDate, numberOfPeople) {
    const li = document.createElement('li');
    li.className = 'reservation-content';

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = 'Name: ' + name;
    const fromDateP = document.createElement('p');
    fromDateP.textContent = 'From date: ' + fromDate;
    const toDateP = document.createElement('p');
    toDateP.textContent = 'To date: ' + toDate;
    const numberOfPeopleP = document.createElement('p');
    numberOfPeopleP.textContent = 'For ' + numberOfPeople + ' people';

    article.appendChild(h3);
    article.appendChild(fromDateP);
    article.appendChild(toDateP);
    article.appendChild(numberOfPeopleP);

    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-btn';;
    confirmBtn.textContent = 'Confirm';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-btn';
    cancelBtn.textContent = 'Cancel';

    li.appendChild(article);
    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);

    return li;
  }


  // Next button
  function nextBtnClick(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
    let fName = fNameInput.value;
    let lName = lNameInput.value;
    let dateIn = dateInInput.value;
    let dateOut = dateOutInput.value;
    let people = Number(peopleCountInput.value);
    let name = fName + " " + lName;

    if (fName && lName && dateIn && dateOut && people || dateIn < dateOut) {
      let liItem = createReservation(name, dateIn, dateOut, people);
      reservationUl.appendChild(liItem);

      // add event listeners to the buttons
      let editBtn = liItem.querySelector('.edit-btn');
      let continueBtn = liItem.querySelector('.continue-btn');
      editBtn.addEventListener('click', editBtnClick);
      continueBtn.addEventListener('click', continueBtnClick);

      // clean inputs
      fNameInput.value = '';
      lNameInput.value = '';
      dateInInput.value = '';
      dateOutInput.value = '';
      peopleCountInput.value = '';

      // disable nextBtn
      nextBtn.disabled = true;
    }
  }

  function editBtnClick(evtProp) {
    let resInfoItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];
    fNameInput.value = article.children[0].textContent.replace("Name: ", "").split(" ")[0];
    lNameInput.value = article.children[0].textContent.replace("Name: ", "").split(" ")[1];
    dateInInput.value = article.children[1].textContent.replace("From date: ", "");
    dateOutInput.value = article.children[2].textContent.replace("To date: ", "");
    peopleCountInput.value = article.children[3].textContent.replace("For ", "").replace(" people", "");

    reservationUl.removeChild(resInfoItem);
    nextBtn.disabled = false;
  }

  function continueBtnClick(evtProp) {
    let resInfoItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    const fName = article.children[0].textContent.replace("Name: ", "").split(" ")[0];
    const lName = article.children[0].textContent.replace("Name: ", "").split(" ")[1];
    const dateIn = article.children[1].textContent.replace("From date: ", "");
    const dateOut = article.children[2].textContent.replace("To date: ", "");
    const peopleCount = article.children[3].textContent.replace("For ", "").replace(" people", "");
    let name = fName + " " + lName;

    let confItem = confirm(name, dateIn, dateOut, peopleCount)
    confirmUl.appendChild(confItem);
    reservationUl.removeChild(resInfoItem)

    // add event listeners to the buttons
    let confirmBtn = confItem.querySelector('.confirm-btn');
    let cancelBtn = confItem.querySelector('.cancel-btn');
    confirmBtn.addEventListener('click', confirmBtnClick);
    cancelBtn.addEventListener('click', cancelBtnClick);

  }

  function confirmBtnClick(evtProp) {
    let liItem = evtProp.target.parentElement;
    confirmUl.removeChild(liItem);
    h1.className = "reservation-confirmed";
    h1.textContent = "Confirmed";
    nextBtn.disabled = false;
  }

  function cancelBtnClick(evtProp) {
    let liItem = evtProp.target.parentElement;
    confirmUl.removeChild(liItem);
    h1.className = "reservation-cancelled";
    h1.textContent = "Cancelled";
    nextBtn.disabled = false;
  }
}





