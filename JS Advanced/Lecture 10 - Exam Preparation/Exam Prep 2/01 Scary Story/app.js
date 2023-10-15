window.addEventListener("load", solve);

function solve() {
  //capture elements
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const storyTitleInput = document.getElementById("story-title");
  const genreInput = document.getElementById("genre");
  const storyInput = document.getElementById("story");
  const submitBtn = document.getElementById("form-btn");
  const ulElement = document.getElementById("preview-list");
  const mainDiv = document.getElementById("main");

  // add event listener to Submit button
  submitBtn.addEventListener("click", submitHandler);

  function createStoryElement(name, age, title, genre, description) {
    // Create the main elements
    const liElement = document.createElement("li");
    liElement.classList.add("story-info");

    const articleElement = document.createElement("article");

    const h4Element = document.createElement("h4");
    h4Element.textContent = "Name: " + name;

    const ageElement = document.createElement("p");
    ageElement.textContent = "Age: " + age;

    const titleElement = document.createElement("p");
    titleElement.textContent = "Title: " + title;

    const genreElement = document.createElement("p");
    genreElement.textContent = "Genre: " + genre;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    descriptionElement.style.wordBreak = 'break-all';

    const saveButton = document.createElement("button");
    saveButton.classList.add("save-btn");
    saveButton.textContent = "Save Story";

    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit Story";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete Story";

    // Append elements to the article
    articleElement.appendChild(h4Element);
    articleElement.appendChild(ageElement);
    articleElement.appendChild(titleElement);
    articleElement.appendChild(genreElement);
    articleElement.appendChild(descriptionElement);

    // Append the article and buttons to the list item
    liElement.appendChild(articleElement);
    liElement.appendChild(saveButton);
    liElement.appendChild(editButton);
    liElement.appendChild(deleteButton);

    return liElement;
  }

  function submitHandler(evtProp){
    // validation inputs are not empty
    if (firstNameInput.value && lastNameInput.value && ageInput.value && storyTitleInput.value && storyInput.value && genreInput.value){
      const name = `${firstNameInput.value} ${lastNameInput.value}`;
      const age = ageInput.value;
      const title = storyTitleInput.value;
      const genre = genreInput.value;
      const description = storyInput.value;

      const liItem = createStoryElement(name, age, title, genre, description);

      ulElement.appendChild(liItem);

      // cleaning the input fields
      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      genreInput.value = 'default';
      storyTitleInput.value = '';
      storyInput.value = '';

      // disable subimtBtn
      submitBtn.disabled = true;

      // add event listeners to the buttons
      const saveBtn = Array.from(document.querySelectorAll('.save-btn'));
      const editBtn = Array.from(document.querySelectorAll('.edit-btn'));
      const deleteBtn = Array.from(document.querySelectorAll('.delete-btn'));
      
      saveBtn.forEach(btn => {btn.addEventListener('click', saveHandler)})
      editBtn.forEach(btn => {btn.addEventListener('click', editHandler)})
      deleteBtn.forEach(btn => {btn.addEventListener('click', deleteHandler)})

    }

    function saveHandler(evtProp){
      // removing all elements from the div main
      removeAllChildNodes(mainDiv);
      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
      }

      const h1Element = document.createElement("h1");
      h1Element.textContent = "Your scary story is saved!"

      mainDiv.appendChild(h1Element);
    }

    function editHandler(evtProp){
      const article = evtProp.target.parentElement.children[0];
      firstNameInput.value = article.children[0].textContent.replace("Name: ", '').split(' ')[0];
      lastNameInput.value = article.children[0].textContent.replace("Name: ", '').split(' ')[1];
      ageInput.value = article.children[1].textContent.replace("Age: ", '');
      storyTitleInput.value = article.children[2].textContent.replace("Title: ", '');
      genreInput.value = article.children[3].textContent.replace("Genre: ", '');
      storyInput.value = article.children[4].textContent;

      let liItem = article.parentElement;
      ulElement.removeChild(liItem);
      submitBtn.disabled = false;
    }

    function deleteHandler(evtProp){
      let liItem = evtProp.target.parentElement;
      ulElement.removeChild(liItem);
      submitBtn.disabled = false;
    }
  }
}


//53min