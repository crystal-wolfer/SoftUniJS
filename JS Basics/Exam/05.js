function hairSalon(input){
    let targetMoney = Number(input[0]);

    let index = 1;
    let command = input[index];
    let currProfit = 0;

    while (command !== "closed"){
        command = input[index];
        let currType = input[index]; // взема типа услуга
        index++;
        let currSubType = input[index]; // взема типа под-услуга


        if (currType === "haircut"){ // проверка спрямо типа услуга в случай на услуга тип  "haircut"

            switch (currSubType){ // проверка спрямо съответната под-услуга
                case "mens": currProfit += 15; break;

                case "ladies": currProfit += 20; break;

                case "kids": currProfit += 10; break;
            }

        } else if (currType === "color"){ // проверка спрямо типа услуга в случай на услуга тип  "color"

            switch (currSubType){ // проверка спрямо съответната под-услуга
                case "touch up": currProfit += 20; break;

                case "full color": currProfit += 30; break;
            }
        }

        if (currProfit >= targetMoney){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${currProfit}lv.`);
            return;
        }
        index++;
    }

    if (currProfit >= targetMoney){
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${currProfit}lv.`);
    } else{
        let moneyNeeded = targetMoney - currProfit;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${currProfit}lv.`);
    }

}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

