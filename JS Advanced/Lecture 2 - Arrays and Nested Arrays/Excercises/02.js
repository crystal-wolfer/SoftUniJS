function printNthElement(array, n){
  let res = [];
  for (let i = 0; i < array.length; i+=n){
    res.push(array[i]);
  }

  return res
}
printNthElement(
  ['dsa',
  'asd', 
  'test', 
  'tset'], 
  2
  
);
