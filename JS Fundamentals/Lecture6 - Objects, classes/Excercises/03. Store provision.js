function solve(array1, array2) {
  let storage = {};

  for (let i = 0; i < array1.length; i+=2){
    let product = array1[i];
    let quantity = Number(array1[i+1]);
    // assigning key: value => product: quantity
    storage[product] = quantity;
  }
  
  for (let i = 0; i < array2.length; i+=2){
    let product = array2[i];
    
    // checking if the object has the given key already (same as includes in arrays)
    if (!storage.hasOwnProperty(product)){
      storage[product] = 0;
    }
    //adding the quantity to the existing quantity
    storage[product] += Number(array2[i+1]);
  }

  for (const key in storage) {
    console.log(`${key} -> ${storage[key]}`);
  }
}
solve(
  ['Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30']
);