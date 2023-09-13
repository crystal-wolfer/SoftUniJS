function solve(number, arrayInput){
  let newArray = [];

  for (let i = number-1; i >= 0; i--) {
    newArray.push(arrayInput[i]);
  }

  console.log(newArray.join(' '));
}
solve(4, [-1, 20, 99, 5] )