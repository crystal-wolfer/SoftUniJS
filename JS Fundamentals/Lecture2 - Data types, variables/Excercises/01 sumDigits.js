function solve(number){
  let numAsString = number.toString();
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    let curNum = Number(numAsString[i]);
    sum += curNum; 
  }
  console.log(sum);
}
solve(1234)