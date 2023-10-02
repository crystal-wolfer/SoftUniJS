function solution(initialValue){
  
  function add(num){
   return initialValue + num;
  }

  return add;
}
let add5 = solution(5);

console.log(add5(2));
console.log(add5(3));




