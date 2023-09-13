function salon(input){
    let index = 0;
    let targetIncome = Number(input[index]);
    index++;
    let command = input[index]; // текуща услуга
    //index++;
     //let haircut = input[index];
     //index++;
     //let color = input[index];
     //index++;
     
     let income = 0;
     while(command !== "closed"){
        command = input[index]; // текуща услуга
        let haircut = input[index]; // тоест = command, но за по-лесно му даваш името haircut, за да не пропускаме стойност
        index++;
        let color = input[index]; // защото първо получаваш услуга, после типа на услугата, в твоят случай дефинирано като color

        let price = 0;
        if(haircut === "mens"){
            price = 15;
            
        }else if(haircut === "ladies"){
            price = 20;
        }else if(haircut === "kids"){
            price = 10;
        }
        if(color === "touch up"){
            price = 20;
        }else{
            price = 30;
        }
           
        
        income += price;
        if(income >= targetIncome){
            console.log(`You have reached your target for the day!` );
            console.log(`Earned money: ${income}lv.`);
            break;
        }
        
        
        //command = input[index];
        index++;
    }
     
     if(command === "closed"){
        let moneyNeeded = targetIncome - income;
        console.log(`Target not reached! You need ${moneyNeeded}lv. more.`);
        console.log(`Earned money: ${income}lv.`);
     }
    }
 
     
 
    
salon(["300",
"haircut",
"ladies",
"haircut",
"kids",
"color",
"touch up",
"closed"])

