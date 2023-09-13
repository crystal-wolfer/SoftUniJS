function solve(input){

  let originalArray = input.shift().split(' ').map(Number);

  let i = 0;
  let iterate = input[i];
  

  while(iterate !== 'end'){
    if (iterate === 'end'){
      break;
    }
    let [command, index1, index2] = input[i].split(' ');
    index1 = Number(index1);
    index2 = Number(index2);

    switch(command){
      // swapping values at 2 given positions
      case "swap":
        let value1 = originalArray[index1];
        let value2 = originalArray[index2];
        originalArray.splice(index1, 1, value2);
        originalArray.splice(index2, 1, value1);
        break;
      case "multiply":
        let resultMiltiplication = (originalArray[index1])*(originalArray[index2]);
        originalArray.splice(index1, 1, resultMiltiplication);
        break;
      case "decrease":
        for (let j = 0; j < originalArray.length; j++){
          originalArray[j] -= 1;
        }
        break;
    }

    iterate = input[i];
    i++;
    
  }

  console.log(originalArray.join(', '));

}
solve(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2','decrease','end']);
 //23 87 321 -2 42 90 -123
 //23 87 321 -123 42 90 -2
 //87 23 321 -123 42 90 -2
 //87 7383 321 -123 42 290 -2
 //87 7383 2369943 -123 42 90 -2
 