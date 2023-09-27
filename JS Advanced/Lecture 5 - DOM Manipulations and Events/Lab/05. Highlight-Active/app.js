function focused() {
    // capture elements
    const inputs = document.querySelectorAll('input'); // capturing the input fields

    for (const input of inputs) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler);
    }

    function focusHandler(elementParams) {
        const elParent = elementParams.target.parentElement; // the parent element of the input which is the div
        elParent.classList.add('focused');
    }
    
    function blurHandler(elementParams) {
        const elParent = elementParams.target.parentElement; // the parent element of the input which is the div
        elParent.classList.remove('focused');
    }
}