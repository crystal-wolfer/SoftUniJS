function cinemaTickets (input){
 
    let index = 0;
    let command = input[index];
    index ++
    let nameOfMovie = "";
    let soldTickets = 0;
    let freeSpaces = 0;
    let studentTickets = 0;
    let kidTickets = 0; 
    let standardTickets =0;
    let watchersCounter = 0;
    let percentHallFull = 0;
    let percentStudentTickets =0;
    let percentStandardTickets = 0;
    let percentKidTickets = 0;
 
 
    while (command !== "Finish"){
 
       nameOfMovie = (command);
       command = input[index]
       index++ 
       freeSpaces = Number(command)
       watchersCounter = 0;
       command = input[index]
       index++ 
 
 
        while(command !== "End"){
 
            if (watchersCounter === freeSpaces){
                
                break;
            }
 
            if (command === "standard"){
                standardTickets++
            } else if (command === "kid"){
                kidTickets++
            } else {
                studentTickets++
            }
            soldTickets++
            watchersCounter++
            command = input[index];
            index++
        }
        percentHallFull = ((watchersCounter / freeSpaces) * 100).toFixed(2);
        
 
      
       if (command !== "Finish"){
 
        command = input[index]
        index++
        
       }
 
      
        percentStudentTickets = ((studentTickets / soldTickets )* 100). toFixed(2);
        percentStandardTickets = ((standardTickets / soldTickets)*100).toFixed(2);
        percentKidTickets = ((kidTickets / soldTickets)*100).toFixed(2);
       console.log(`${nameOfMovie} - ${percentHallFull}% full.`)
 
       if (command === "standard" || command === "kid" || command === "student"){
        break;
    }
    }
 
    console.log(`Total tickets: ${soldTickets}`)
    console.log(`${percentStudentTickets}% student tickets.`)
    console.log(`${percentStandardTickets}% standard tickets.`)
    console.log(`${percentKidTickets}% kids tickets.`)
    
}
 
cinemaTickets (["Taxi", "10", "standard", "kid", 
"student", "student", "standard", "standard", 
"End", "Scary Movie", "6", "student", "student", 
"student", "student", "student", "student", "New Movie", "2", "kid", "Finish"])