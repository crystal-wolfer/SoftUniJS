function logistics(input){
    let microbusPrice = 0;
    let truckPrice = 0;
    let trainPrice = 0;
    let sumPrice = 0;
    let microbusSum = 0; // общо тонове за микробус
    let truckSum = 0; // общо тонове за камион
    let trainSum = 0; // общо тонове за влак
    let totalSumTonnes = 0;

    for (let i = 1; i <= input.length-1; i++){ //Цикъл въртящ всеки товар
        let currNum = input[i];
        
        if (input[i] <= 3){
            microbusPrice = microbusPrice + (Number(input[i])*200);
            microbusSum = microbusSum + Number(currNum);
        } else if (input[i] <= 11){
            truckPrice = truckPrice + (Number(input[i])*175);
            truckSum = truckSum + Number(currNum);
        } else {
            trainPrice = trainPrice + (Number(input[i])*120);
            trainSum = trainSum + Number(currNum);
        }
    sumPrice = microbusPrice + truckPrice + trainPrice;
    totalSumTonnes = microbusSum + truckSum + trainSum;    
    }

    console.log((sumPrice/totalSumTonnes).toFixed(2));
    console.log((microbusSum/totalSumTonnes*100).toFixed(2) + "%");
    console.log((truckSum/totalSumTonnes*100).toFixed(2) + "%");
    console.log((trainSum/totalSumTonnes*100).toFixed(2) + "%");
} 

logistics(["5", "2", "10", "20", "1", "7"])