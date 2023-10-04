function solution(num){
  let sum = 0;
  sum += num
  
  function calc(num2){
    sum += num2;
    return calc;
  }

  calc.toString = () => sum; // overrides the string value
  return calc;
}
const add = solution();
console.log(add(1)(6)(-3));