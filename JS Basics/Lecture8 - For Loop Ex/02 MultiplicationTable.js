function multiplicationTable(input){
    let multiplicator = Number(input[0]);
    let result = 0;

    for (i=1; i<=10; i++){
        result = i*multiplicator;
        console.log(`${i} * ${multiplicator} = ${result}`);
    }  
}
multiplicationTable(["2"]);