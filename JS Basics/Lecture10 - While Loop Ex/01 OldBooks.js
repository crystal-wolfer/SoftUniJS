function oldBooks(input){
    let searchedBook = input[0];


    let index = 1; 
    let libraryContents = input[index];
    let booksCounter = 0;

    while ( libraryContents !== "No More Books"){
        libraryContents = input[index];
        booksCounter++;
               
        if (libraryContents === searchedBook){
            console.log(`You checked ${booksCounter - 1 } books and found it.`);
            break;          
        } 
        index++;        
    }

    if (libraryContents === "No More Books"){
        console.log(`The book you search is not here! \nYou checked ${booksCounter - 1 } books.`);
        
    } 

}
oldBooks(["The Spot",

"Hunger Games",

"Harry Potter",

"Torronto",

"Spotify",

"No More Books"])