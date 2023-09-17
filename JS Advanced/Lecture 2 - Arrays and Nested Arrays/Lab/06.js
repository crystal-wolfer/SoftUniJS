function biggerHalf(array){
  let arraySorted = array.sort( (a, b) => a - b); // sorting the array in ascending order
  let startIndex = Math.round(arraySorted.length/2); // rounding to the index for splitting the array
  let endIndex = arraySorted.length - startIndex;
  let result = [];

  if (array.length % 2 == 0) {
    result = arraySorted.splice(startIndex, endIndex);
  } else {
    result = arraySorted.splice(startIndex-1, endIndex+1);
  }

  return result;

}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([4, 7, 2, 5]);

//[7, 14, 19, 19]