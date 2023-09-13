function solve(inputArray){

  // .filter receives the element and the index of the element then checks if the index is odd
  let oddNumArray = inputArray.filter((el, i) => i % 2 !== 0); 
  let doubledArray = oddNumArray.map(a => a * 2);

  console.log(doubledArray.reverse().join(' '));

}
solve([3, 0, 10, 4, 7, 3]);