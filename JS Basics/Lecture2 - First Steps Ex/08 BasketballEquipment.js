// Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка

function calculate(input){
    let membership = Number(input[0]);
    let sneakers = membership - (membership*0.4);
    let playerKit = sneakers - (sneakers*0.2);
    let ball = playerKit/4;
    let accessories = ball/5;

    console.log(membership+sneakers+playerKit+ball+accessories);
    
}

calculate(["550"])