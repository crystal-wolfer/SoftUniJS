function solve(input){ 
  // extraxting the message
  let message = input.shift();
  //taking the first line with commands
  let line = input.shift();
  
  // looping through the input lines
  while(line !== 'Reveal'){
    let [command, token1, token2] = line.split(':|:');

    switch(command){
      case 'InsertSpace':
        let index = Number(token1);

        //STUPID but if index to insert is = 0
        if (index === 0) {
          message = " " + message.slice((index));
          console.log(`${message}`);
        } else {
        message = message.slice(0, index) + ' ' + message.slice(index);
        console.log(`${message}`);
        }

      break;

      case 'Reverse':
        let substring = token1;
        //reversing a substring
        let reversed = substring.split('').reverse().join('');

        //checking if the message contains the substring and then replacing the 1st occurrence at the end 
        if(message.includes(substring)){
          let startIndex = message.indexOf(substring);
          let endIndex = startIndex + substring.length;
          message = message.slice(0,startIndex) + message.slice(endIndex) + reversed;
          console.log(`${message}`);
        } else{
          console.log(`error`);
        }
      break;

      case 'ChangeAll':
        
        let substr = token1;
        let replacement = token2;

        if(message.includes(substr)){
          message = message.split(substr).join(replacement);
          console.log(`${message}`);
        } else {
          console.log(`error`);
        }
      break;
    }

    line = input.shift();
  }

  console.log(`You have a new text message: ${message}`);

}
solve(
  [
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]  
);

//43min 87/100