window.addEventListener("load", solve);

function solve() {
    const [firstName, lastName, age] = Array.from(document.querySelectorAll('.inner-wrap input'));
    const gender = document.getElementById('genderSelect');
    const description = document.getElementById('task');
    const submitButton = document.getElementById('form-btn');
    const clearButton = document.getElementById('clear-btn');
    let counter = 0;

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (firstName.value && lastName.value && age.value && gender.value && description.value) {
            const progressCount = document.getElementById('progress-count');
            const ul = document.getElementById('in-progress');
            const li = createElement('li', 'each-line', '');
            const article = createElement('article', '', '');
            const h4 = createElement('h4', '', `${firstName.value} ${lastName.value}`);
            const p1 = createElement('p', '', `${gender.value}, ${age.value}`);
            const p2 = createElement('p', '', `Dish description: ${description.value}`);
            const editButton = createElement('button', 'edit-btn', 'Edit');
            const completeButton = createElement('button', 'complete-btn', 'Mark as complete');
            article.appendChild(h4);
            article.appendChild(p1);
            article.appendChild(p2);
            li.appendChild(article);
            li.appendChild(editButton);
            li.appendChild(completeButton);
            ul.appendChild(li);
            counter++;
            progressCount.textContent = counter;
            firstName.value = ''; lastName.value = ''; age.value = ''; description.value = '';


            editButton.addEventListener('click', () => {
                [firstName.value, lastName.value] = h4.textContent.split(' ');
                [gender.value, age.value] = p1.textContent.split(', ');
                description.value = p2.textContent.replace('Dish description: ', '');
                li.remove();
                counter--;
                progressCount.textContent = counter;
            })


            completeButton.addEventListener('click', () => {
                const finishedUl = document.getElementById('finished');
                li.remove();
                editButton.remove();
                completeButton.remove();
                finishedUl.appendChild(li);
                counter--;
                progressCount.textContent = counter;
            })
        }
    })

    clearButton.addEventListener('click', () => {
        Array.from(document.querySelectorAll('#finished li'))
            .forEach(li => li.remove());
    })

    function createElement(type, htmlClass, text) {
        const newElement = document.createElement(type);

        if (htmlClass) {
            newElement.classList.add(htmlClass);
        }

        if (text) {
            newElement.textContent = text;
        }
        return newElement;
    }
}