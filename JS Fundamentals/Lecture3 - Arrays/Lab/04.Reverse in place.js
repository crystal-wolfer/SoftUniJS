function solve(arrayInput){
  let result = [];
  
  for(var i=arrayInput.length-1; i>=0 ;i--){
    result.push(arrayInput[i]);
  }
 
  console.log(result.join(' '));
  
}
solve(['abc', 'def', 'hig',
'klm', 'nop'])
console.log(`--------------`);
console.log(`nop klm hig def abc`);

