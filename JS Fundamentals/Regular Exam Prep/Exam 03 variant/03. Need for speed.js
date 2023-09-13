function solve(input){
  let n = Number(input.shift());
  let cars = {};
  let curCar = input.shift();
  
  createCars();
  manipulateCars();

  // Object creation - storing the cars in an object
  function createCars(){
    while (n > 0){
      // extracting the info
      let [car, mileage, fuel] = curCar.split('|');
      // making sure we store numbers
      mileage = Number(mileage);
      fuel = Number(fuel);

      if (!cars[car]){
        cars[car] = {
          mileage,
          fuel          
        };
      }

      curCar = input.shift();
      n--;
    }
  }


  // Executing the Drive, Refuel and Revert operations
  function manipulateCars() {
    let line = curCar;

    while (line !== 'Stop'){
      let destructuring = line.split(' : '); // splitting the line input to take the command
      let command = destructuring.shift(); // taking the command

      // Case Drive
      if (command === 'Drive'){
        let [carName, distance, fuel] = destructuring
        distance = Number(distance);
        fuel = Number(fuel);

        // checkin if the car has enough fuel
        if(cars[carName].fuel < fuel){
          console.log(`Not enough fuel to make that ride`);
        } else {
          cars[carName].fuel -= fuel;
          cars[carName].mileage += distance;
          console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }

        // checking if mileage reached 100k if yes, deleting the car 
        if(cars[carName].mileage >= 100000){
          console.log(`Time to sell the ${carName}!`);
          delete cars[carName];
        }
      }

      // Case Refuel
      if (command === 'Refuel'){
        let [carName, fuel] = destructuring
        fuel = Number(fuel);
        let newFuel = fuel + cars[carName].fuel; // getting the new fuel quantity

        // checking if the quantity is more than the max 75l
        if (newFuel > 75){
          let fuelTaken = fuel - (newFuel - 75);
          cars[carName].fuel = 75;
          console.log(`${carName} refueled with ${fuelTaken} liters`);
        } else {
          cars[carName].fuel = newFuel;
          console.log(`${carName} refueled with ${fuel} liters`);
        }
      }

      // Case Revert
      if (command === 'Revert') {
        let [carName, kilometers] = destructuring
        kilometers = Number(kilometers);
        let newMileage = cars[carName].mileage - kilometers;

        // checking if newMileage is less than 10k km
        if(newMileage < 10000){
          cars[carName].mileage = 10000;
        } else {
          cars[carName].mileage = newMileage;
          console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
        }
      }

      line = input.shift();
    }
  }

  // iterating and printing the final info
  for (let car in cars) {
    console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`);
  }

}
solve(
  [
  '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'

  ]  
  
);

//53min