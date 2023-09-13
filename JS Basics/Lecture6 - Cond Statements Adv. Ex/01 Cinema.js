function output(input){
    let screening = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    switch (screening) {
    
        case "Premiere":
            income = (rows * columns)* 12;
            console.log(income.toFixed(2) +" leva" );
            break;

        case "Normal":
            income = (rows * columns)* 7.5;
            console.log(income.toFixed(2) +" leva" );
            break;

        case "Discount":
            income = (rows * columns)* 5;
            console.log(income.toFixed(2) +" leva" );
            break;        

}
}

output(["Normal", "21", "13"])