function sumNumbers(input){
    let index = 0;
    let command = input[index];
    index++;

    let primeSum = 0;
    let nonPrimeSum = 0;
    
    while (command !== "stop"){
        curNum = Number(command);

        if (curNum < 0){
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let divisor = 2; divisor < curNum; divisor++){
            if (curNum % divisor === 0){
                isPrime = false;
                break;
            }
        }

        if (isPrime){
            primeSum += curNum;            
        } else{
            nonPrimeSum += curNum;
        }
        
        command = input[index];
        index++; 
    }

console.log(`Sum of all prime numbers is: ${primeSum}`);
console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);


}
sumNumbers(["30",

"83",

"33",

"-1",

"20",

"stop"])