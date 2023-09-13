function minNum(input){
    let num = input[0];
    let index = 0;
    let myMinNum = Number.MAX_SAFE_INTEGER;
    
   
    while(num !== "Stop"){
       let currNum = Number(num);
       
       if(currNum < myMinNum){
       myMinNum = currNum;
       }
   
       num = input[index];
       index++;
   
    }
    console.log(myMinNum);
    
   }
   maxNum(["100",
   
   "99",
   
   "80",
   
   "70",
   
   "Stop"]);