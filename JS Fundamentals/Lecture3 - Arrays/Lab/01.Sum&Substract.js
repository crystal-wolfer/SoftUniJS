function solve(array){
  let firstEllement = array[0];
  let lastEllement = array[array.length-1];
  let sumElements = firstEllement + lastEllement;

  console.log(sumElements);
}
solve([10, 17, 22, 33])