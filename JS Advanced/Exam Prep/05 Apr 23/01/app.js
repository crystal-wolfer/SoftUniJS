window.addEventListener("load", solve);

function solve() {
  // capture elements
  const gemNameInput = document.getElementById("gem-name");
  const gemColorInput = document.getElementById("color");
  const gemCaratsInput = document.getElementById("carats");
  const gemPriceInput = document.getElementById("price");
  const gemTypeInput = document.getElementById("type");
  const addBtn = document.getElementById("add-btn");
  const previewUl = document.getElementById("preview-list");
  const collectionUl = document.getElementById("collection");


  // attach event listener to addBtn
  addBtn.addEventListener("click", addBtnClickHandler);

  // function to create the html element for Preview section
  function createGemInfo(title, color, carats, price, type) {
    // Create the outer list item element with the class "gem-info"
    const listItem = document.createElement("li");
    listItem.classList.add("gem-info");

    // Create the article element
    const article = document.createElement("article");

    // Create the heading element with the title
    const heading = document.createElement("h4");
    heading.textContent = title;

    // Create the paragraph elements for color, carats, price, and type
    const colorParagraph = document.createElement("p");
    colorParagraph.textContent = `Color: ${color}`;

    const caratsParagraph = document.createElement("p");
    caratsParagraph.textContent = `Carats: ${carats}`;

    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `Price: ${price}$`;

    const typeParagraph = document.createElement("p");
    typeParagraph.textContent = `Type: ${type}`;

    // Append the elements to the article
    article.appendChild(heading);
    article.appendChild(colorParagraph);
    article.appendChild(caratsParagraph);
    article.appendChild(priceParagraph);
    article.appendChild(typeParagraph);

    // Create the buttons
    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save to Collection";

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Information";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-btn");
    cancelButton.textContent = "Cancel";

    // Append the article and buttons to the list item
    listItem.appendChild(article);
    listItem.appendChild(saveButton);
    listItem.appendChild(editButton);
    listItem.appendChild(cancelButton);

    // Return the created list item
    return listItem;
  }

  function addBtnClickHandler(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
    let name = gemNameInput.value;
    let color = gemColorInput.value;
    let carats = gemCaratsInput.value;
    let price = gemPriceInput.value;
    let type = gemTypeInput.value;

    // validate inputs are not empty strings
    if (name && color && carats && price && type) {
      let previewItem = createGemInfo(name, color, carats, price, type);
      previewUl.appendChild(previewItem);

      // clearing the input fields
      gemNameInput.value = "";
      gemColorInput.value = "";
      gemCaratsInput.value = "";
      gemPriceInput.value = "";
      gemTypeInput.value = "";

      // disable addBtn
      addBtn.disabled = true;

      // attach event listeners to the buttons
      let saveBtn = previewItem.querySelector(".save-btn");
      let editBtn = previewItem.querySelector(".edit-btn");
      let cancelBtn = previewItem.querySelector(".cancel-btn");

      saveBtn.addEventListener("click", saveBtnClickHandler);
      editBtn.addEventListener("click", editBtnClickHandler);
      cancelBtn.addEventListener("click", cancelBtnClickHandler);
    }
  }

  // Save Button
  function saveBtnClickHandler(evtProp) {
    let previewItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    const name = article.children[0].textContent
    const color = article.children[1].textContent
    const carats = article.children[2].textContent
    const price = article.children[3].textContent
    const type = article.children[4].textContent

    // creating the liItem
    const listItem = document.createElement("li");

    // creating the p item
    const p = document.createElement("p");
    p.classList.add("collection-info");
    p.textContent = `${name} - ${color}/ ${carats}/ ${price}/ ${type}`;
    
    // append the items
    listItem.appendChild(p);
    collectionUl.appendChild(listItem);

    // delete the Preview items
    previewUl.removeChild(previewItem);

  }

  // Edit Button
  function editBtnClickHandler(evtProp) {
    let liItem = evtProp.target.parentElement;
    let article = evtProp.target.parentElement.children[0];

    const v0 = article.children[0].textContent
    const v1 = article.children[1].textContent.replace("Color: ","");
    const v2 = article.children[2].textContent.replace("Carats: ","");
    const v3 = article.children[3].textContent.replace("Price: ",""). replace("$","");
    const v4 = article.children[4].textContent.replace("Type: ","");

    gemNameInput.value = v0;
    gemColorInput.value = v1;
    gemCaratsInput.value = v2;
    gemPriceInput.value = v3;
    gemTypeInput.value = v4;

    previewUl.removeChild(liItem);
    addBtn.disabled = false;

  }

  // Cancel Button
  function cancelBtnClickHandler(evtProp) {
    let liItem = evtProp.target.parentElement;
    previewUl.removeChild(liItem);
    addBtn.disabled = false;
  }

}

//36min