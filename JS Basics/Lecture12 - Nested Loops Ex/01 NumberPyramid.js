function pyramid(input){
    let n = Number(input[0]);
    let curNum = 1;
    let printCurLine = "";
    let isBigger = false;


    
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if(curNum > n){
                isBigger = true;
                break;
            }
            printCurLine += curNum + " ";
            curNum++;
        }

        console.log(printCurLine);
        printCurLine = "";
        if (isBigger) {
            break;
        }
    }
}
pyramid(["12"]);