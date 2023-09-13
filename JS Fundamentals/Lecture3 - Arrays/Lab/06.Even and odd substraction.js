function solve(arrInput){
  let sumEven = 0;
  let sumOdd = 0;

  for(let i=0; i<arrInput.length; i++) {
    let curNum = Number(arrInput[i]);

    if (curNum % 2 === 0){
      sumEven += curNum;
    }else {
      sumOdd += curNum;
    }
  } 

  console.log(sumEven-sumOdd);
}
solve([1,2,3,4,5,6]);
console.log(`--------------------------------`);
solve([3,5,7,9]);
console.log(`--------------------------------`);
solve([2,4,6,8,10]);