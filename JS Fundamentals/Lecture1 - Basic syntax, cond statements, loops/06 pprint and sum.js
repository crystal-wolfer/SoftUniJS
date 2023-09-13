function solve(start, end){
  let sum = 0;
  let result = ''; 

  for(let number = start; number <= end; number++){
    sum += number;
    result += `${number} `;
  }

  console.log(result);
  console.log(`Sum: ${sum}`);

}
solve(0, 26)