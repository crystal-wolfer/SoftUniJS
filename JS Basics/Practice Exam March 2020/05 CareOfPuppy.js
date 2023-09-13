function careOfPuppy(input){
    let availableFood = Number(input[0]);
    let foodInGrams = availableFood*1000;

    let index = 1;
    let command = input[index];
    let foodPerFeed = "";
    let totalFoodEaten = 0;

    while (command!== "Adopted"){
        foodPerFeed = Number(input[index]);
        totalFoodEaten += foodPerFeed; 
        index++;
        command = input[index];
    }

    if (totalFoodEaten <= foodInGrams){
        let leftovers = foodInGrams - totalFoodEaten;
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
        return;
    } else {
        let neededFood = totalFoodEaten - foodInGrams;
        console.log(`Food is not enough. You need ${neededFood} grams more.`);

    }

}
careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


