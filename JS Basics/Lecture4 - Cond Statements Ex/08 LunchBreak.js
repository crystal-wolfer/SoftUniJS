function output(input){
    let seriesName = input[0];
    let seriesLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let lunchTime = breakLength / 8;
    let restTime = breakLength / 4;

    let timeForSeries = breakLength - lunchTime - restTime;

    if (seriesLength > timeForSeries) {
        let timeNeeded = Math.ceil(seriesLength - timeForSeries);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${timeNeeded} more minutes.`);
    } else {
        let timeLeft = Math.ceil(timeForSeries - seriesLength);
        console.log(`You have enough time to watch ${seriesName} and left with ${timeLeft} minutes free time.`);
    }

} 

output(["Teen Wolf",

"48",

"60"])