function output(input){
    let flower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let priceTotal = 0;
    let moneyNeeded = 0;
    let moneyLeft = 0;
    
    switch(flower){
        case "Roses":
            if (numberOfFlowers >80){
            price = (numberOfFlowers*5);
            priceTotal = price - (price*0.1);
            }
            else {
                priceTotal = (numberOfFlowers*5);
            }

            if (budget < priceTotal){
                moneyNeeded = priceTotal - budget;
                console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);                
            } else{
                moneyLeft = budget - priceTotal;
                console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`); 
            }
        break;

        case "Dahlias":
            if (numberOfFlowers >90){
                price = (numberOfFlowers*3.8);
                priceTotal = price - (price*0.15);
                }else {
                    priceTotal = (numberOfFlowers*3.8);
                }
    
            if (budget < priceTotal){
                    moneyNeeded = priceTotal - budget;
                    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);                
                } else{
                    moneyLeft = budget - priceTotal;
                    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`); 
                }
        break;
        case "Tulips":
            if (numberOfFlowers >80){
                price = (numberOfFlowers*2.8);
                priceTotal = price - (price*0.15);
                }else {
                    priceTotal = (numberOfFlowers*2.8);
                }
    
            if (budget < priceTotal){
                    moneyNeeded = priceTotal - budget;
                    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);                
                } else{
                    moneyLeft = budget - priceTotal;
                    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`); 
                }
        break;

        case "Narcissus":
            if (numberOfFlowers <120){
                price = (numberOfFlowers*3);
                priceTotal = price + (price*0.15);
                }else {
                    priceTotal = (numberOfFlowers*3);
                }
    
            if (budget < priceTotal){
                    moneyNeeded = priceTotal - budget;
                    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);                
                } else{
                    moneyLeft = budget - priceTotal;
                    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`); 
                }
        break;

        case "Gladiolus":
            if (numberOfFlowers <80){
                price = (numberOfFlowers*2.5);
                priceTotal = price + (price*0.2);
                }else {
                    priceTotal = (numberOfFlowers*2.5);
                }
    
            if (budget < priceTotal){
                    moneyNeeded = priceTotal - budget;
                    console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);                
                } else{
                    moneyLeft = budget - priceTotal;
                    console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${moneyLeft.toFixed(2)} leva left.`); 
                }
        break;
    }

}

output(["Gladiolus", "81", "205"])



