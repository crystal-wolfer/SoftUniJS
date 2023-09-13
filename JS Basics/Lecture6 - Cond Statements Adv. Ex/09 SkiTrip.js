function skiTrip(input){
    let stay = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let nightsCount = stay - 1;
    let price = 0;
        
    
    switch (roomType){
        case "room for one person":
        price = nightsCount * 18;
        break;

        case "apartment":{
            if (stay < 10){
                price = (nightsCount * 25) * 0.7;
            } else if (stay >= 10 && stay <= 15){
                price = (nightsCount * 25) * 0.65;
            } else {
                price = (nightsCount * 25) * 0.5;
            }
        } break;

        case "president apartment":{
            price = (nightsCount * 35);

            if (stay < 10){
                price *= 0.9;
            } else if (stay >= 10 && stay <= 15){
                price *= 0.85;
            } else {
                price *= 0.8;
            }
        } break;
        
    }

    if (rating === "positive"){
        price *= 1.25;
    } else {
        price *= 0.9;
    }
    console.log(price.toFixed(2));
    
}

skiTrip(["30", "president apartment", "negative"]);