function solve(arrayInput){
  let k = Number(arrayInput.shift());
  let arrayLength = arrayInput.length;
 
  let firstKnums = arrayInput.slice(0, k);
  let lastKnums = arrayInput.slice(arrayLength-k, arrayLength);
  
  console.log(firstKnums.join(" "));
  console.log(lastKnums.join(" "));
 
 }
 solve([3,
  6, 7, 8, 9]
  );