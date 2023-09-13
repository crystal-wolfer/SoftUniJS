function output(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanNumber = Number(input[2]);
    let price = 0;
    let priceTotal = 0;
    let moneyLeft = 0;
    let moneyNeeded = 0;
    
    switch (season) {
        case "Spring":
            price = 3000;

            if (fishermanNumber <= 6){
                priceTotal = price - (price*0.1);
            } else if (fishermanNumber >= 7 && fishermanNumber<= 11){
                priceTotal = price - (price*0.15);
            } else {
                priceTotal = price - (price*0.25);
            }

            if (fishermanNumber % 2 === 0){
                priceTotal = priceTotal - (priceTotal*0.05);
            } 

            if (budget >= priceTotal){
                moneyLeft = budget - priceTotal;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyNeeded = priceTotal - budget
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        break;  

        case "Summer":
            price = 4200;

            if (fishermanNumber <= 6){
                priceTotal = price - (price*0.1);
            } else if (fishermanNumber >= 7 && fishermanNumber<= 11){
                priceTotal = price - (price*0.15);
            } else {
                priceTotal = price - (price*0.25);
            }

            if (fishermanNumber % 2 === 0){
                priceTotal = priceTotal - (priceTotal*0.05);
            } 

            if (budget >= priceTotal){
                moneyLeft = budget - priceTotal;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyNeeded = priceTotal - budget
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        break;
        
        case "Autumn":
            price = 4200;

            if (fishermanNumber <= 6){
                priceTotal = price - (price*0.1);
            } else if (fishermanNumber >= 7 && fishermanNumber<= 11){
                priceTotal = price - (price*0.15);
            } else {
                priceTotal = price - (price*0.25);
            }

            //Not valid when Autumn
            /*if (fishermanNumber % 2 == 0){
                priceTotal = priceTotal - (priceTotal*0.05);
            }*/ 

            if (budget >= priceTotal){
                moneyLeft = budget - priceTotal;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyNeeded = priceTotal - budget
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        break;

        case "Winter":
            price = 2600;

            if (fishermanNumber <= 6){
                priceTotal = price - (price*0.1);
            } else if (fishermanNumber >= 7 && fishermanNumber<= 11){
                priceTotal = price - (price*0.15);
            } else {
                priceTotal = price - (price*0.25);
            }

            if (fishermanNumber % 2 === 0){
                priceTotal = priceTotal - (priceTotal*0.05);
            } 

            if (budget >= priceTotal){
                moneyLeft = budget - priceTotal;
                console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
            } else {
                moneyNeeded = priceTotal - budget
                console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
            }
        break;  
    
    }
}
output(["2000", "Spring", "8"]);
