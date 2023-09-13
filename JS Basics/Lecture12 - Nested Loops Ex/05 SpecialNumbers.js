function specNum(input){
    let n = Number(input[0]);
    let counter = 0;
    let printSpecNum = "";
    
    for (let i = 1111; i <= 9999; i++) {
        let curNum = i.toString();
        let index = 0;

        for (let index = 0; index < curNum.length; index++) {
            let curDigit = Number(curNum[index]);
            

            if (n % curDigit === 0) {
                counter++;
                if (counter === 4) {
                   printSpecNum += curNum + " ";
                    counter = 0;
                }            
            } else {
                counter = 0;
            }

        }

    }
    console.log(printSpecNum);

}
specNum(["16"]);