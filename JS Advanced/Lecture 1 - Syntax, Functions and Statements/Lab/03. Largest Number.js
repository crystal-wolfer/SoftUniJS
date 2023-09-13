function largestNum (num1, num2, num3) {

  // check for num1
  if (num1 > num2 && num1 > num3) {
    console.log(`The largest number is ${num1}.`);
  } 
  // check for num2
  else if (num2 > num1 && num2 > num3) {
    console.log(`The largest number is ${num2}.`);
  }
  // check for num3
  else if (num3 > num1 && num3 > num2){
    console.log(`The largest number is ${num3}.`);
  }

}
largestNum(-3, -5, -22.5);