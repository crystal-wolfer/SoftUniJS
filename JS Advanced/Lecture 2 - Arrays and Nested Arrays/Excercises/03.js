function addRemoveEl(array){
  let res = [];
  let n = 1;
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'add'){
      res.push(n);
      n++;
    } else{
      res.pop();
      n++;
    }
  }

  if (res.length === 0) {
    console.log(`Empty`);
  } else {
    console.log(res.join('\n'));
  }
  
}
addRemoveEl(['add', 
'add', 
'add', 
'add']
);
console.log(`-------`);
addRemoveEl(['add', 
'add', 
'remove', 
'add', 
'add']
);
console.log(`-------`);
addRemoveEl(['remove', 
'remove', 
'remove']
);