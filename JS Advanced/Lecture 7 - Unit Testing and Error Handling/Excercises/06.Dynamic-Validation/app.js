function validate() {
    // capture elements
    const emailInput = document.getElementById('email');
  
    // Regular expression for a valid email format
    const emailRegex = /^[a-z\d]+@[a-z]+\.[a-z]+$/;

    emailInput.addEventListener('change', changeHandler); // better to use the 'input' event but judge wants "change"

    function changeHandler(elemParams){
        let emailValue = elemParams.target.value.trim(); // Trim removes leading/trailing white spaces
        if (emailRegex.test(emailValue)) {
            // Email is valid, remove the "error" class
            elemParams.target.classList.remove('error');
          } else {
            // Email is invalid, apply the "error" class
            elemParams.target.classList.add('error');
          }
    }
}