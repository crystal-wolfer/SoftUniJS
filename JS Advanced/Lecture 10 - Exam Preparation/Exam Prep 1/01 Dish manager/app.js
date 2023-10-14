// works 100% in browser fails in judge
window.addEventListener("load", solve);

function solve() {
  //capture elements
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const genderSelect = document.getElementById('genderSelect');
  const dishDescriptionInput = document.getElementById('task');
  const submitBtn = document.getElementById('form-btn');
  const ulInProgress = document.getElementById('in-progress');
  const progressCount = document.getElementById('progress-count');
  const ulFinished = document.getElementById('finished');
  const clearBtn = document.getElementById('clear-btn');

  //add event listener to submitBtn
  submitBtn.addEventListener("click", submitHadler);

  //add event listener to clearBtn
  clearBtn.addEventListener("click", clearHandler); 

  // Clear handler
  function clearHandler(e){
    let ulFinished = e.target.parentElement.children[1];
    let liArr = Array.from(ulFinished.children);

    liArr.forEach(element => {
      ulFinished.removeChild(element);
    });
   
  }

  //Function that creates the html for the task in progress
  function createListItem(title, description, dishDescription) {
    const listItem = document.createElement('li');
    listItem.className = 'each-line';

    const article = document.createElement('article');

    const h4 = document.createElement('h4');
    h4.textContent = title;

    const p1 = document.createElement('p');
    p1.textContent = description;

    const p2 = document.createElement('p');
    p2.textContent = 'Dish description: ' + dishDescription;

    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-btn';
    completeButton.textContent = 'Mark as complete';

    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    listItem.appendChild(article);
    listItem.appendChild(editButton);
    listItem.appendChild(completeButton);

    return listItem;
  }

  // Submit Handler
  function submitHadler(evtProp) {
    evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)

    // validation the input field are not empty
    if (firstNameInput.value !== '' && lastNameInput.value !== '' && ageInput.value !== '' && dishDescriptionInput.value !== '' && genderSelect.value !== '') {
      const title = `${firstNameInput.value} ${lastNameInput.value}`;
      const description = `${genderSelect.value}, ${ageInput.value}`
      const dishDescription = `${dishDescriptionInput.value}`

      let listItem = createListItem(title, description, dishDescription);
      ulInProgress.appendChild(listItem);

      // change the count of the in progress items
      let curNum = Number(progressCount.textContent);
      progressCount.textContent = curNum + 1;

      // clean the input fields
      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      dishDescriptionInput.value = '';
      genderSelect.value = '';

      // add event listeners to the buttons
      const editBtn = Array.from(document.querySelectorAll('.edit-btn'));
      const completeBtn = Array.from(document.querySelectorAll('.complete-btn'));

      editBtn.forEach(btn => {
        btn.addEventListener('click', editHandler);
      });

      completeBtn.forEach(btn => {
        btn.addEventListener('click', completeHandler);
      });
    }
  }

  // Edit handler
  function editHandler(evtProp) {
    const article = evtProp.target.parentElement.children[0]; // article element .children[title, description, dishDescription]
    firstNameInput.value = article.children[0].textContent.split(' ')[0];
    lastNameInput.value = article.children[0].textContent.split(' ')[1];
    ageInput.value = article.children[1].textContent.split(', ')[1];
    genderSelect.value = article.children[1].textContent.split(', ')[0];
    dishDescriptionInput.value = article.children[2].textContent.split(': ')[1];

    // change the count of the in progress items
    let curNum = Number(progressCount.textContent);
    progressCount.textContent = curNum - 1;

    // delete the listItem from the in progress list
    const listItem = evtProp.target.parentElement;
    ulInProgress.removeChild(listItem);
  }
  // Complete handler
  function completeHandler(evtProp) {
    const listItem = evtProp.target.parentElement;
    let buttons = Array.from(listItem.querySelectorAll('button'));

    // removing the buttons
    buttons.forEach(btn => {
      listItem.removeChild(btn);
    });

    ulFinished.appendChild(listItem);

    // change the count of the in progress items
    let curNum = Number(progressCount.textContent);
    progressCount.textContent = curNum - 1;
  }

}
