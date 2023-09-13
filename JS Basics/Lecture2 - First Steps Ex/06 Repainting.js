// Предпазен найлон - 1.50 лв. за кв. метър
// Боя - 14.50 лв. за литър
// Разредител за боя - 5.00 лв. за литър
// 1 час работа, е равна на 30% от сбора на всички разходи за материали
// торбичка 0.4 лв

function  calculate(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workerHours = Number(input[3]);

    let nylonFinal = (nylon+2)*1.5;
    let paintFinal = (paint+(paint*0.1))*14.5;
    let thinnerFinal = thinner*5;
    let workersPrice = (nylonFinal+paintFinal+thinnerFinal+0.4)*0.3;

    console.log(nylonFinal+paintFinal+thinnerFinal+0.4+(workerHours*workersPrice));
}

calculate(["5","10","10","1"])