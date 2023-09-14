function sameNumbers(input){
  let array = input.toString().split('').map(Number); // convert the number into an array of numbers
  let sum = array[0]; // setting the sum to equal the first element of the array
  let areSame = false;

  // check if the number is 1 digit only
  if (array.length === 1){
    areSame = true;
    console.log(areSame);
    console.log(array[0]);
    return;
  } 

  for (let i = 1; i < array.length; i++) {
    if (array[i-1] === array[i]){
      areSame = true;
    } else {
      areSame = false;
    }

    sum += array[i];
  }

  console.log(areSame);
  console.log(sum);
  
}
sameNumbers(4);