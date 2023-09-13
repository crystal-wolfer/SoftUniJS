function footballTournament(input){
// W = 3pts  D = 1pts  L = 0pts

    let team = input[0];
    let gamesPlayed = Number(input[1]);

    if (gamesPlayed <= 0) {
        console.log(`${team} hasn't played any games during this season.`);
        return;
    }

    let command = "";
    let totalPoints = 0;
    let counterW = 0;
    let counterD = 0;
    let counterL = 0;   

    for (let index = 0; index < gamesPlayed; index++) {
        command = input[index+2];

        if (command === "W") {
            totalPoints += 3;
            counterW ++;
        } else if (command === "D") {
            totalPoints += 1;
            counterD ++;
        } else {
            counterL ++;
        }

    }

    console.log(`${team} has won ${totalPoints} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${counterW}`);
    console.log(`## D: ${counterD}`);
    console.log(`## L: ${counterL}`);
    console.log(`Win rate: ${(counterW/gamesPlayed*100).toFixed(2)}%`);    

}
footballTournament(["Chelsea",
"0"])

;