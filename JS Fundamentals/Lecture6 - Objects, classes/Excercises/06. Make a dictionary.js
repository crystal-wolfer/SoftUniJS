function solve(input) {

  // creating emty object
  let results = {};
  
  // looping through all JSON objects from the input and adding them to the results object
  input.forEach(element => {
  let obj = JSON.parse(element);
  results = Object.assign(results, obj)
  });

  // taking the terms/keys from the results object and sorting by ascending alphabetical order
  let sortedKeys = Object.keys(results);
  sortedKeys.sort((a, b) => a.localeCompare(b))

  // looping through the array of the sorted terms and picking the definitions for each term from the results object, then printing
  for (const term of sortedKeys) {
    let definition = results[term];
    console.log(`Term: ${term} => Definition: ${definition}`);
  }
  

}
solve(
  [
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);