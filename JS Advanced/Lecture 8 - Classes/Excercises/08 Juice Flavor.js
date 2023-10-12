function juiceFlavors(juiceConsistencyArray) {
    
  const originalMap = new Map();
  const output = new Map();

  juiceConsistencyArray.forEach(juice => {

      const [fruit, quantity] = juice.split(' => ');

      // create entry for each fruit and set quantity to 0 if it doesn't exist yet
      if (!originalMap.has(fruit)) {
          
          originalMap.set(fruit, 0);

      }

      //if the fruit exsits add the quantity to the existing entry
      originalMap.set(fruit, originalMap.get(fruit) + Number(quantity));

      // loop through the existing entry in the OriginalMap to get the number of bottles
      while (originalMap.get(fruit) >= 1000) {
          // get the current fruit and subtract 1000 from the quantity
          originalMap.set(fruit, originalMap.get(fruit) - 1000);

          // create a new entry in the output Map with and add 1 to it
          output.set(fruit, (output.get(fruit) || 0) + 1);

      }

  });

  // loop through the output Map and print the key-value pairs of all fruits and num of bottles
  for (const [key, value] of output) {
      
      console.log(`${key} => ${value}`);

  }

}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);
console.log('========================');
juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);