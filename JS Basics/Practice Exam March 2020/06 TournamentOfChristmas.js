function tournament(input){
    let numOfDays = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counterDays = 0;
    let moneyPerDay = 0;
    let money = 0;
    let counterW = 0;
    let counterL = 0;
    let counterWDays = 0;
    let counterLDays = 0;


    while (counterDays < numOfDays){
        command = input[index];
            while (command !== "Finish"){
                index++;
                command = input[index]; // W or L
                    if (command === "win"){
                        moneyPerDay += 20;
                        counterW++;                        
                    } else{
                        counterL++;
                    }

                index++;
                command = input[index];
            }
        if (counterW > counterL){
            counterWDays++;
            money = money + moneyPerDay + (moneyPerDay * 0.10);
        }else {
            counterLDays++;
            money += moneyPerDay

        }
        counterDays++;
        counterW = 0;
        counterL = 0;
        moneyPerDay = 0;
        index++;

        
    }

    if(counterWDays > counterLDays){
        money = money + (money * 0.2);
    }

   if (counterWDays > counterLDays){
    console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    return;   
   } else{
    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
   }

}
tournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

