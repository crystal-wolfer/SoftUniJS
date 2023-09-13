function output(input){
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    let place = 0;
    let typeVacation = 0;


    if (budget <= 100){
        place = "Bulgaria";
        if (season === "summer"){
            price = budget*0.3;
        } else {
            price = budget*0.7;
        }
    } else if (budget > 100 && budget <= 1000){
        place = "Balkans";
        if (season === "summer"){
            price = budget*0.4;
        } else {
            price = budget*0.8;
        }
    } else {
        place = "Europe";
        price = budget*0.9;
    }

    console.log(`Somewhere in ${place}`);

    
    if (place === "Europe"){
        typeVacation = "Hotel";
        console.log(`${typeVacation} - ${price.toFixed(2)}`);
           
    } else if (season === "summer"){
        typeVacation = "Camp";
        console.log(`${typeVacation} - ${price.toFixed(2)}`);
    } else {
        typeVacation = "Hotel";
        console.log(`${typeVacation} - ${price.toFixed(2)}`);
    }
    

}

output(["1500", "summer"]);