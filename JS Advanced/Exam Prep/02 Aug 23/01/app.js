window.addEventListener('load', solve);

function solve() {
  //capture elements
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("contact-number");
  const classTypeInput = document.getElementById("class-type");
  const classTimeInput = document.getElementById("class-time");
  const nextBtn = document.getElementById("next-btn");
  const previewUl = document.querySelector(".class-info");
  const confirmUl = document.querySelector(".confirm-class");
  const divMain = document.querySelector("#main");
  const body = document.querySelector("#body");

  // attach event listener to the next button
  nextBtn.addEventListener("click", nextBtnHandler);

  // function that creates the html element for the preview
  function createInfobody(value1, value2, value3, value4, value5) {
    // Create the list item element
    const body = document.createElement("li");
    body.classList.add("info-item");

    // Create the article element
    const article = document.createElement("article");
    article.classList.add("personal-info");

    // Create and set the <p> elements
    const p1 = document.createElement("p");
    p1.textContent = value1;
    const p2 = document.createElement("p");
    p2.textContent = value2;
    const p3 = document.createElement("p");
    p3.textContent = value3;
    const p4 = document.createElement("p");
    p4.textContent = value4;
    const p5 = document.createElement("p");
    p5.textContent = value5;

    // Append the <p> elements to the article
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    // Create the buttons
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("continue-btn");
    doneBtn.textContent = "Continue";

    // Append the article and buttons to the list item
    body.appendChild(article);
    body.appendChild(editButton);
    body.appendChild(doneBtn);

    return body;
  }

  // function that creates the html element for the confirm class
  function createConfirmbody(value1, value2, value3, value4, value5) {
    // Create the list item element
    const body = document.createElement("li");
    body.classList.add("continue-info");

    // Create the article element
    const article = document.createElement("article");
    article.classList.add("personal-info");

    // Create and set the <p> elements
    const p1 = document.createElement("p");
    p1.textContent = value1;
    const p2 = document.createElement("p");
    p2.textContent = value2;
    const p3 = document.createElement("p");
    p3.textContent = value3;
    const p4 = document.createElement("p");
    p4.textContent = value4;
    const p5 = document.createElement("p");
    p5.textContent = value5;

    // Append the <p> elements to the article
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    article.appendChild(p4);
    article.appendChild(p5);

    // Create the buttons
    const editButton = document.createElement("button");
    editButton.classList.add("cancel-btn");
    editButton.textContent = "Cancel";
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("confirm-btn");
    doneBtn.textContent = "Confirm";

    // Append the article and buttons to the list item
    body.appendChild(article);
    body.appendChild(editButton);
    body.appendChild(doneBtn);

    return body;
  }

  function nextBtnHandler(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
    let name = nameInput.value;
    let email = emailInput.value;
    let phone = phoneInput.value;
    let classType = classTypeInput.value;
    let classTime = classTimeInput.value;

    // valiidate input in not empty string
    if (name && email && phone && classType && classTime) {
      let previewItem = createInfobody(name, email, phone, classType, classTime);
      previewUl.appendChild(previewItem);

      // clearing the input fields
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
      classTypeInput.value = '';
      classTimeInput.value = '';

      // disable nextBtn
      nextBtn.disabled = true;

      // attach event listeners to the Edit and Continue buttons
      let editBtn = previewItem.querySelector(".edit-btn");
      let continueBtn = previewItem.querySelector(".continue-btn");

      editBtn.addEventListener("click", editBtnClickHandler);
      continueBtn.addEventListener("click", continueBtnClickHandler);
    }
  }

  function editBtnClickHandler(evtProp) {
    let liItem = evtProp.target.parentElement
    let article = evtProp.target.parentElement.children[0];

    nameInput.value = article.children[0].textContent
    emailInput.value = article.children[1].textContent
    phoneInput.value = article.children[2].textContent
    classTypeInput.value = article.children[3].textContent
    classTimeInput.value = article.children[4].textContent

    previewUl.removeChild(liItem);
    nextBtn.disabled = false;
  }

  function continueBtnClickHandler(evtProp) {
    let previewItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    let name = article.children[0].textContent
    let email = article.children[1].textContent
    let phone = article.children[2].textContent
    let classType = article.children[3].textContent
    let classTime = article.children[4].textContent
    let confirmItem = createConfirmbody(name, email, phone, classType, classTime);

    confirmUl.appendChild(confirmItem);
    previewUl.removeChild(previewItem);

    // attach event listeners to the Edit and Continue buttons
    let cancelBtn = confirmItem.querySelector(".cancel-btn");
    let confirmBtn = confirmItem.querySelector(".confirm-btn");

    cancelBtn.addEventListener("click", cancelBtnClickHandler);
    confirmBtn.addEventListener("click", confirmBtnClickHandler);
  }

  function cancelBtnClickHandler(evtProp){
    let liItem = evtProp.target.parentElement;
    confirmUl.removeChild(liItem);

    nextBtn.disabled = false;
  }

  function confirmBtnClickHandler(evtProp){
    body.removeChild(divMain);
    const h1 = document.createElement("h1");
    h1.id ="thank-you"; 
    h1.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
    const doneBtn = document.createElement("button");
    doneBtn.id = "done-btn";
    doneBtn.textContent = "Done";
    
    // Append the article and buttons to the list item
    body.appendChild(h1);
    body.appendChild(doneBtn);

    // reaload page when done btn is clicked
    doneBtn.onclick = () => location.reload();
  }
}

//46min

