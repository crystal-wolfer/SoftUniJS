function vacation(input){
    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let index = 2;

    let action = input[index];
    let amountCurr = Number(input[index]);
    let counterDays = 0;
    let couterConsecutive = 0;


    while (moneyAvailable < moneyNeeded){
        action = input[index];
        counterDays ++;
        index ++;
        amountCurr = Number(input[index]);

        if (action === "spend"){
            couterConsecutive++;
            if (couterConsecutive === 5){
                console.log(`You can't save the money.\n${counterDays}` );
                return;
            }
            
            moneyAvailable = moneyAvailable - amountCurr;

           if (moneyAvailable <= 0){
            moneyAvailable = 0;            
           }            
        } else{
            couterConsecutive = 0;
            moneyAvailable = moneyAvailable + amountCurr;
        }

        if (moneyAvailable === moneyNeeded){
            break;        
        }

        index++;
    }

    if (moneyAvailable >= moneyNeeded /*&& input[index+1]!== "spend"*/){
        console.log(`You saved the money for ${counterDays} days.`);
    }
}
vacation(["100",
"50",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"50",
"save", "10", "save", "50"])
 





/* (["2000",

"1000",

"spend",

"1200",

"save",

"2000"])
*/