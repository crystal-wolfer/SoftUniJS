function club(input){
    let proffit = Number(input[0]);
    let totalPrice = 0;
    
    let index = 1;
    let command = input[index];
    
    while(command !== "Party!"){
        command = input[index];

        if (command === "Party!"){
            break;
        }
        
        let cocktailPrice = Number(command.length);
        index++;

        let numOfDrinks = Number(input[index]);
        let curPrice = cocktailPrice*numOfDrinks;

        if(curPrice % 2 !== 0){
            curPrice = curPrice*0.75;
        }

        totalPrice += curPrice;
        if (totalPrice >= proffit){
            console.log(`Target acquired.`);
            break;
        }

        index++;

    }

    if(totalPrice < proffit){
        let neededMoney = proffit - totalPrice;
        console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
    }

    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
    

}
club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
