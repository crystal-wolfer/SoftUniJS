function output(input){
    let city = input[0];
    let sum = Number(input[1]);

    if(sum >= 0 && sum <= 500){
        switch(city){
            case 'Sofia':
                console.log((sum*0.05).toFixed(2)); break;
            case 'Varna':
                console.log((sum*0.045).toFixed(2)); break;
            case 'Plovdiv':
                console.log((sum*0.055).toFixed(2)); break;
            default: console.log("error"); break;
        }
        
    } else if (sum > 500 && sum <= 1000){
        switch(city){
            case 'Sofia':
                console.log((sum*0.07).toFixed(2)); break;
            case 'Varna':
                console.log((sum*0.075).toFixed(2)); break;
            case 'Plovdiv':
                console.log((sum*0.08).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (sum > 1000 && sum <= 10000){
        switch(city){
            case 'Sofia':
                console.log((sum*0.08).toFixed(2)); break;
            case 'Varna':
                console.log((sum*0.1).toFixed(2)); break;
            case 'Plovdiv':
                console.log((sum*0.12).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (sum > 10000){
        switch(city){
            case 'Sofia':
                console.log((sum*0.12).toFixed(2)); break;
            case 'Varna':
                console.log((sum*0.13).toFixed(2)); break;
            case 'Plovdiv':
                console.log((sum*0.145).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else {
        console.log("error");
    }

}
output(["Varna", "-50"]);