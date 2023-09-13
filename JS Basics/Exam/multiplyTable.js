function multiplyTable(input) {
    let index = 0;
    let num = (input[index]);
    let first = Number(num[2]);
    let second = Number(num[1]);
    let thirt = Number(num[0]);
    let sum = 0;
    for (let a = 1; a<=first; a++) {
        for (let b= 1; b <=second;b++) {
            for (let c = 1; c<= thirt;c++){
                sum = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${sum};`);
            }
        }
    }
//     console.log(first); 
//     console.log(second); 
//     console.log(thirt); 
}
multiplyTable(["324"]);