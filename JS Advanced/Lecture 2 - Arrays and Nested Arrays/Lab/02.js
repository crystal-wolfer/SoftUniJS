function lastNumSequence(n, k){
  let result = [];
  let sum = 0;

  // adding k to the array
  result.push(1);

  for (let i = 1; result.length < n; i++) {
    // when elements are less than k
    if (i <= k){
      result.forEach(el => sum += el); // summing all elements in the result array
      result.push(sum); // pushing the sum into the result array
    } else {
      for (let j = i-1; j >= i-k; j--) {
        sum += result[j];
      }
      result.push(sum); 
    }
    sum = 0;
  }

  return result;  
}
lastNumSequence(8, 2);
//[1, 1, 2, 3, 5, 8, 13, 21]