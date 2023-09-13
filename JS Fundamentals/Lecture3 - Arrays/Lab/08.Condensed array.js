function solve(array){
  let newArr = [];

  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      newArr[i] = array[i] + array[i + 1];
    }
    array = newArr;
    newArr = [];
  }

  console.log(array[0]);  
}
solve([2,10,3])
console.log(`----------------`);
solve([5,0,4,1,2] );
console.log(`----------------`);
solve([1]);