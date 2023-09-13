function solve(data) {
  let products = {};

  for (const element of data) {
    // splitting the string by space and taking the key and value
    let [key, value] = element.split(' ');
    value = Number(value);
    
    // checking if the object products has the current product, if yes then the current value is summed with the old value, otherwise the current value is added
    if (products.hasOwnProperty(key)) {
      products[key] = products[key] + value;
    }else {
      products[key] = value;
    }
  }

  // printing each product
  for (const product in products) {
    console.log(`${product} -> ${products[product]}`);
  }
}
solve(
  ['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);

// Second solution using Map();

function solve(data) {
  let map = new Map();

  for (const element of data) {
    let [key, value] = element.split(' ');
    value = Number(value);

    if (!map.has(key)) {
      map.set(key, +value);
    }else {
      let curValue = map.get(key);
      let newValue = curValue += value;
      map.set(key, newValue);
    }
  }

  for (const product of map) {
    console.log(`${product[0]} -> ${product[1]}`);
  }
}
solve(
  ['apple 50',
'apple 61',
'coffee 115',
'coffee 40']
);