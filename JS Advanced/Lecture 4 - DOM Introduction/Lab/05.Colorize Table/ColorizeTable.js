function colorize() {
    let rows = document.getElementsByTagName('tr');
    let rowsArray = Array.from(rows);

    for (let i = 1; i < rowsArray.length; i+=2) {
        rowsArray[i].style.background =  "teal";
    }
    
}