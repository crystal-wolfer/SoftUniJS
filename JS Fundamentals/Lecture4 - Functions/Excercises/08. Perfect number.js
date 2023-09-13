function perfectNumber(inputNumber){
  let sumDivisors = 0;

  for (let i = 1; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      sumDivisors += i;
    }
  }

  if (sumDivisors === inputNumber) {
    return `We have a perfect number!`;
  } else{
    return `It's not so perfect.`;
  }
  

}
console.log(perfectNumber(1236498)); 
