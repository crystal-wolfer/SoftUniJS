function catWalking(input){
    let minPerWalk = Number(input[0]);
    let numOfWalks = Number(input[1]);
    let calorieIntake = Number(input[2]);

    let totalMinWalked = minPerWalk * numOfWalks;
    let totalCalories = totalMinWalked * 5;
    let calGoal = Math.ceil(calorieIntake/2);


    if (totalCalories >= calGoal){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    } else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);
    }


}
catWalking(["15",
"2",
"500"])

