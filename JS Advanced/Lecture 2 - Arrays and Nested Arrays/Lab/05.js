function smallestTwo(array){
  let result = [];
  let a = Math.min(...array); // taking the first smallest element
  result.push(a);
  let indexA = array.indexOf(a);
  array.splice(indexA, 1); // removing the first element from the array
  let b = Math.min(...array); // taking the second smallest
  result.push(b);
  console.log(result.join(' '));
}
smallestTwo([30, 15, 50, 5]);
