function deleteByEmail() {
    // capture elements
    const inputField = document.querySelector('label input'); // input field
    const tableRows = document.querySelectorAll('table tbody tr'); // all table rows
    const printMessage = document.querySelector('#result') // the div that holds the result text
    
    // check if the email is in the table
    for (const row of tableRows) {
        let emailText = row.children[1].textContent;
        if(inputField.value === emailText) {
            row.parentElement.removeChild(row);
            printMessage.textContent = "Deleted";
            return;
        }

        // if there are no rows that match the email
        printMessage.textContent = "Not found.";
    }
    
}