  function cleverLili(input){ 
    let age = Number(input[0]);
    let washMachinePrice = Number(input[1]);
    let priceOneToy = Number(input[2]);
    let sumMoney = 0;
    
    let totalMoneyToys = 0;
    let evenMoney = 10;
    let totalMoneyBDay = 0;
   

    for (let i = 1; i <= age; i++){
        if (i % 2 === 0){
            totalMoneyBDay += evenMoney;
            totalMoneyBDay -= 1
            evenMoney += 10;   
        } else {
            totalMoneyToys += priceOneToy;
        }

        sumMoney = totalMoneyBDay + totalMoneyToys;
    } 

    if (sumMoney >= washMachinePrice){
        let moneyLeft = sumMoney - washMachinePrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);      
    } else {
        let moneyNeeded = washMachinePrice - sumMoney;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}    
  cleverLili(["21",

  "1570.98",
  
  "3"]);