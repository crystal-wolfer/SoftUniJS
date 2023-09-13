function familyTrip(input){
    let budget = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentAddSpending = Number(input[3]);

    if (numberOfNights > 7){
        pricePerNight = pricePerNight*0.95 
    }

    let totalPriceStay = numberOfNights * pricePerNight;
    let percentSpending = percentAddSpending/100;
    let totalSpending = budget*percentSpending;

    let finalPrice = totalPriceStay + totalSpending;
    
    if (budget < finalPrice){
        let moneyNeeded = finalPrice - budget;
        console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
    } else{
        let moneyRemain = budget - finalPrice;
        console.log(`Ivanovi will be left with ${moneyRemain.toFixed(2)} leva after vacation.`);
    }


}
familyTrip(["500",
"7",
"66",
"15"]);


//ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.