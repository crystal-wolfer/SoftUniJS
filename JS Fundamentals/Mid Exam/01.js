function solve(input){
  let budget = input[0];
  let numOfStudents = input[1];
  let pricePerFlour = input[2];
  let pricePerEgg = input[3];
  let pricePerApron = input[4];


  let totalSumFlour = pricePerFlour*numOfStudents;
  
  for(let i = 1; i <= numOfStudents; i++){
    if (i % 5 == 0){
      totalSumFlour -= pricePerFlour;
    }else{
      totalSumFlour = totalSumFlour;
    }
  }
  
  let totalSumEgg = pricePerEgg*10*numOfStudents;
  let numOfAprons = Math.ceil(numOfStudents*1.2);
  let totalSumAprons = pricePerApron*numOfAprons;

  let totalMoneyNeeded = totalSumFlour + totalSumEgg + totalSumAprons;

  if(totalMoneyNeeded <= budget){
    console.log(`Items purchased for ${totalMoneyNeeded.toFixed(2)}$.`);
  } else{
    let neededMoney = totalMoneyNeeded - budget;
    console.log(`${neededMoney.toFixed(2)}$ more needed.`);
  }

}
solve([50,2,1.0,0.10,10.0]);
solve([100,25,4.0,1.0,6.0]);
solve([40, 2, 1.0, 0.10, 10.0]);
solve([4.5,0,1.0,0.10,10.0]);


//cooking masterclass