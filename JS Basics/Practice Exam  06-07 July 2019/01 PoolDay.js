function poolDay(input){
    let numProple = Number(input[0]);
    let entranceFeePerPerson = Number(input[1]);
    let pricePerLoungePerPerson = Number(input[2]);
    let pricePerUmbrellaPerPerson = Number(input[3]);

    let totalEntranceFee = 0;
    totalEntranceFee = numProple * entranceFeePerPerson;

    let totalPriceLounge = 0;
    let totalNumPropleLounge = Math.ceil(numProple*0.75);
    totalPriceLounge = totalNumPropleLounge * pricePerLoungePerPerson;

    let totalPriceUmbrella = 0;
    let totalNumPropleUm = Math.ceil(numProple/2);
    totalPriceUmbrella =totalNumPropleUm * pricePerUmbrellaPerPerson;

    let finalPrice = totalEntranceFee + totalPriceLounge + totalPriceUmbrella;

    console.log(`${finalPrice.toFixed(2)} lv.`);



}
poolDay(["21",
"5.50",
"4.40",
"6.20"]);
