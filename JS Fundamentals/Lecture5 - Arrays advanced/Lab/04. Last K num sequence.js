function solve(n, k){
let newArray = [1];

while(n > newArray.length){
  let kArray = newArray.slice(-k);
  let sumKArray = 0;

  for(let i = 0; i < kArray.length; i++) {
    sumKArray += kArray[i];
  }

  newArray.push(sumKArray);
}
 console.log(newArray.join(' ')); 
  
}
solve(6, 3);