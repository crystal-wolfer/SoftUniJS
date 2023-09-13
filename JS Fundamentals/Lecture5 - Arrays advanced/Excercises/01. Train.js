function solve(input){

  // take the first array element and turn it into an array
  let passengersInWagon = input
  .shift()
  .split(' ')
  .map(Number); 

  let maxCapacity = Number(input.shift());
  let inputArrayLength = input.length;

  for(let i = 0; i < inputArrayLength; i++){
    //define 2 inputs with command and number which are a split of the string element
    let [command, number] = (input[i]).split(' ');
    number = Number(number);

    // check if we received the command "Add" if true add new element at the end of the array with value "number"
    if (command === "Add") {
      passengersInWagon.push(number);
    } else {
      // if we received only a number then we check if its possible to add the sum of this number with the current num of passengers
      for(let j = 0; j < passengersInWagon.length; j++){
        command = Number(command);
        let curWagonPassengers = Number(passengersInWagon[j]);

        // if the sum of the given number and curPassengers <= 75 we replace the previous value with the sum, else we move to the next cycle iteration
        if (command + curWagonPassengers <= maxCapacity){
          passengersInWagon.splice(j,1,command+curWagonPassengers);
          break;
        }
      }
    }

  }
  
  console.log(passengersInWagon.join(' '));

}
solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);