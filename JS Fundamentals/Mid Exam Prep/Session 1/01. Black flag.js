function solve(input){
  let daysOfPlunder = Number(input[0]);
  let plunderPerDay = Number(input[1]);
  let targetPlunder = Number(input[2]);
  let sumPlunder = 0;

  for(let i = 1; i <= daysOfPlunder; i++){

    sumPlunder += plunderPerDay;

    if (i % 3 === 0){
      sumPlunder += plunderPerDay*0.5;
    } 
    
    if (i % 5 === 0) {
      sumPlunder *= 0.7;
    }
  }

  if (sumPlunder >= targetPlunder){
    console.log(`Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`);
  } else{
    let percentageCollected = (sumPlunder/targetPlunder)*100;
    console.log(`Collected only ${percentageCollected.toFixed(2)}% of the plunder.`);
  }

}
solve(["5",
"40",
"100"]);

// every 3rd day +50% daily plunder
// every 5th day -30% daily plunder