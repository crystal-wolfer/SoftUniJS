function christmasPreparation(input){
    let numRollsPaper = Number(input[0]);
    let numRollsFabric = Number(input[1]);
    let glueLitres = Number(input[2]);
    let givenDiscount = Number(input[3]);

    let pricePaper = numRollsPaper * 5.8;
    let priceFabric = numRollsFabric * 7.2;
    let priceGlue = glueLitres * 1.2;
    let percentDiscount = givenDiscount / 100;

    let finalPrice = (pricePaper + priceFabric + priceGlue) * (1 - percentDiscount);

    console.log(finalPrice.toFixed(3));

}
christmasPreparation(["4",
"2",
"5",
"13"])


//Опаковъчна хартия - 5.80 лв. за ролка
//Плат - 7.20 лв. за ролка
//Лепило - 1.20 лв. за литър
