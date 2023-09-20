function exctractSubset(array){
  let isBiggest = Number.MIN_SAFE_INTEGER;
  let res = [];

  for(let i = 0; i < array.length; i++){
    if (array[i] >= isBiggest){
      isBiggest = array[i];
      res.push(array[i]);
    }
  }

  return res;
}
exctractSubset(
  [20, 
    3, 
    2, 
    15,
    6, 
    1]
    
);

