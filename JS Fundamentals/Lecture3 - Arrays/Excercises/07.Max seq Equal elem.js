function solve(arr){
    let sequence = 1;
    let sequenceCount = 0;
    let sequenceNum = 0;

    for (let i = 0; i < arr.length; i++){

      if(i !== 0){
        let curNum = Number(arr[i]);
        let prevNum = Number(arr[i-1]);
      

      if (curNum === prevNum){
        sequence++;

        if (sequence > sequenceCount){
          sequenceCount = sequence;
          sequenceNum = curNum;
        }
      }else {
        sequence = 1;
      }
      } 
    }
  console.log(`${(sequenceNum + ' ').repeat(sequenceCount)}`);

}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1] )
console.log(`Answer: \n22 - 1522 - 110 - 5636 - 46`);
console.log(`----------------------------------------------------`);
solve(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44']);
console.log(`Answer: \n35 - 12312333 - 10 - 77122 - 48`);
