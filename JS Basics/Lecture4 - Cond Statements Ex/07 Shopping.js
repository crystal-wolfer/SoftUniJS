function output(input){
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let priceVideoCard = videoCard*250;
    let oneProcessor = priceVideoCard*0.35;
    let oneRam = priceVideoCard*0.1;
    let priceProcessor = processor*oneProcessor;
    let priceRam = ram*oneRam;

    let totalPrice = priceVideoCard+priceProcessor+priceRam;
    
    if (videoCard >= processor){
        totalPrice = totalPrice - (totalPrice*0.15)
    }
    
    if (budget >= totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
        
    }


}

output (["920.45","3","1","1"])