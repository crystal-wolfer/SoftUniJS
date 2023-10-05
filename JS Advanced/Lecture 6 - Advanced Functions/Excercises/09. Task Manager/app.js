function solve() {
    let addButton = document.querySelector('#add');
    let descriptionField = document.querySelector('#description');
    let [taskField, dateField] = document.querySelectorAll('input[type=text]');
    let [_, openDiv, progressDiv, completeDiv] = document.querySelectorAll('div:nth-child(2)');
    //let [__, openSection, progressSection, completeSection] = document.querySelectorAll('section');

    addButton.addEventListener('click', addCourse);

    function addCourse(event) {
        event.preventDefault();

        if (taskField.value && descriptionField.value && dateField.value) { 
            
            let articleElement = document.createElement('article');
            let headingElement = document.createElement('h3');
            let p1Element = document.createElement('p');
            let p2Element = document.createElement('p');
            headingElement.textContent = taskField.value;
            p1Element.textContent = `Description: ${descriptionField.value}`;
            p2Element.textContent = `Due Date: ${dateField.value}`;

            let divElement = document.createElement('div');
            divElement.classList = 'flex';

            let startBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');
            startBtn.textContent = 'Start';
            deleteBtn.textContent = 'Delete';
            startBtn.classList = 'green';
            deleteBtn.classList = 'red';

            divElement.appendChild(startBtn);
            divElement.appendChild(deleteBtn);

            startBtn.addEventListener('click', startCourse);        // Move the given course
            deleteBtn.addEventListener('click', function (event) {  // Delete the given course
                let targetArticle = event.target.parentNode.parentNode;
                event.target.parentNode.parentNode.parentNode.removeChild(targetArticle);
            });

            articleElement.appendChild(headingElement);
            articleElement.appendChild(p1Element);
            articleElement.appendChild(p2Element);
            articleElement.appendChild(divElement);

            openDiv.appendChild(articleElement);

            taskField.value = '';
            descriptionField.value = '';
            dateField.value = '';
        }
    }

    function startCourse(event) {
        let courseName = event.target.parentNode.parentNode.children[0];
        let courseDescr = event.target.parentNode.parentNode.children[1];
        let courseDate = event.target.parentNode.parentNode.children[2];

        let articleElement = document.createElement('article');
        let headingElement = document.createElement('h3');
        let p1Element = document.createElement('p');
        let p2Element = document.createElement('p');
        headingElement.textContent = courseName.textContent;
        p1Element.textContent = courseDescr.textContent;
        p2Element.textContent = courseDate.textContent;

        let divElement = document.createElement('div');
        divElement.classList = 'flex';

        let deleteBtn = document.createElement('button');
        let finishBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        finishBtn.textContent = 'Finish';
        deleteBtn.classList = 'red';
        finishBtn.classList = 'orange';

        divElement.appendChild(deleteBtn);
        divElement.appendChild(finishBtn);

        finishBtn.addEventListener('click', finishCourse);      // Finish the given course
        deleteBtn.addEventListener('click', function (event) {  // Delete the given course
            let targetArticle = event.target.parentNode.parentNode;
            event.target.parentNode.parentNode.parentNode.removeChild(targetArticle);
        });

        articleElement.appendChild(headingElement);
        articleElement.appendChild(p1Element);
        articleElement.appendChild(p2Element);
        articleElement.appendChild(divElement);

        progressDiv.appendChild(articleElement);

        let targetArticle = event.target.parentNode.parentNode;
        event.target.parentNode.parentNode.parentNode.removeChild(targetArticle); // Remove course from Open Div
    }

    function finishCourse(event){
        let courseName = event.target.parentNode.parentNode.children[0];
        let courseDescr = event.target.parentNode.parentNode.children[1];
        let courseDate = event.target.parentNode.parentNode.children[2];

        let articleElement = document.createElement('article');
        let headingElement = document.createElement('h3'); 
        let p1Element = document.createElement('p');
        let p2Element = document.createElement('p');
        headingElement.textContent = courseName.textContent;
        p1Element.textContent = courseDescr.textContent;
        p2Element.textContent = courseDate.textContent;

        articleElement.appendChild(headingElement);
        articleElement.appendChild(p1Element);
        articleElement.appendChild(p2Element);

        completeDiv.appendChild(articleElement);

        let targetArticle = event.target.parentNode.parentNode;
        event.target.parentNode.parentNode.parentNode.removeChild(targetArticle); // Remove course from Progress Div
    }
}



