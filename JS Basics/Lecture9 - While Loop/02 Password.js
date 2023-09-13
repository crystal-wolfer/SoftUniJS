function password(input){
    let userName = input[0];
    let correctPassword = input[1];
    let index = 0;
    let pass = input[index];
    index++;
    
    while (pass !== correctPassword){  
        pass = input[index];
        index++;
        if (pass === correctPassword){
            console.log(`Welcome ${userName}!`);
        }
    } 
}
password(["Gosho", "secret", "secr", "dhfd", "sfndfsf", "secret"])