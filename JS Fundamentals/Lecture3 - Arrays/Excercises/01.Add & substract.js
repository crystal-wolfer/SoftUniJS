function solve(arrayInput){
  let arrayNew = [];
  let sumOriginal = 0;
  let sumNew = 0;

  for(let i = 0; i < arrayInput.length; i++){
    let currNum = arrayInput[i];

    if(currNum % 2 === 0){
      arrayNew[i] = currNum + i;
    }else {
      arrayNew[i] = currNum - i;
    }

    sumOriginal += currNum;
    sumNew += Number(arrayNew[i]);
  }

  console.log(arrayNew);
  console.log(sumOriginal);
  console.log(sumNew);
}
solve([5, 15, 23, 56, 35])
console.log(`----------------`);
solve([-5, 11, 3, 0, 2]);
//console.log(`----------------`);
//solve([2,4,6,8,10]);