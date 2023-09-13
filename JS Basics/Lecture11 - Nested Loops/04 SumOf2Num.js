function sumNum(input){
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let m = Number(input[2]);
    let counter = "";

    for(let i1 = a1; i1 <= a2; i1++){
        for (let i2 = a1; i2 <= a2; i2++){
            counter++;
            if(i1 + i2 === m){
            console.log(`Combination N:${counter} (${i1} + ${i2} = ${i1+i2})`);
            return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${m}`);

}
sumNum(["88", "888", "2000"]);