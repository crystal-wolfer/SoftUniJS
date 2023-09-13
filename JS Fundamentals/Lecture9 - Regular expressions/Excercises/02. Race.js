function solve(input){
  let participantsList = input.shift().split(', ');
  let participantsObject = {};

  for (const name of participantsList) {
    participantsObject[name] = 0; // filling in the object with key the names of the participants and value set 0 for the distance which will be calculated later
  }

  let curElement = input.shift();
  let lettersPattern = /[A-Za-z]/g; // regex to take only letters
  let digitsPattern = /\d/g; // regex to take only digits from 0-9

  while (curElement !== 'end of race'){
    let curName = curElement.match(lettersPattern).join(''); // returns the name as a string
    let distance = curElement.match(digitsPattern); // returns all numbers into an array

    let curDistance = 0; // setting new variable for each racer
    distance.forEach(num => {
      curDistance += Number(num); // returns the sum of all numbers from the distance array and adds them to the curDistance variable as a number
    }); 

    if (participantsObject.hasOwnProperty(curName)){
      participantsObject[curName] += curDistance;
    }
    
    curElement = input.shift();
  }

  let sortedParticipants = Object.entries(participantsObject).sort((a,b) => b[1] - a[1]); // returs array of arrays

  console.log(`1st place: ${sortedParticipants[0][0]}`); //[0][0] the first element of the first array
  console.log(`2nd place: ${sortedParticipants[1][0]}`); 
  console.log(`3rd place: ${sortedParticipants[2][0]}`);
  
}
solve(
['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']

);
