function safari(input){
    let budget = Number(input[0]);
    let gasQuantity = Number(input[1]);
    let dayOfWeek = input[2];

    let gasPrice = gasQuantity * 2.1;
    let guidePrice = 100;

    let finalPrice = gasPrice + guidePrice;

    if (dayOfWeek === "Saturday"){
        finalPrice = finalPrice * 0.9;        
 
    } else {
        finalPrice = finalPrice * 0.8;
    }
    
    if (finalPrice <= budget){
        let moneyLeft = budget - finalPrice;
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv. `);
        return;
        
    } else {
        let moneyNeeded = finalPrice - budget;
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
        return;
    } 

}
safari(["120",
"30",
"Saturday"]);

//Цената на един литър гориво е 2.10 лв.
//Цената за екскурзовод е 100лв.
//В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
