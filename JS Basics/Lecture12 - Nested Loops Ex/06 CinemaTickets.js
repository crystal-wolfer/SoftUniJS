function cinemaTickets(input){
    let index = 0;
    let command = input[index];
    let ticketsTotal = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let curNumTickets = 0;

    while (command !== "Finish"){
        command = input[index];
        if (command === "Finish"){
            break;                               
        }
        index++;
        let ticketsPerMovie = Number(input[index]);
        index++;

        let command1 = input[index];

        while (command1 !== 'End'){
            if (command1 === "Finish"){
                break;                               
            }

            if (curNumTickets >= ticketsPerMovie){
                break;
            }

            command1 = input[index];

            
            
            if (command1 === "standard"){
                standardTickets += 1;
                ticketsTotal += 1;
                curNumTickets += 1;                  
            }
            

            if (command1 === "student"){
                studentTickets += 1;
                ticketsTotal += 1;
                curNumTickets += 1;                    
            }

            if (command1 === "kid"){
                kidsTickets += 1;
                ticketsTotal += 1;
                curNumTickets += 1;                   
            }

            index++;
            

        }

       
        console.log (`${command} - ${((curNumTickets/ticketsPerMovie)*100).toFixed(2)}% full.`);
        curNumTickets = 0;

    }

console.log(`Total tickets: ${ticketsTotal}`); 
console.log(`${((studentTickets/ticketsTotal)*100).toFixed(2)}% student tickets.`);
console.log(`${((standardTickets/ticketsTotal)*100).toFixed(2)}% standard tickets.`);
console.log(`${((kidsTickets/ticketsTotal)*100).toFixed(2)}% kids tickets.`);   


}
cinemaTickets(["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"])