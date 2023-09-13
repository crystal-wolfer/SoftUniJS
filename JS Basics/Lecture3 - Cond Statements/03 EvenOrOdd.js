function output(input){
    let number = Number(input[0]);

    if (number % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd")
    }
}

output(["1024"])