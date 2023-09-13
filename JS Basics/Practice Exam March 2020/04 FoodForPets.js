function foodForPets(input){
    let numOfDays = Number(input[0]);
    let totalFood = Number(input[1]);
    let totalFoodEaten = 0;
    let biscuitsCrr = 0;
    let biscuitsTotal = 0;
    let dayCounter = 0;
    let foodEaterDog = 0;
    let foodEaterCat = 0;




    for (let i = 2; i < (numOfDays*2)+2; i++) {

        let dogFoodEatenPerDay = Number(input[i]);
            totalFoodEaten += dogFoodEatenPerDay;
            foodEaterDog += dogFoodEatenPerDay;
        i++;

        let catFoodEatenPerDay = Number(input[i]);
            totalFoodEaten += catFoodEatenPerDay;
            foodEaterCat += catFoodEatenPerDay;

        dayCounter++;

            if(dayCounter % 3 === 0){
                biscuitsCrr = (dogFoodEatenPerDay+catFoodEatenPerDay)*0.1;
                biscuitsTotal += biscuitsCrr;
             }
           
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuitsTotal)}gr.`);
    console.log(`${(totalFoodEaten/totalFood*100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(foodEaterDog/totalFoodEaten*100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(foodEaterCat/totalFoodEaten*100).toFixed(2)}% eaten from the cat.`);


}
foodForPets(["7",
"5000",
"100",
"30",
"110",
"25",
"120",
"35",
"100",
"30",
"110",
"25",
"120",
"35",
"120",
"35"])

