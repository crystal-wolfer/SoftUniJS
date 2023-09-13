function solve(array, magicNum){
    
    for(let i=0; i<array.length; i++){
      let curNum = Number(array[i]);

        for (let j = i+1; j < array.length; j++) {
          let nextNum = Number(array[j]);

            if (curNum + nextNum == magicNum){
              console.log(`${curNum} ${nextNum}`);
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23],8)
console.log(`Answer: \n1 7 // 6 2`);
console.log(`----------------------------------------------------`);
solve([14, 20, 60, 13, 7, 19, 8],27);
console.log(`Answer: \n14 13 // 20 7 // 19 8`);
