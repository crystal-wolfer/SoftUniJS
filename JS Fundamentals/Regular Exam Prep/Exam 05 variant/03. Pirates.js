function solve(input){
  let targets = {};
  let curTarget = input.shift();

  createTargets();
  manipulateTargets();


  // Object creation - storing the targets in an object
  function createTargets(){
    while (curTarget !== 'Sail'){
      //extracting the info
      let [city, population, gold] = curTarget.split('||');
      population = Number(population);
      gold = Number(gold);

      if(!targets[city]){
        targets[city] = {
          population, 
          gold
        }
      } else {
        targets[city].population += population;
        targets[city].gold += gold;
      }

      curTarget = input.shift();
    }
  }

  // Executing the events Plunder and prosper
  function manipulateTargets(){
    let line = input.shift();

    while (line !== 'End'){
      let destructuring = line.split('=>'); // splitting the line to take the command
      let command = destructuring.shift(); // taking the command

      // Case Plunder
      if (command  === 'Plunder'){
        let [town, people, gold] = destructuring;
        people = Number(people);
        gold = Number(gold);

        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        //updating the values for the plundered town
        targets[town].population -= people;
        targets[town].gold -= gold;

        // checking if the population or the gold reached 0
        if(targets[town].population <= 0 || targets[town].gold <= 0){
          console.log(`${town} has been wiped off the map!`);
          delete targets[town];
        }
      }

      // Case Prosper
      if (command === 'Prosper'){
        let [town, gold] = destructuring;
        gold = Number(gold);

        // checking if the gold number is negative
        if (gold < 0){
          console.log(`Gold added cannot be a negative number!`);
        } else {
          targets[town].gold += gold;
          console.log(`${gold} gold added to the city treasury. ${town} now has ${targets[town].gold} gold.`);
        }

      }

      line = input.shift();
    }
  }
   
  let count = Object.keys(targets).length
  
  if (count === 0){
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
  } else {
    // iterating and printing final info
    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    for (const city in targets) {
      console.log(`${city} -> Population: ${targets[city].population} citizens, Gold: ${targets[city].gold} kg`);
    }
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
console.log(`----------------------------`);
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
