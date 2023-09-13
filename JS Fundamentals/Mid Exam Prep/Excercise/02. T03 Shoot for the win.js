function solve(input){

  let targets = input.shift().split(' ').map(Number);
  let length = input.length;
  let targetsShot = 0;

  for(let i = 0; i < length; i++){
    let givenIndex = Number(input[i]);
    // use case: when command End is called before the end of the inputs
    if(input[i] === "End"){
      break;
    } 
    // if the givenIndex is valid then we execure the following code
    if (givenIndex <= (targets.length -1)){
      let curTargetValue = targets[givenIndex];
      targets[givenIndex] = -1;
      targetsShot ++;

      for(let j = 0; j < targets.length; j++){
        if(targets[j] !== -1){
          if (targets[j] > curTargetValue){
            targets[j] = targets[j] - curTargetValue;
          }  else{
            targets[j] = targets[j] + curTargetValue;
          }
        }
      }
    }
  }
  console.log(`Shot targets: ${targetsShot} -> ${targets.join(' ')}`);
}
solve(["30 30 12 60 54 66",
"5",
"2",
"End",
"4",
"0",
"End"]);
