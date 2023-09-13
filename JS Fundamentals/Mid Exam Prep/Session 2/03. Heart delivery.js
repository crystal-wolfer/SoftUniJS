function solve(input){
  let neighborhood = input.shift().split("@").map(Number);
  let neighborhoodLength = neighborhood.length;

  let i = 0;
  let jumps = input[i];
  let curIndex = 0;
  let counter = 0;

  while(jumps !== "Love!"){
    if (jumps === "Love!"){
      break;
    }
    // splitting "Jump n" into "Jump & "n"; taking the curent index and checking if it needs to ne 0ed
    let [command, jumpSize] = input[i].split(" ");
    jumpSize = Number(jumpSize);
    curIndex += jumpSize;
    if (curIndex > neighborhoodLength-1){
      curIndex = 0;
    }

    // checking if the element on the currentIndex is > 0 if true then reducing the element by 2; else printing that the element is already 0
    if (neighborhood[curIndex] > 0){
      let newValue = (neighborhood[curIndex] -2);
      neighborhood.splice(curIndex, 1, newValue)

      // checking if the new reduced element is <= 0 if true then printing message and adding 1 to the counter for completion
      if(neighborhood[curIndex] <= 0){
        console.log(`Place ${curIndex} has Valentine's day.`);
        counter++;
      }
    } else{
      console.log(`Place ${curIndex} already had Valentine's day.`);
    }
    
    i++;
    jumps = input[i];
  }

// Printing to console the needed output messages
  console.log(`Cupid's last position was ${curIndex}.`);
  
  if (counter === neighborhoodLength){
    console.log(`Mission was successful.`);
  }else{
    console.log(`Cupid has failed ${(neighborhoodLength - counter)} places.`);
  }
}
solve(["4@2@4@2","Jump 1","Jump 2","Jump 1","Jump 2","Jump 2","Jump 2","Love!"]
);
