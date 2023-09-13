function solve(input){
  let text = input.shift().split('');
  
  let i = 0;
  let iterator = input[i];

  while(iterator !== 'Decode'){
    let [command, set, value] = iterator.split('|');

    switch(command){
      case 'Move':
        num = Number(set); // the number of letters to be moved
        let slice = text.splice(0,num);  // cutting the number of letters
        
        slice.forEach(element => { // iterating over all elements of the slice and adding them to the back of the originla string
          text.push(element);          
        }); 
      break;

      case 'Insert':
        let index = Number(set); // taking the index
        let valueArray = value.split('');
        
        //taking the start of the text as an array
        let sliceStart = text.splice(0,index);
        
        // adding the new letters to the slice
        valueArray.forEach(letter => {
            sliceStart.push(letter);
        });

        // adding the end of the original text
        text.forEach(letter => {
          sliceStart.push(letter);
        });

        //setting the text to have sliceStart values
        text = [...sliceStart];
      break;
       
      case 'ChangeAll':
        let substr = set;
        let replacement = value;
        
        text.forEach((letter, i) => {
          if (letter == substr) text[i] = replacement; 
        });
    }



    i++;
    iterator = input[i]
  }

  console.log(`The decrypted message is: ${text.join('')}`);

}
solve(
  [
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]
  
);

solve(
  [
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
  'Insert|9|?',
  'Decode',
]

  
);

//46min


// Better solution:
function theImitationGame(line) {
  let message = line.shift();
  let curentCommand = line.shift();

  while (curentCommand) {
      let [command, arg1, arg2] = curentCommand.split('|');
      if (command === 'ChangeAll') {
          message = message.split(arg1).join(arg2);
      } else if (command === 'Insert') {
          arg1 = Number(arg1);
          message = message.slice(0, arg1) + arg2 + message.slice(arg1);
    
      } else if (command === 'Move') {
          arg1 = Number(arg1);
          let cut = message.slice(0, arg1);
          message = message.slice(arg1) + cut;
      }
      curentCommand = line.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}