function solve(array1, array2){
  for(let i=0; i<array1.length; i++){
    let curElement = array1[i];

    if (array2.includes(curElement)){
      console.log(curElement);
    }
  }

}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2'])
console.log(`----------------`);
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);
