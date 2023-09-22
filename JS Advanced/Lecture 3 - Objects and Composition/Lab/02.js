function townPopulation(array){
  let result = {};

  // loop trough each element of the array
  array.forEach(element => {
    let [town, population] = element.split(' <-> ');
    population = Number(population);

    // if there is no TownName key in the object then add a key-value pair TownName: populationNumber
    if (!result[town]){
      result[town] = {
        population
      };
    // if there is record of that town then add the current population number to the existing population record
    }else {
      result[town].population += population
    }
  });

  // looping through the object and printing each key-value pair
    for (const town in result) {
      console.log(`${town} : ${result[town].population}`);
    }

}
townPopulation(
  ['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);