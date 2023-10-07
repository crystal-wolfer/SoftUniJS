function validate() {
    // capture elements
    const userName = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confPass = document.querySelector('#confirm-password');
    const companyCheckBox = document.querySelector('#company');
    const companyInfo = document.querySelector('#companyInfo');
    const companyPhone = document.querySelector('#companyNumber');
    const submitBtn = document.querySelector('#submit');
    const validDiv = document.querySelector('#valid');

    // regex patterns to match against the input fields
    const userNameRegex = /^[A-Za-z0-9]{3,20}$/;
    const passwordRegex = /^[\w]{5,15}$/;
    const emailRegex = /^[^@.]+@[^@]*\.[^@]*$/;

    //defining the booleans
    let validArr = [];


    // expanding the Company info block when the checkbox is checked
    companyCheckBox.addEventListener('change', element => {
        if (element.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })

    // validating all the input fields when the submit button is clicked
    submitBtn.addEventListener('click', submitValidation);

    function submitValidation(evtProp) {
        evtProp.preventDefault(); // prevent the reloading of the form
        //userName validation
        if (!userNameRegex.test(userName.value)) {
            userName.style.borderColor = "red";
            validArr.push(false);
        } else {
            validArr.push(true);
            userName.style.borderColor = "initial";
        }

        //email validation
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = "red";
            validArr.push(false);
        } else {
            validArr.push(true);
            email.style.borderColor = "initial";
        }

        //password validation
        if (!passwordRegex.test(password.value)) {
            password.style.borderColor = "red";
            validArr.push(false);
        } else {
            password.style.borderColor = "initial";
            validArr.push(true);
        }

        //confirm password validation
        if (password.value !== confPass.value || confPass.value === '' || password.value === '' || !passwordRegex.test(password.value) || !passwordRegex.test(confPass.value)) {
            confPass.style.borderColor = "red";
            password.style.borderColor = "red";
            validArr.push(false);
        } else {
            confPass.style.borderColor = "initial";
            password.style.borderColor = "initial";
            validArr.push(true);
        }

        //company phone validation
        if (companyCheckBox.checked) {
            // getting the phone as a number
            const phoneNumberAsNum = Number(companyPhone.value);
            if (phoneNumberAsNum < 1000 || phoneNumberAsNum > 9999) {
                companyPhone.style.borderColor = "red";
                validArr.push(false);
            } else {
                companyPhone.style.borderColor = "initial";
                validArr.push(true);
            }
        }

        // check if all input is valid
        if (validArr.includes(false)) {
            validDiv.style.display = 'none';
        }else {
            validDiv.style.display = 'block';
        }
    }

}
