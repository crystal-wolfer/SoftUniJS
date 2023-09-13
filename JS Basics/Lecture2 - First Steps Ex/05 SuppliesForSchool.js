// Пакет химикали - 5.80 лв.
// Пакет маркери - 7.20 лв.
// Препарат - 1.20 лв (за литър)

function calculate(input){
    let qtyPen = Number(input[0]);
    let qtyMarker = Number(input[1]);
    let qtyCleaner = Number(input[2]);
    let discountPercent = Number(input[3]);

    let pricePen = qtyPen*5.8;
    let priceMarker = qtyMarker*7.2;
    let priceCleaner = qtyCleaner*1.2;
    let discount = (pricePen+priceMarker+priceCleaner) * (discountPercent/100);

    console.log(pricePen+priceMarker+priceCleaner - discount);

}
calculate(["4","2","5","13"])