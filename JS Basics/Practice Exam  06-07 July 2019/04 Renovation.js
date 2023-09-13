function renovation(input){
// 1l paint -> 1 sq.m

    let wallH = Number(input[0]);
    let wallW = Number(input[1]);
    let windowsPercent = Number(input[2]);

    let squaresToPaint = 1 - (windowsPercent / 100); // in percent
    let finalSquaresToPaint = Math.ceil((wallH * wallW * 4)*squaresToPaint);

    let index = 3;
    let command = input[index];

    
    while (command !== "Tired!"){
    
        let paintQuantity = Number(input[index]);
            
        finalSquaresToPaint -= paintQuantity;

        if (finalSquaresToPaint < 0){
            console.log(`All walls are painted and you have ${Math.abs(finalSquaresToPaint)} l paint left!`);
            return;
        } else if (finalSquaresToPaint === 0){
            console.log(`All walls are painted! Great job, Pesho!`);
            return;
        }

        index++;
        command = input[index];

    }

    console.log(`${finalSquaresToPaint} quadratic m left.`);
    

}
renovation(["2",
"3",
"25",
"6",
"4",
"8"])


