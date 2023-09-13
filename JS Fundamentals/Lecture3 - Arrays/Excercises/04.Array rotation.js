function solve(arrayInput, numRotations){

  for(let i=0; i<numRotations; i++){
    let firstElement = arrayInput.shift();
    arrayInput.push(firstElement);
  }

  console.log(arrayInput.join(' '));

}
solve([51, 47, 32, 61, 21], 2 )
console.log(`Answer: \n32 61 21 51 47`);
console.log(`----------------------------------------------------`);
solve([32, 21, 61, 1], 4 );
console.log(`Answer: \n32 21 61 1`);
console.log(`----------------------------------------------------`);
solve([2, 4, 15, 31], 5 );
console.log(`Answer: \n4 15 31 2`);