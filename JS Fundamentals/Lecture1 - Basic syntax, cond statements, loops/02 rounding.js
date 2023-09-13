function solve(number, round){
  if(round > 15){
    round = 15;
  }

  let result = parseFloat(number.toFixed(round));
  console.log(result);
 
}
solve(3.1415926535897932384626433832795,4)
