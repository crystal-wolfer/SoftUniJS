function sumFirstAndLast(inputArray){
  let firstNumber = Number(inputArray[0]);
  let lastIndex = inputArray.length; 
  let lastNumber = Number(inputArray[lastIndex-1]);
  let sum = firstNumber + lastNumber;

  console.log(sum);

}
sumFirstAndLast(['5', '10']);