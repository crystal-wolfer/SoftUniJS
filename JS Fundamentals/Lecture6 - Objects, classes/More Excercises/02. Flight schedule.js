function solve(inputArray) {
  let arrayOfFlights = inputArray[0];
  let arrayOfStatuses = inputArray[1];
  let statusCheck = inputArray[2];

  let results = [];
 
  // Pushing all the initial flights to the array
  for (const elem of arrayOfFlights) {
    let [number, destination] = elem.split(' ');
    let flight = {
      number,
      destination,
    };
    results.push(flight);
  }

   // Changing the statuses of the existing flights
   for (const elem of arrayOfStatuses) {
    let [number, status] = elem.split(' ');
    results.forEach(flight => {
      if (flight.number === number) {
        flight.status = status;
      }
    });
  }


  // Prints all the flights, that its statuses were not changed
  if (statusCheck[0] === 'Ready to fly') {
    results.forEach(flight => {
      if (!flight.status) {
        flight.status = 'Ready to fly';
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
      }
    });
  } else {
    // Prints all the flights, that its statuses were changed
    results.forEach(flight => {
      if (flight.status) {
        console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
      }
    });
  }

}

solve(
  [["WN269 Delaware","FL2269 Oregon","WN498 Las vegas","WN3145 Ohio","WN612 Alabama","WN4010 New York","WN1173 California","DL2120 Texas","KL5744 Illinois","WN678 Pennsylvania"],
  ["DL2120 Cancelled","WN612 Cancelled","WN1173 Cancelled","SK330 Cancelled"],
  ["Ready to fly"]]

);