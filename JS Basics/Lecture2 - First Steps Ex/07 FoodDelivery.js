// Пилешко меню – 10.35 лв.
// Меню с риба – 12.40 лв.
// Вегетарианско меню – 8.15 лв.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката).
// Цената на доставка е 2.50 лв и се начислява най-накрая.

function calculate(input){
    let qtyChicken = Number(input[0]);
    let qtyFish = Number(input[1]);
    let qtyVeg = Number(input[2]);
    let priceChicken = qtyChicken*10.35;
    let priceFish = qtyFish*12.4;
    let priceVeg = qtyVeg*8.15;
    let dessert = (priceChicken+priceFish+priceVeg)*0.2;

    console.log(priceChicken+priceFish+priceVeg + dessert + 2.5);

}
calculate(["9","2","6"])