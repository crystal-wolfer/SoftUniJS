function oddEvenSum(inputNumber){
  // Convert the input number to string 
  let numAsString = inputNumber.toString();
  let sumEven = 0;
  let sumOdd = 0;

  // Loop through the string 1 number at a time
  for(let i = 0; i < numAsString.length; i++){
    let curElement = Number(numAsString[i]);
    
    // Check if the current element is even or odd and andd it to the appropriate summing variable
    if (curElement % 2 == 0){
      sumEven += curElement;
    } else {
      sumOdd += curElement;
    }
  }

  return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`

}
console.log(oddEvenSum(3495892137259234));  