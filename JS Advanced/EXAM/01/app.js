window.addEventListener('load', solution);

function solution() {
  // capture elements
  const employeeInput = document.getElementById("employee");
  const categoryInput = document.getElementById("category");
  const urgencyInput = document.getElementById("urgency");
  const teamInput = document.getElementById("team");
  const descriptionInput = document.getElementById("description");
  const addBtn = document.getElementById("add-btn");
  const previewUL = document.querySelector(".preview-list");
  const pendingUL = document.querySelector(".pending-list");
  const resolvedUL = document.querySelector(".resolved-list");

  // let employee = employeeInput.value;
  // let category = categoryInput.value;
  // let urgency = urgencyInput.value;
  // let team = teamInput.value;
  // let description = descriptionInput.value;

  addBtn.addEventListener("click", addBtnClick);

  // Preview function
  function createPreviewListItem(from, category, urgency, assignedTo, description) {
    // Create a new list item element with the specified class
    const listItem = document.createElement('li');
    listItem.classList.add('problem-content');
  
    // Create the <article> element
    const article = document.createElement('article');
  
    // Create and populate <p> elements for each piece of information
    const fromParagraph = document.createElement('p');
    fromParagraph.textContent = `From: ${from}`;
  
    const categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = `Category: ${category}`;
  
    const urgencyParagraph = document.createElement('p');
    urgencyParagraph.textContent = `Urgency: ${urgency}`;
  
    const assignedToParagraph = document.createElement('p');
    assignedToParagraph.textContent = `Assigned to: ${assignedTo}`;
  
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = `Description: ${description}`;
  
    // Append the <p> elements to the <article> element
    article.appendChild(fromParagraph);
    article.appendChild(categoryParagraph);
    article.appendChild(urgencyParagraph);
    article.appendChild(assignedToParagraph);
    article.appendChild(descriptionParagraph);
  
    // Create the "Edit" button
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
  
    // Create the "Continue" button
    const continueButton = document.createElement('button');
    continueButton.classList.add('continue-btn');
    continueButton.textContent = 'Continue';
  
    // Append the <article> element and buttons to the list item
    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(continueButton);
  
    return listItem;
  }

  // Pending function
  function createPendingListItem(from, category, urgency, assignedTo, description) {
    // Create a new list item element with the specified class
    const listItem = document.createElement('li');
    listItem.classList.add('problem-content');
  
    // Create the <article> element
    const article = document.createElement('article');
  
    // Set the "flex" class for <article>
    article.classList.add('flex');
  
    // Create and populate <p> elements for each piece of information
    const fromParagraph = document.createElement('p');
    fromParagraph.textContent = from;
  
    const categoryParagraph = document.createElement('p');
    categoryParagraph.textContent = category;
  
    const urgencyParagraph = document.createElement('p');
    urgencyParagraph.textContent = urgency;
  
    const assignedToParagraph = document.createElement('p');
    assignedToParagraph.textContent = assignedTo;
  
    // Create and populate the description <p> element
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.textContent = description;
  
    // Create the "Resolved" button
    const resolveButton = document.createElement('button');
    resolveButton.classList.add('resolve-btn');
    resolveButton.textContent = 'Resolved';
  
    // Append the <p> elements and buttons to the <article> element
    article.appendChild(fromParagraph);
    article.appendChild(categoryParagraph);
    article.appendChild(urgencyParagraph);
    article.appendChild(assignedToParagraph);
    article.appendChild(descriptionParagraph);
  
    // Append the <article> element and the "Resolved" button to the list item
    listItem.appendChild(article);
    listItem.appendChild(resolveButton);
  
    return listItem;
  }

  // ADD BUTTON
  function addBtnClick(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
    let employee = employeeInput.value;
    let category = categoryInput.value;
    let urgency = urgencyInput.value;
    let team = teamInput.value;
    let description = descriptionInput.value;

    // validate non empty strings
    if(employee && category && urgency && team && description) {
      let liItem = createPreviewListItem(employee, category, urgency, team, description);
      previewUL.appendChild(liItem);

      // Clear the inputs
      employeeInput.value = "";
      categoryInput.value = "";
      urgencyInput.value = "";
      teamInput.value = "";
      descriptionInput.value = "";

      //disable addBtn
      addBtn.disabled = true;

      // attach events to the buttons
      const editBtn = liItem.querySelector(".edit-btn");
      const continueBtn = liItem.querySelector(".continue-btn"); 

      editBtn.addEventListener("click", editBtnClick);
      continueBtn.addEventListener("click", continueBtnClick);
    }
  }

  function editBtnClick(evtProp){
    const previewItem = evtProp.target.parentElement;
    const article = evtProp.target.parentElement.children[0];

    employeeInput.value = article.children[0].textContent.replace("From: ", "");
    categoryInput.value = article.children[1].textContent.replace("Category: ", "");;
    urgencyInput.value = article.children[2].textContent.replace("Urgency: ", "");
    teamInput.value = article.children[3].textContent.replace("Assigned to: ", "");
    descriptionInput.value = article.children[4].textContent.replace("Description: ", "");

    previewUL.removeChild(previewItem);
    addBtn.disabled = false;
  }

  function continueBtnClick(evtProp){
    const previewItem = evtProp.target.parentElement;
    const article = evtProp.target.parentElement.children[0];

    employee = article.children[0].textContent;
    category = article.children[1].textContent;
    urgency = article.children[2].textContent
    team = article.children[3].textContent;
    description = article.children[4].textContent;

    const pendingItem = createPendingListItem(employee, category, urgency, team, description)
    pendingUL.appendChild(pendingItem);
    previewUL.removeChild(previewItem);

    //attach event listener to the button
    const resolveBtn = pendingItem.querySelector(".resolve-btn");
    resolveBtn.addEventListener("click", resolveBtnClick);
  }

  function resolveBtnClick(evtProp){
    const pendingItem = evtProp.target.parentElement;
    const article = evtProp.target.parentElement.children[0];

    resolvedUL.appendChild(pendingItem);
    const btn = pendingItem.querySelector(".resolve-btn");
    btn.removeEventListener("click", resolveBtnClick);
    btn.className = "clear-btn";
    btn.textContent = "Clear"
    btn.addEventListener("click", clearBtnClick);
  }

  function clearBtnClick(evtProp){
    const resolvedItem = evtProp.target.parentElement;
    resolvedUL.removeChild(resolvedItem);
  }
}

// 30min



