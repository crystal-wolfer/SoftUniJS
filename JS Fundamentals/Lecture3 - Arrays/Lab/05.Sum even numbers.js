function solve(arrayInput){
  let sum = 0;

  for(let i = 0; i < arrayInput.length; i++){
    currArrElement = Number(arrayInput[i]);

    if (currArrElement % 2 === 0){
      sum += currArrElement;
    }
  }
  console.log(sum);

}
solve(['2','4','6','8','10'])
