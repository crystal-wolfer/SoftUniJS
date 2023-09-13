function output(input){
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMin = Number(input[3]);
    
    let examHourToMin = examHour * 60 + examMin;
    let arriveHourToMin = arriveHour * 60 + arriveMin;
   
    let totalDiffTime = Math.abs(examHourToMin - arriveHourToMin);
    let diffHour = Math.floor(totalDiffTime / 60);
    let diffMin = totalDiffTime % 60;

    if (examHourToMin === arriveHourToMin){
        console.log("On time");
    } else if (examHourToMin < arriveHourToMin){
        console.log("Late");
        if (totalDiffTime < 60){
            console.log(`${totalDiffTime} minutes after the start`);
        } else {
            if (diffMin < 10){
                console.log(`${diffHour}:0${diffMin} hours after the start`); 
            } else {
                console.log(`${diffHour}:${diffMin} hours after the start`);
            }
        }
    } else {
        if (totalDiffTime <= 30){
            console.log("On time");
            console.log(`${totalDiffTime} minutes before the start`);
        } else {
            console.log("Early");
            if (totalDiffTime < 60){
                console.log(`${totalDiffTime} minutes before the start`);
            } else {
                if (diffMin < 10){
                    console.log(`${diffHour}:0${diffMin} hours before the start`); 
                } else {
                    console.log(`${diffHour}:${diffMin} hours before the start`);
                }
            }
        }
    }
}
        
output(["9",

"00",

"8",

"30"]);