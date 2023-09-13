function travAgency(input){
    let city = input[0];
    let packType = input[1];
    let discountVIP = input[2];
    let numberOfNights = Number(input[3]);

    // Additional valriables:
    let totalPrice = 0;
    let finalDiscount = 0;
    let pricePerNight = 0;


    if (numberOfNights < 1){
        console.log (`Days must be positive number!`);
        return;
    }

    switch(city){
        case "Bansko":
            switch(packType){
                case "withEquipment":
                    pricePerNight = 100;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.1; // 10% discount    
                    } else {
                        finalDiscount = 0;
                    }
                break;
                

                case "noEquipment":
                    pricePerNight = 80;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.05; // 5% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                default: console.log (`Invalid input!`); 
                return;
            }
        break;

        case "Borovets":
            switch(packType){
                case "withEquipment":
                    pricePerNight = 100;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.1; // 10% discount    
                    } else {
                        finalDiscount = 0;
                    }
                break;

                case "noEquipment":
                    pricePerNight = 80;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.05; // 5% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                default: console.log (`Invalid input!`); 
                return;
            }
        break;

        case "Varna":
            switch(packType){
                case "withBreakfast":
                    pricePerNight = 130;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.12; // 12% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                case "noBreakfast":
                    pricePerNight = 100;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.07; // 7% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                default: console.log (`Invalid input!`); 
                return;
            }
        break;

        case "Burgas":
            switch(packType){
                case "withBreakfast":
                    pricePerNight = 130;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.12; // 12% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                case "noBreakfast":
                    pricePerNight = 100;
                    if (discountVIP === "yes"){
                        finalDiscount = 0.07; // 7% discount    
                    }else {
                        finalDiscount = 0;
                    }
                break;

                default: console.log (`Invalid input!`); 
                return;
            }
        break;

        default: console.log (`Invalid input!`); 
        return;
    }

    if(numberOfNights > 7){
        numberOfNights -= 1;
    }


    totalPrice = (pricePerNight - (pricePerNight * finalDiscount)) * numberOfNights;


    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);


}
travAgency(["Gabrovo",
"noBreakfast",
"no",
"3"])




