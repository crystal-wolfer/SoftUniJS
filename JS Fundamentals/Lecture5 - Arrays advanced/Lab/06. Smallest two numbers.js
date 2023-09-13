function solve(inputArr){
  // sorting the input array in ascending order
  let arraySorted = inputArr.sort((a, b) => a - b);
  // slicing only the first 2 elements of the sorted array;
  let result = arraySorted.slice(0, 2)
  console.log(result.join(' '));
}
solve([3, 0, 10, 4, 7, 3]);