// works in browser Judge is a bitch
// function solve() {
//     // capture elements
//     const idTask = document.querySelector('#task');
//     const descriptionTask = document.querySelector('#description');
//     const dateTask = document.querySelector('#date');
//     const addBtn = document.querySelector('#add');
//     const sectionArr = document.querySelectorAll('section');


//     // function creating all the elements and receiving 3 inputs
//     function createArticleElement(value1, value2, value3) {
//         const article = document.createElement('article');
//         const h3 = document.createElement('h3');
//         const p1 = document.createElement('p');
//         const p2 = document.createElement('p');
//         const divFlex = document.createElement('div');
//         const startButton = document.createElement('button');
//         const deleteButton = document.createElement('button');

//         h3.textContent = value1;
//         p1.textContent = `Description: ${value2}`;
//         p2.textContent = `Due Date: ${value3}`;
//         startButton.textContent = 'Start';
//         deleteButton.textContent = 'Delete';

//         divFlex.classList.add('flex');
//         startButton.classList.add('green');
//         deleteButton.classList.add('red');


//         article.appendChild(h3);
//         article.appendChild(p1);
//         article.appendChild(p2);
//         article.appendChild(divFlex);
//         divFlex.appendChild(startButton);
//         divFlex.appendChild(deleteButton);

//         return article;
//     }

//     // Add click
//     addBtn.addEventListener('click', addHandler);

//     function addHandler(evtProp) {
//         evtProp.preventDefault(); // prevent default behavior of form (it reloads the page otherwise)
//         let id = idTask.value;
//         let descr = descriptionTask.value;
//         let date = dateTask.value;

//         // all fields must have values
//         if (id && descr && date) {
//             let article = createArticleElement(id, descr, date);
//             let div = sectionArr[1].children[1];
//             div.appendChild(article);
//             id = "";
//             descr = "";
//             date = "";

//             // handling the start buttons
//             const startBtns = Array.from(document.querySelectorAll('article > div.flex > button.green'));
//             // attach event handlers
//             startBtns.forEach(startBtn => {
//                 startBtn.addEventListener('click', startHandler);
//             });


//             // handling the delete buttons
//             const delBtns = Array.from(document.querySelectorAll('article > div.flex > button.red'));
//             // attach event handlers
//             delBtns.forEach(delBtn => {
//                 delBtn.addEventListener('click', delHandler);
//             });

//         }

//     }

//     function startHandler(eventParams) {
//         // move the article to the In Progress section
//         sectionArr[2].appendChild(eventParams.target.parentElement.parentElement); // getting to the article 
//         // check if the button changed its state to Delete
//         if (eventParams.target.textContent === 'Delete') {
//             sectionArr[2].removeChild(eventParams.target.parentElement.parentElement);
//             return;
//         };

//         if (eventParams.target.classList[0] === 'green') {
//             // cehck what is the value of the class now:
//             eventParams.target.classList.replace("green", "red");
//             eventParams.target.textContent = 'Delete';

//             // changing the delete button too
//             eventParams.target.nextSibling.classList.replace("red", "orange");
//             eventParams.target.nextSibling.textContent = 'Finish';
//             return;
//         };

//     }


//     function delHandler(eventParams) {

//         if (eventParams.target.textContent === 'Delete') {
//             sectionArr[1].children[1].removeChild(eventParams.target.parentElement.parentElement);
//             return;
//         }

//         // check if the button changes its state to Finish
//         if (eventParams.target.textContent === 'Finish') {
//             const article = eventParams.target.parentElement.parentElement; // here we need the article not the div
//             const divFlex = eventParams.target.parentElement;
//             const div = eventParams.target.parentElement.parentElement;

//             sectionArr[3].appendChild(div); // moving the article to Completed
//             article.removeChild(divFlex); // removing the buttons 
//             return;
//         };
//     }
// }