function backToThePast(input) {
    let inheritedMoney = Number(input[0]);
    let yearToStay = Number(input[1]);
    let moneySpent = 0;
    let moneyLeft = 0;

 // Иванчо е на 18; Четна година: 12000; Нечетна година: 12000 + 50*текущите години

 for (let i = 1800; i <= yearToStay; i++) { //Преминава през всички години на престой
    if (i % 2 === 0) {
        moneySpent += 12000;       
    } else {
        moneySpent += (12000 + 50*(i-1800+18));
    }
    moneyLeft = inheritedMoney - moneySpent;
}    
    if(moneyLeft >= 0){
        console.log(`Yes! He will live a carefree life and will have ${moneyLeft.toFixed(2)} dollars left.`)
    } else {
        moneyLeft = Math.abs(moneyLeft);
        console.log(`He will need ${moneyLeft.toFixed(2)} dollars to survive.`) 
    }
}
backToThePast(["50000", "1802"]);