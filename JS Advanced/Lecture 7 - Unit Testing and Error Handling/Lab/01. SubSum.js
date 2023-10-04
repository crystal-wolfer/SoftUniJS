function solve(array, startIndex, endIndex) {
  // error handling
  if (!Array.isArray(array)) {
    return NaN;
  }

  const startIndexAsNum = startIndex < 0 ? 0 : startIndex; // check for the startIndex
  const endIndexAsNum = endIndex > array.length- 1 ? array.length - 1 : endIndex; // check for the endIndex

  let result = 0;

  for (let i = startIndexAsNum; i <= endIndexAsNum; i++) {
    const element = array[i];
    result += element;
  }

  return result
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));