function solve(number){
  let result = '';
  
  if(number % 10 === 0){
    result = 10;
  } else if(number % 7 === 0){
    result = 7;
  } else if(number % 6 === 0){
    result = 6;
  } else if(number % 3 === 0){
    result = 3;
  } else if(number % 2 === 0){
    result = 2;
  }

  if (result != 2 && result != 3 && result != 6 && result != 7 && result != 10){
    console.log(`Not divisible`);
  } else {
    console.log(`The number is divisible by ${result}`);
  }

}
solve(1643)