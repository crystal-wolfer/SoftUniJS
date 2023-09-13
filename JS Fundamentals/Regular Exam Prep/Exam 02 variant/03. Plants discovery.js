function solve(input){
  let n = Number(input.shift());
  let plants = {};
  let currentPlant = input.shift();
  let count = 0;
  createPlants();
  manipulatePlants();

  // Object creation - storing the plants into an object
  function createPlants(){
    while(n > 0){
      //extracting the info
      let [plantName, rarity] = currentPlant.split('<->');

      if (!plants[plantName]){
        plants[plantName] = {
          rarity,
          totalScore: 0,
          counter: 0
        };
      }

      currentPlant = input.shift();
      n--;
    }
  }

  // Rate, Update or Reset object properties
  function manipulatePlants(){
    let line = currentPlant;

    while(line !== 'Exhibition'){
      let destructuring = line.split(': '); // first split to take the command
      let command = destructuring.shift(); // taking the command

      // IF command is Rate
      if(command === 'Rate'){
        let [name, rating] = destructuring[0].split(' - '); 
        rating = Number(rating);

        // checking if plant exist => add the rating
        if(plants[name]){
          plants[name].counter ++;
          plants[name].totalScore += rating;
        } else {
          console.log(`error`);
        }
      } 

      // IF command is Update
      if (command === 'Update'){
        let [name, newRarity] = destructuring[0].split(' - ');
        // checkign if plant exists => updating
        if(plants[name]){
          plants[name].rarity = newRarity;
        } else {
          console.log(`error`);
        }
      }

      // IF command is Reset
      else if (command === 'Reset'){
        let name = destructuring[0];

        //check if plant exists => reseting all ratings and counter
        if (plants[name]){
          plants[name].counter = 0;
          plants[name].totalScore = 0;
        } else {
          console.log(`error`);
        }
      }

      line = input.shift();
    }
  }

  //iterate and print info
  console.log(`Plants for the exhibition:`);
  for (let plant in plants) {
    let avarage = (plants[plant].totalScore)/(plants[plant].counter)

    if (!isNaN(avarage)){
      console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${avarage.toFixed(2)}`);
    } else {
      console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: 0.00`);
    }
  }

}
solve(
  (["3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"])
);

console.log(`-------------`);

solve(
  (["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Rate: Woodii - 10",
"Exhibition"])
);

//60min
