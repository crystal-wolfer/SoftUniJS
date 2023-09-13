function coffee(input){
    let drink = input[0];
    let sugarLevel = input[1];
    let numDrinks = Number(input[2]);
    let pricePerDrink = 0;
    let totalPrice = 0;


    switch (drink) {
        case "Espresso":
            if (sugarLevel === "Without"){
                pricePerDrink = 0.9;                
            } else if (sugarLevel === "Normal"){
                pricePerDrink = 1;
            } else {
                pricePerDrink = 1.2;
            }
        break;

        case "Cappuccino":
            if (sugarLevel === "Without"){
                pricePerDrink = 1;                
            } else if (sugarLevel === "Normal"){
                pricePerDrink = 1.2;
            } else {
                pricePerDrink = 1.6;
            }
        break;

        case "Tea":
            if (sugarLevel === "Without"){
                pricePerDrink = 0.5;                
            } else if (sugarLevel === "Normal"){
                pricePerDrink = 0.6;
            } else {
                pricePerDrink = 0.7;
            }
        break;
    }

    totalPrice = numDrinks * pricePerDrink;

    if(sugarLevel === "Without"){
        totalPrice *= 0.65;
        
    }

    if (numDrinks >= 5 && drink === "Espresso"){
        totalPrice *= 0.75;
    }

    if (totalPrice > 15){
        totalPrice *= 0.8;
    }



    console.log(`You bought ${numDrinks} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);
}
coffee(["Tea",
"Extra",
"3"])



//•	При избрана напитка без захар има 35% отстъпка.
//•	При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка
//•	При сума надвишава 15 лева, 20% отстъпка от крайната цена,  