function solve(inputArray){
  // cloning the original array and sorting it appropriately
  let sortedBySmallest = inputArray
    .map(x => x)
    .sort((a,b) => a - b);

  let sortedByBigest = inputArray
    .map(x => x)
    .sort((a,b) => b - a);

  
  let result = [];

  for (const element of sortedByBigest) {
    // check if we have moved through all the elements
    if (result.length === inputArray.length){
      break;
    }

    // collecting the biggetst element from the sortedBiggest array & removing it from both sorted arrays
    result.push(element);
    sortedByBigest = sortedByBigest.filter(el => el !== element);
    sortedBySmallest = sortedBySmallest.filter(el => el !== element);

    // collecting the smallest element from the sortedSmallest array & removing it from both sorted arrays
    for (const element of sortedBySmallest) {
      result.push(element); 
      sortedByBigest = sortedByBigest.filter(el => el !== element);
      sortedBySmallest = sortedBySmallest.filter(el => el !== element);
      break;
    }
    
  }
  
  console.log(result.join(" "));
}
solve([34, 2, 32, 45, 690, 6, 32,
  7, 19, 47]
  );