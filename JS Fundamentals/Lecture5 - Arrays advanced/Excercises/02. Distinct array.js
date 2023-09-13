function solve(inputArray){
  let checkedArray = [];

  for(const number of inputArray){
    // check if the current number is already into the checked array if not then adds it to the array
    if(!checkedArray.includes(number)){
        checkedArray.push(number);
    }
  }
  console.log(checkedArray.join(' '));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);