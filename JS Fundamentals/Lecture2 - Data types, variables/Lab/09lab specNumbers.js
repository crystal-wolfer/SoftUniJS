function solve(num){

  for(let i = 1; i <= num; i ++){
    let curNum = Number(i);

    
      if (curNum < 10){
       if (curNum === 5 || curNum === 7){
        console.log(`${curNum} -> True`);
       } else {
        console.log(`${curNum} -> False`);
       }
      } else{
       
       let num1 = Number(curNum.toString().charAt(0));
       let num2 = Number(curNum.toString().charAt(1));

       if (num1 + num2 === 5 || num1 + num2 === 7 || num1 + num2 === 11){
        console.log(`${curNum} -> True`);
        } else {
          console.log(`${curNum} -> False`);
          }
      }

  }
}
solve(15)