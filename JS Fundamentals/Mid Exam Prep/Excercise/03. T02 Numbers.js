function solve(input){
  let numbersInput = input.split(' ').map(Number); // for single string in Judge this is the valid code

  let averageValue = eval(numbersInput.join('+'))/numbersInput.length;
  
  let newArray = [];

  // collecting all numbers > than the average value
  for(let i=0; i<numbersInput.length; i++){
    if (numbersInput[i] > averageValue){
      newArray.push(numbersInput[i]);
    }
  }
  // checking if there are no numbers > than the average value
  if (newArray.length == 0){
    console.log(`No`);
    return;
  }

  // sorting by descending order
  let newArraySorted = newArray.sort((a,b) => b - a);

  // filtering top 5 numbers
  let newArrayFiltered = newArraySorted.slice(0,5);
  
  console.log(newArrayFiltered.join(' '));
}
solve(['10 20 30 40 50']);