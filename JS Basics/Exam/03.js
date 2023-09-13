function excursionCalculator(input){
// summer: - 15%
// winter: + 8%

let numOfPeople = Number(input[0]);
let season = input[1];
let pricePerNightPerPerson = 0;

switch (season) {
    case "spring":
        if (numOfPeople <= 5) {
            pricePerNightPerPerson = 50;
        } else {
            pricePerNightPerPerson = 48;
        }
    break;

    case "summer":
        if (numOfPeople <= 5) {
            pricePerNightPerPerson = 48.5;
        } else {
            pricePerNightPerPerson = 45;
        }
    break;

    case "autumn":
        if (numOfPeople <= 5) {
            pricePerNightPerPerson = 60;
        } else {
            pricePerNightPerPerson = 49.5;
        }
    break;

    case "winter":
        if (numOfPeople <= 5) {
            pricePerNightPerPerson = 86;
        } else {
            pricePerNightPerPerson = 85;
        }
    break;
}

let finalPrice = pricePerNightPerPerson * numOfPeople;

if (season === "summer"){
    let finalPriceAfterDiscount = (finalPrice * 0.85).toFixed(2);
    console.log(`${finalPriceAfterDiscount} leva.`);
    return;
} else if (season === "winter") {
    let finalPriceAfterDiscount = (finalPrice * 1.08).toFixed(2);
    console.log(`${finalPriceAfterDiscount} leva.`);
    return;
}

console.log(`${(finalPrice).toFixed(2)} leva.`);    

}
excursionCalculator(["20",
"winter"])

