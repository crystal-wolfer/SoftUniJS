function easterCompetition(input){
    let numOfParticipants = Number(input[0]);
    let index = 1;
    let command = input[index];
    let counterPoints = 0;
    let participantsCounter = 0;
    let maxPoints = 0;
    let bestBaker = ""; 


    while (participantsCounter < numOfParticipants){
        command = input[index];
        let curParticipant = input[index];
        index++;
        while (command!== "Stop"){
            let points = Number(input[index]);
            counterPoints += points;
            index++;
            command = input[index];          
        } // end while1
        participantsCounter++;
        let curParticipantPoints = Number(counterPoints);        
        console.log(`${curParticipant} has ${curParticipantPoints} points.`);
        counterPoints = 0;
        index++;
        
        if (curParticipantPoints > maxPoints){
            maxPoints = curParticipantPoints;
            console.log(`${curParticipant} is the new number 1!`);
            bestBaker = curParticipant;            
        }
    } // end while2    
    console.log(`${bestBaker} won competition with ${maxPoints} points!`);

}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])


