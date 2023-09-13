function solve(input){
  let target = {};
  let currentTarget = input.shift();

  createTargets();
  manipulateTargets();

  // Object creation - storing all the cities with the population and gold
  function createTargets(){
    while (currentTarget !== 'Sail'){
      //extracting the info
      let [city, population, gold] = currentTarget.split('||')
      population = Number(population);
      gold = Number(gold);

      if (!target[city]){
        target[city] = {
          population,
          gold
        }
      } else {
        target[city].population += population;
        target[city].gold += gold;
      }
      currentTarget = input.shift();
    }
  }
  
  // Plunder, Prosper commands manipulation
  function manipulateTargets(){
    currentTarget = input.shift(); // removing the 'Sail' command
    let line = currentTarget;

    while(line !== 'End'){
      let [command, token1, token2, token3] = line.split('=>'); //splitting the line

      //IF command is Plunder
      if (command === 'Plunder'){
        let town = token1
        let people = Number(token2);
        let gold = Number(token3);

        // checking if the name of the town exists and then decreasing the number of population and gold
        if (target[town]){
          target[town].population -= people;
          target[town].gold -= gold;
        }

        // Printing the command for every attack
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        // checking if the population of the town or the gold === 0 and then removing it from the Object
        if (target[town].population === 0 || target[town].gold === 0){
          console.log(`${town} has been wiped off the map!`);
          delete target[town];
        } 
      }

      //IF command is Prosper
      if (command === 'Prosper'){
        let town = token1;
        let gold = Number(token2);

        // checking if the name of the town exists and then increasing the gold
        if (target[town] && gold > 0){
          target[town].gold += gold;
          console.log(`${gold} gold added to the city treasury. ${town} now has ${target[town].gold} gold.`);
        } else{
          console.log(`Gold added cannot be a negative number!`);
        }
      }

      line = input.shift();
    }
  }

  // iterate and print info
  let count = Object.keys(target).length // getting the number of key/value pairs in the target Object

  if (count > 0){
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);

    for (let town in target) {
      console.log(`${town} -> Population: ${target[town].population} citizens, Gold: ${target[town].gold} kg`);
    }
  } else{
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  }
}
solve(
  (["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
);

console.log(`----Output-----`);
console.log(`Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. 
Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg
Havana -> Population: 410000 citizens, Gold: 1100 kg`);
console.log(`--------------------------`);
solve(
  (["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])
);

console.log(`----Output-----`);
console.log(`Gold added cannot be a negative number!
Nassau plundered! 750 gold stolen, 94000 citizens killed.
Nassau plundered! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map!
Campeche plundered! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map!
Ahoy, Captain! There are 2 wealthy settlements to go to:
San Juan -> Population: 930000 citizens, Gold: 1250 kg
Port Royal -> Population: 420000 citizens, Gold: 3000 kg`);