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
    }
}