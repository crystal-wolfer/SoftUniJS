function sumNumbers(input) {
    let numTarget = Number(input[0]);
    let sum = 0;
    let index = 0;
    index++;
   
    while (sum < numTarget) {
        let currNum = Number(input[index]);
        sum += currNum;
        index++;
    }
    
console.log(sum);
} 
sumNumbers(["100", "10", "20", "30", "40"]);