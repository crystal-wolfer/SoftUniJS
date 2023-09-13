function nameGame(input){
    let index = 0;
    let currentName = input[index];
    index++;
    let guesNum = input[index];
    let sum = 0
    let winnerSum = Number.MIN_SAFE_INTEGER
    let winnerName = ""
 
    while (currentName !== "Stop") {
        let nameLength = currentName.length;
        for (let x = 0; x < nameLength; x++) {
            guesNum = Number(input[index]);
            let letterAski = currentName.charCodeAt(x);
            if (guesNum === letterAski) {
                sum += 10;
            } else {
                sum += 2
            }
            index++;
            guesNum = input[index]
        }
        if (sum >= winnerSum) {
            winnerName = currentName;
            winnerSum = sum
        }
        currentName = input[index];
        index++
        sum = 0
    }
 
    console.log(`The winner is ${winnerName} with ${winnerSum} points!`)
 
}
nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])
;

 