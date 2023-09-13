function solve(array1, array2){
  let result = [];

  for(let i=0; i<array1.length; i++) {
    if (i % 2 == 0) {
      let currElement1 = Number(array1[i]);
      let currElement2 = Number(array2[i]);

      result[i] = currElement1 + currElement2;
    } else{
      let currElement1 = array1[i];
      let currElement2 = array2[i];

      result[i] = currElement1 + currElement2;
    }
  }
  console.log(result.join(" - "));	
}
solve(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])
console.log(`Answer: \n22 - 1522 - 110 - 5636 - 46`);
console.log(`----------------------------------------------------`);
solve(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44']);
console.log(`Answer: \n35 - 12312333 - 10 - 77122 - 48`);
