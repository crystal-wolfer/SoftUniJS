function trip(input){
    let index = 0;
    let currCheck = input[index];
    index++;

    while(currCheck !== "End"){
        let destination = currCheck;
        let budget = input[index];
        index++;
        let moneySaved = 0;

        while(moneySaved < budget){
            let money = Number(input[index]);
            index++;
            moneySaved += money;
    
        }
        console.log(`Going to ${destination}!`);

        currCheck = input[index];
        index++;

    }


}
trip(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])