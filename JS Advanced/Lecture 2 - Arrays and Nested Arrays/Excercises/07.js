function sortingNumbers(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let result = [];
  
  for (let i = 0; i < sortedArray.length; i) {
    let smallest = sortedArray.shift(sortedArray[i]);
    let largest = sortedArray.pop(sortedArray.length - 1);
    result.push(smallest, largest);
  }

  return result;   
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
//[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]