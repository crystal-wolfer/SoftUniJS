function solve(array){
  let curNum = 0;
  let sumLeft = 0;
  let sumRight = 0;
  let isEqual = false;

  for(let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j != i) {
        let num = Number(array[j]);
        if (j < i) {
          sumLeft += num;
        } else if (j > i) {
          sumRight += num;
        }
      }

      if (i === 0){
        sumLeft = 0;
      }else if (i === array.length - 1){
        sumRight = 0;
      }
    }

    if (sumLeft === sumRight) {
      console.log(i);
      isEqual = true;
    } else {
      sumLeft = 0;
      sumRight = 0;
    }
  }

  
  if (!isEqual) {
    console.log(`no`);
  }
  
}
solve([1, 2, 3, 3] )
console.log(`Answer: \n2`);
console.log(`----------------------------------------------------`);
solve([1, 2]);
console.log(`Answer: \nno`);
console.log(`----------------------------------------------------`);
solve([1]);
console.log(`Answer: \n0`);