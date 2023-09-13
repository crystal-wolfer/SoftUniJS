function oscars(input){
    let nomenee = input[0];
    let points = Number(input[1]); // Starting points value
    
    for (let i = 3; i < input.length; i+=2){
        let currName = input[i]; // Reads the names of the judges
        let nameLength = currName.length;
        points = points + ((nameLength * Number(input[i+1])) / 2); 
        
        if (points >= 1250.5){
            console.log(`Congratulations, ${nomenee} got a nominee for leading role with ${points.toFixed(1)}!`);
           break; 
        } 
    
    } if (points < 1250.5){
        let diff = 1250.5 - points;
        console.log(`Sorry, ${nomenee} you need ${diff.toFixed(1)} more!`);
    } 
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", 
"Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])