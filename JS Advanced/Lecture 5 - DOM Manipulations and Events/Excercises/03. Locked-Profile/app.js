function lockedProfile() {
    // capture elements
    const showMoreBtns = document.querySelectorAll('button')
    let showMoreBtnsArr = Array.from(showMoreBtns);

    //add event listeners to all buttons
    showMoreBtnsArr.forEach( btn => btn.addEventListener('click', showMoreHandler));

    console.log(showMoreBtns);

    function showMoreHandler(eventParams) {
        let lockedRadioBtn = eventParams.target.parentElement.children[2]; // the locked radio button
        let unlockedRadioBtn = eventParams.target.parentElement.children[4]; // the unlocked radio button
        let divHidden = eventParams.target.parentElement.children[9]; // the hidden div
        // always set the button to enabled state
        eventParams.target.disabled = false;

        // check if the locked radio button is checked and if the div is displayed then disable the button
        if (lockedRadioBtn.checked === true && divHidden.syle.disabled === 'block') {
            eventParams.target.disabled = true;
        }

        // if the unlocked radio button is checked and the div is hidden show it and change the button text
        if (unlockedRadioBtn.checked === true && divHidden.style.display === '') {
            divHidden.style.display = 'block';
            eventParams.target.textContent = 'Hide it'
        } else {
            // if the unlocked radio button is checked but the div is shown, hide it and change the button text again
            divHidden.style.display = '';
            eventParams.target.textContent = 'Show more';
        }
    }

}