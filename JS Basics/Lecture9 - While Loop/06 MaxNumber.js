function maxNum(input){
    let num = input[0];
    let index = 0;
    let myMaxNum = Number.MIN_SAFE_INTEGER;
    
   
    while(num !== "Stop"){
       let currNum = Number(num);
       
       if(currNum > myMaxNum){
       myMaxNum = currNum;
       }
   
       num = input[index];
       index++;
   
    }
    console.log(myMaxNum);
    
   }
maxNum(["100",

"99",

"80",

"70",

"Stop"]);