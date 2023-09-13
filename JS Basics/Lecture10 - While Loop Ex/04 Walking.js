function steps(input){
    let index = 0;
    let stepsPerSession = "";
    let totalSteps = 0;

    while(totalSteps <= 10000){
        stepsPerSession = Number(input[index]);
        if (isNaN(stepsPerSession)){ // Checks if input is not a number meaning that input is text
            stepsPerSession = Number(input[index+1]);
            totalSteps += stepsPerSession;   
            if (totalSteps >= 10000){
                console.log(`Goal reached! Good job!\n${totalSteps - 10000} steps over the goal!`);
            return;
            } else{
                let stepsLeft = 10000 - totalSteps;
                console.log(`${stepsLeft} more steps to reach goal.`);
            return;
            }
        
        }
        totalSteps += stepsPerSession;
        index++;

    }
    console.log(`Goal reached! Good job! \n${totalSteps - 10000} steps over the goal!`);
        
}
steps(["1000",

"1500",

"2000",

"6500"])