 function output(input){
    let month = input[0];
    let numberOfDays = Number(input[1]);
    let priceAppartment = 0;
    let priceStudio = 0;

    switch (month) {
        case "May":
        case "October":
            if (numberOfDays > 7 && numberOfDays <= 14) {
                priceStudio = (numberOfDays*50) * 0.95;
                priceAppartment = numberOfDays*65;
            }  else if (numberOfDays > 14) {
                priceStudio = (numberOfDays*50) * 0.7;
                priceAppartment = (numberOfDays*65) * 0.9;
            } else {
                priceStudio = numberOfDays*50;
                priceAppartment = numberOfDays*65;
            }
        break;
        case "June":
        case "September":
            if (numberOfDays > 14) {
                priceStudio = (numberOfDays*75.2) * 0.8;
                priceAppartment = (numberOfDays*68.7) * 0.9;
            }  else {
                priceStudio = numberOfDays*75.2;
                priceAppartment = numberOfDays*68.7;
            }
        break;

        case "July":
        case "August":
            if (numberOfDays > 14) {
            priceStudio = numberOfDays*76;
            priceAppartment = (numberOfDays*77) * 0.9;
            }  else {
                priceStudio = numberOfDays*76;
                priceAppartment = numberOfDays*77;
            }
        break;
    }
        console.log(`Apartment: ${priceAppartment.toFixed(2)} lv.`);
        console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
        
    }
 output(["August", "20"]);