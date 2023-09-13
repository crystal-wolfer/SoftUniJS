function solve(input){
  let activationKey = input.shift();
  let line = input.shift();

  while (line !== 'Generate'){
    // destructuring the line input
    let [command, token1, token2, token3] = line.split('>>>');

    // going command by command
    switch (command) {
      case 'Contains':
        let substr = token1;

        if (activationKey.includes(substr)){
          console.log(`${activationKey} contains ${substr}`);
        } else {
          console.log(`Substring not found!`);
        }
      break;

      case 'Flip':
        let caseType = token1;
        let startIndex = Number(token2);
        let endIndex = Number(token3);
        let strToFlip = activationKey.slice(startIndex, endIndex);

        // checking what we are flipping to
        if (caseType === 'Upper'){
          strToFlip = strToFlip.toUpperCase();
          activationKey = activationKey.slice(0, startIndex) + strToFlip + activationKey.slice(endIndex);
        } else {
          strToFlip = strToFlip.toLowerCase();
          activationKey = activationKey.slice(0, startIndex) + strToFlip + activationKey.slice(endIndex);
        }
        console.log(activationKey);
      break;

      case 'Slice':
        let startIn = Number(token1);
        let endIn = Number(token2);

        activationKey = activationKey.slice(0, startIn) + activationKey.slice(endIn);
        console.log(activationKey);
      break; 

    }
    line = input.shift();
  }

  console.log(`Your activation key is: ${activationKey}`);
}
solve(
  (["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])

);

console.log(`--------------`);

solve(
  (["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
);

//23min
