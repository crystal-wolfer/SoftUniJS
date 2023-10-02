function solution(inputArray){
  let innerCollection = [];
  inputArray.forEach(element => {
    let [command, string] = element.split(' ');
      if (command === 'add'){
        innerCollection.push(string);
      } else if (command === 'remove'){
        innerCollection = innerCollection.filter(str => str !== string);
      } else (
        console.log(innerCollection.join(','))
      );
  });
  
}

solution(
  ['add hello', 'add again', 'remove hello', 'add again', 'print']
)

solution(
  ['add pesho', 'add george', 'add peter', 'remove peter','print']
)

