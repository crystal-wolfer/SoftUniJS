function solve(input){
  // converting the 1st element into array of numbers
  let arrayInput = input
    .shift()
    .split(' ')
    .map(Number); 

  // loop through the input array with the commands
  for(let i = 0; i < input.length; i++){
    // converting the string command into array with 3 elements
    let [command, firstNum, secondNum] = (input[i]).split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    
    switch(command){
      // adding the given element to the end of the array
      case "Add":
        arrayInput.push(firstNum);
        break;
      // removing all occurrences of the given firstNum number from the array
      case "Remove":
        arrayInput = arrayInput.filter(el => el !== firstNum);
        break;
      // deleting given firstNum number from the array
      case "RemoveAt":
        arrayInput.splice(firstNum, 1);
        break;
      // adds firstNum at index secondNum without deleting
      case "Insert":
        arrayInput.splice(secondNum, 0, firstNum);
        break;
    }
      
  }
  console.log(arrayInput.join(' '));

}
solve(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
);   