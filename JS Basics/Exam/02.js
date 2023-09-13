function braceletStant(input){
    let dailyAllowance = Number(input[0]);
    let dailyProfit = Number(input[1]);
    let totalSpendings = Number(input[2]);
    let presentPrice = Number(input[3]);

    let totalMoneySavedAllowance = dailyAllowance * 5;
    let totalMoneyProfited = dailyProfit * 5;

    let totalMoneySaved = totalMoneySavedAllowance + totalMoneyProfited;
    let totalMoneyAvailable = totalMoneySaved - totalSpendings;

    if(totalMoneyAvailable >= presentPrice){
        console.log(`Profit: ${(totalMoneyAvailable).toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let moneyNeeded = presentPrice - totalMoneyAvailable;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }

}
braceletStant(["15.20",
"200.00",
"7.30",
"1500.12"])



// 5 дни остават