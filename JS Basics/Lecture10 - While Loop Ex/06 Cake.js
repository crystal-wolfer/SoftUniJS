function cake(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let squareCake = a*b;
    let currentPieces = 0;
    let index = 2;

    while (squareCake >= 0){
        currentPieces = input[index];
           
        if(currentPieces === "STOP"){
            console.log(`${squareCake} pieces are left.`);
            return;
        }

        squareCake -= currentPieces;
        index++;    
    }

    console.log(`No more cake left! You need ${Math.abs(squareCake)} pieces more.`);  


}
cake(["10",

"2",

"2",

"4",

"6",
"9",
"STOP"]);