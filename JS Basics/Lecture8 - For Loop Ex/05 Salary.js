function salary(input){
    let tabs = Number(input[0]);
    let initialSalary = Number(input[1]);
    let penalty = 0;

    for (let i = 2; i <= input.length; i++) { //input.length reads how many values are in the input array;
        console.log(input.length);       
        let curTab = input[i]; //Reading the current tab website name
    
        switch (curTab) {
        case "Facebook": penalty += 150; break;
        case "Instagram": penalty += 100; break;
        case "Reddit": penalty += 50; break;
        }      
    }

    let finalSalary = initialSalary - penalty;

    if (finalSalary <= 0) {
        console.log(`You have lost your salary.`);        
    } else {
        console.log(finalSalary);
    }
}
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"]);