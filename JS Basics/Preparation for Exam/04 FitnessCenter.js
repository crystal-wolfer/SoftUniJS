function fitnessCenter(input){
    let numOfClients = Number(input[0]);
    let index = 0;
    let command = input[index];
    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;

    for (let index = 1; index < numOfClients+1; index++) {
        command = input[index];
        
        if (command === "Back") {
            countBack++;
        } else if (command === "Chest") {
            countChest++;
        } else if (command === "Legs") {
            countLegs++;
        } else if (command === "Abs") {
            countAbs++;
        } else if (command === "Protein shake") {
            countProteinShake++;
        } else if (command === "Protein bar") {
            countProteinBar++;
        }

    }
    
    let proteinProduct = countProteinShake + countProteinBar;
    let peopleWorkingOut = countBack + countChest + countLegs + countAbs;

    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${((peopleWorkingOut/numOfClients*100)).toFixed(2)}% - work out`);
    console.log(`${((proteinProduct/numOfClients)*100).toFixed(2)}% - protein`);


}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])
;
