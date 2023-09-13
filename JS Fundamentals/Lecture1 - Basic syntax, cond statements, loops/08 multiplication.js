function solve(num){
  let result = '';

  for (let multiplier = 1; multiplier <= 10; multiplier++) {
    result = num * multiplier;
    console.log(`${num} X ${multiplier} = ${result}`);
  }
}
solve(2);