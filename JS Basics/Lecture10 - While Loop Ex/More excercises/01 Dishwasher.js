function dishwasher(input){
    let bottlesDet = Number(input[0]);
    let detergentQuantity = bottlesDet * 750;
    let currCycle = 0;
    let index = 1;
    let detNeededPerCycle = 0;
    let dishes = 0;
    let pots = 0;


    while (detergentQuantity >= 0){
        currCycle = input[index];

        if (currCycle === "End"){
            console.log(`Detergent was enough!\n${dishes} and ${pots} were washed.\nLeftover detergent: ${detergentQuantity} ml.`);
            return;
        }

        
        if (index % 3 === 0){
            detNeededPerCycle = Number(currCycle) * 15;
            pots +=  Number(currCycle); 
        } else{
            dishes += Number(currCycle);
            detNeededPerCycle = Number(currCycle) * 5;
        }

        
        detergentQuantity -= Number(detNeededPerCycle);
        index++;       
    }

    if (detergentQuantity < 0){
        console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
    } else{
        console.log(`Detergent was enough!\n${dishes} and ${pots} were washed.\nLeftover detergent: ${detergentQuantity} ml.`);
    }

}
dishwasher(["1","10","15","10", "12", "13", "30"]);

/* 
1 bottle = 750 ml
1 dish = 5 ml
1 pot = 15 ml
every 3rd cycle is only pots; all else is dishes
*/
