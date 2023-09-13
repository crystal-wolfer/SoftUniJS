function sequence(input){
    let k = Number(input[0]);
    let n = 1;

    while ( n <= k ){
        console.log(n);
        n = n * 2 + 1;  
    }
    
}
sequence(["31"])