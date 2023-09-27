function addItem() {
    // capture elements
    const newItem = document.querySelector('#newItemText');
    const ulList = document.querySelector('#items');

    if (newItem.value !== "") {
    // create new element type li and assign value to it
    const newItemEl = document.createElement('li');
    newItemEl.textContent = newItem.value;

    // append the new item to the ullist and clear the input field
    ulList.appendChild(newItemEl);
    newItem.value = '';

    /*// add the [delete] link and attach the delete function
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    newItemEl.appendChild(deleteLink);
    deleteLink.addEventListener('click', () => {
        let parentEl = deleteLink.parentElement;
        parentEl.removeChild(deleteLink);
        parentEl.parentElement.removeChild(parentEl);
    });*/


    //2dn way to do the [delete] functionality
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    newItemEl.appendChild(deleteLink);
    deleteLink.addEventListener ('click', deleteItem);
    
    function deleteItem(eventProperties) {
        const element = eventProperties.target // takes the target element which is the the delete link 
        const parentEl = element.parentElement; // takes the parent element which is the li element
        parentEl.remove(element); // removes the li element
    }


    }

}
