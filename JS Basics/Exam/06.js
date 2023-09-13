function substitute(input){
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let K = 0;
    let L = 0;
    let M = 0;
    let N = 0;

    let firstNumValid = false;
    let secondNumValid = false;
    let counter = 0;
 

        for (let K = k; K <= 8; K++) {
            if (counter === 6){
                break;
            }

            for (let L = 9; L >= l; L--) {
                for (let M = m; M <= 8; M++) {
                    for (let N = 9; N >= n; N--) {

                        if (K % 2 === 0 && L % 2 !== 0){
                        firstNumValid = true;
                        }else {
                        firstNumValid = false;
                        }

                        if (M % 2 === 0 && N % 2 !== 0){
                        secondNumValid = true;
                        }else {
                        secondNumValid = false;
                        }

                        if (firstNumValid && secondNumValid){
                            if(K == M && L == N){
                                console.log(`Cannot change the same player.`);
                                } else {
                                    counter++;
                                    if (counter <= 6){
                                    console.log(`${K}${L} - ${M}${N}`);
                                    } else {
                                        return;
                                    }
                                } 
                            }
                    }
                }
            }
        }
}

substitute(["6",
"7",
"5",
"6"])

