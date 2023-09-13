// Пъзел - 2.60 лв.
// Говореща кукла - 3 лв.
// Плюшено мече - 4.10 лв.
// Миньон - 8.20 лв.
// Камионче - 2 лв.

function output(input){
    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let priceTotal = ((puzzle*2.6) + (doll*3) + (bear*4.1) + (minion*8.2) + (truck*2));
    let numberOfToys = puzzle + doll + bear + minion + truck;
    let finalPrice = 0;
    let profit = 0; 
    let money = 0;
   
    if (numberOfToys >= 50){
        finalPrice = priceTotal - (priceTotal*0.25);
    } else {
        finalPrice = priceTotal;
    }

    profit = finalPrice - (finalPrice*0.1);
    money = profit - excursion;

    if (money >= 0) {
        console.log("Yes! " + money.toFixed(2) + " lv left.");
    } else {
        console.log("Not enough money! " + (excursion - profit).toFixed(2) + " lv needed.") ;
    }

}
output(["320","8","2","5","5","1"])