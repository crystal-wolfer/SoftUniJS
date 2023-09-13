function output(input){
    let product = input[0];

    switch(product){
        case "banana":
        case "apple":
        case "orange":
        case "cherry":
        case "lemon":
        case "grapes":
        case "kiwi": console.log("fruit"); break;

        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log("vegetable"); break;
        
        default: console.log("unknown"); break;
    } 

}

output(["water"]);