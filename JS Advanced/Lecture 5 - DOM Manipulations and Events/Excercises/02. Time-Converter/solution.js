function attachEventsListeners() {
    const btns = document.querySelectorAll('input[type= button]');
    const inputs = document.querySelectorAll('input[type= text]');
    const btnArray = Array.from(btns);
    const inputArray = Array.from(inputs);

    btnArray.forEach(btn => btn.addEventListener('click',convertHandler));

    function convertHandler(eventParams){
        let inputValue = Number(eventParams.target.parentElement.children[1].value); // takes the value of the input where the number is given
        let unit = eventParams.target.parentElement.children[1].id //the input fields have id same as the unit

        switch (unit){
            // the main unit will be 'day'
            case 'days': propagateValue(inputValue); break;
            case 'hours': propagateValue(inputValue/24); break; // converting the value to days
            case 'minutes': propagateValue(inputValue/24/60); break; // converting the value to days
            case 'seconds': propagateValue(inputValue/24/60/60); break; // converting the value to days
        }
    }

    function propagateValue(days){
        inputArray[0].value = days; // the 'days' input gets assigned the value
        let curValue = days * 24; // get how many hours

        // loop through the rest of the input fields to assign the new value (starting from the hours input)
        for (let i = 1; i < inputArray.length; i++) {
            let inputField = inputArray[i];
            inputField.value = curValue;
            curValue *= 60; // set the new value first for min and then for seconds
        }

    }
}