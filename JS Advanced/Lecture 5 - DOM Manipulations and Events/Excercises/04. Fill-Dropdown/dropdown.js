function addItem() {
    // this is how to append a new item in the dropdown
    //<option value="option1">Option1</option>

    // capture elements
    const addItemBtn = document.querySelector('input[type=button]');
    const textField = document.querySelector('#newItemText');
    const valueField = document.querySelector('#newItemValue');
    const dropDownMenu = document.querySelector('#menu');


    addItemBtn.addEventListener('click',addItemDropdown());

    function addItemDropdown(){
        let option = document.createElement('option');
        option.value = valueField.value;
        option.textContent = textField.value;
        dropDownMenu.appendChild(option);

        textField.value = '';
        valueField.value = '';
    }
}