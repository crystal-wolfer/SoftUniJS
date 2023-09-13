function solve(array){
  let resultArr = [];
  let isBigger = true;


  for(let i = 0; i < array.length; i++) {
    let curNum = Number(array[i]);
    isBigger = true;

      for(let j = i+1; j < array.length; j++) {
          let nextNum = Number(array[j]);

          if (curNum > nextNum) {
            isBigger = true;
          } else {
            isBigger = false;
            break;
          }
      }
      if (isBigger === true) {
        resultArr.push(curNum);
      }
  
  }

  console.log(resultArr.join(` `));
}
solve([13, 45, 48])
console.log(`Answer: \n4 3 2`);
console.log(`----------------------------------------------------`);
solve([41, 41, 34, 20]);
console.log(`Answer: \n41 34 20`);
console.log(`----------------------------------------------------`);
solve([27, 19, 42, 2, 13, 45, 48] );
console.log(`Answer: \n48`);