function output(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);
    let swimmingTime = distance*time;

    let delay = Math.floor(distance / 15)
    let totalDelay = delay * 12.5; 
   
    let totalTime = swimmingTime + totalDelay;

    if (totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else{
        let secondsNeeded = totalTime - record;
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);

    }

}
output(["10464","1500","20"])