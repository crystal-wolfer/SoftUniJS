function energyBooster(input){
    let fruit = input[0];
    let packType = input[1];
    let numPacks = Number(input[2]);

    let pricePerPack = 0;


    switch (fruit) {
        case "Watermelon":
            if(packType === "small"){
                pricePerPack = 2*56;
            } else if (packType === "big"){
                pricePerPack = 5*28.7;
            }
        break;            

        case "Mango":
            if(packType === "small"){
                pricePerPack = 2*36.66;
            } else if (packType === "big"){
                pricePerPack = 5*19.6;
            }
        break; 

        case "Pineapple":
            if(packType === "small"){
                pricePerPack = 2*42.1;
            } else if (packType === "big"){
                pricePerPack = 5*24.8;
            }
        break; 

        case "Raspberry":
            if(packType === "small"){
                pricePerPack = 2*20;
            } else if (packType === "big"){
                pricePerPack = 5*15.2;
            }
        break; 

    }

    let totalPrice = pricePerPack * numPacks;


    if(totalPrice>=400 && totalPrice<=1000){
        totalPrice = totalPrice*0.85;
    } else if(totalPrice > 1000){
        totalPrice = totalPrice*0.5;
    }

console.log(`${totalPrice.toFixed(2)} lv.`);
}
energyBooster(["Pineapple", "small", "1"]);


