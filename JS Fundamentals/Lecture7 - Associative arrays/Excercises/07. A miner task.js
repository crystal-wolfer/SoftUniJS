function solve(input){
  let result = {};
  // pushing each resource as a property of result and adding array of values with all quantities
  for (let i = 0; i < input.length; i++) {
    let quantity = 0;  
    let resource = '';
    if (i % 2 === 0) {
      resource = input[i];
      quantity = Number(input[i + 1]);

      if (!result.hasOwnProperty(resource)){
        result[resource] = [];
      } 
      
      if (!result.hasOwnProperty(quantity)){
        result[resource].push(quantity);
        }
    }
  }
  
  // turning the result into an array so I can loop through it and take the resource name
  for (const resource  of Object.entries(result)){
    let name = resource[0];
    let valuesArray = resource[1];
    let sum = 0;
    // looping through the array with all values for each resource and summing them
      for (const value of valuesArray) {
        sum += value;
      }
    
    // printing the respective resource and the sum of the quantities
    console.log(`${name} -> ${sum}`);
  }
  
  
}
solve(
[
  'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]  
);