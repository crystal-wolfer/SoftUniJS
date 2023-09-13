function output(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let priceClothes = Number(input[2]);
    let clothes = extras * priceClothes;
    let decore = budget*0.1;
    let totalClothes = 0;
    
    if (extras >= 150){
        totalClothes = clothes - (clothes*0.1);
    } else {
        totalClothes = clothes;
    }

    let totalMoneyCost = totalClothes + decore;
    let moneyLeft = budget - totalMoneyCost;

    if (moneyLeft >= 0){
        console.log("Action!");
        console.log("Wingard starts filming with " + moneyLeft.toFixed(2) + " leva left.");
    } else{
        console.log("Not enough money!");
        console.log("Wingard needs " + (totalMoneyCost-budget).toFixed(2) + " leva more.");

    }
    
    // console.log(decore);
    // console.log(totalClothes);
    // console.log(totalMoneyCost);

}

output(["9587.88","222","55.68"])