function solve(input){
  let password = input.shift();
  let line = input.shift();
 
  while (line !== 'Done'){
    let [command, token1, token2] = line.split(' ');
    
    // Case TakeOdd
    if (command === 'TakeOdd'){
      let buffer ='';
      // Taking all letter at odd position and setting them into a buffer variable
      for (let i in password) {
        if (i % 2 !== 0){
          buffer += password[i];
        }
      }
      // giving password the new value
      password = buffer;
      console.log(password);
    }

    // Case Cut
    if (command === 'Cut'){
      let index = Number(token1);
      let length = Number(token2);
      let endIndex = index + length;

      password = password.slice(0,index) + password.slice(endIndex); //taking only the parts left after the deletion
      console.log(password);
    }

    // Case Substitute
    if (command === 'Substitute'){
      let substr = token1;
      let substitude = token2;

      // cheking if password includes the substr
      if (password.includes(substr)){
        password = password.split(substr);
        password = password.join(substitude);
        console.log(password);
      } else{
        console.log(`Nothing to replace!`);
      }

    }

    line = input.shift();
  }
  
  console.log(`Your password is: ${password}`);

}
solve(
  ["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]
);