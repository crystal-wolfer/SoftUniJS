function trekking(input){
    let numGroups = Number(input[0]);
    let sum = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i < input.length; i++){
        let currNumInGroup = input[i];
        sum = Number(sum) + Number(currNumInGroup); // Returns the total number of people going on the hiking
        //console.log(currNumInGroup);
        
        if (currNumInGroup < 6){
           musala = Number(musala) + Number(currNumInGroup); //Calculates number of people that will climb Musala
        } else if (currNumInGroup < 13){
           monblan = Number(monblan) + Number(currNumInGroup); //Calculates number of people that will climb Monblan
        } else if (currNumInGroup < 26){
           kilimanjaro = Number(kilimanjaro) + Number(currNumInGroup); // Calculates number of people that will climb Kilimanjaro
        } else if (currNumInGroup < 41){
           k2 = Number(k2) + Number(currNumInGroup); // Calculates number of people that will climb K2
        } else {
           everest = Number(everest) + Number(currNumInGroup); // Calculates number of people that will climb Everest
        }
    }  
        console.log((musala/sum*100).toFixed(2) + "%"); 
        console.log((monblan/sum*100).toFixed(2) + "%");
        console.log((kilimanjaro/sum*100).toFixed(2) + "%");
        console.log((k2/sum*100).toFixed(2) + "%");
        console.log((everest/sum*100).toFixed(2) + "%");
}
trekking(["5","25","41","31","250","6"])