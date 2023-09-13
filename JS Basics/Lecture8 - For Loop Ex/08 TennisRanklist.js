function tennis(input){
    let numberOfTournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let wonPoints = 0;
    let totalPoints = 0;
    let wins = 0;

    for (let i = 2; i < input.length; i++){
        let currGame = input[i]; //Reads the value of the current game status
        //console.log(currGame);
        switch(currGame){
            case "W": 
            wonPoints = Number(wonPoints) + 2000; //Adds 2000pts to every W game
            wins ++;break; //Counts the number of W games
            case "F": wonPoints = Number(wonPoints) + 1200; break; //Adds 1200pts to every F game
            case "SF": wonPoints = Number(wonPoints) + 720; break; // Adds 720pt to every SF game
        }
    } 
    totalPoints = initialPoints + wonPoints
    console.log(`Final points: ${totalPoints}`);
    console.log("Average points: " + Math.floor(wonPoints/numberOfTournaments));
    console.log((wins/numberOfTournaments*100).toFixed(2)+"%");
}
tennis(["4",

"750",

"SF",

"W",

"SF",

"W"])