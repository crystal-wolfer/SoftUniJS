function lowerPrice(array){
  let result = {};

  array.forEach(element => {
    let [town, product, price] = element.split(' | ');
    price = Number(price);

    // checking if product is already in object or if the price of the product is higher than the price of the current product
    if (!result[product] || result[product].productPrice > price){
      result[product] = {
        productName: product,
        productPrice: price,
        townName: town
      }
    }
  });

  for (const product in result) {
   console.log(`${product} -> ${result[product].productPrice} (${result[product].townName})`);
  }
  
}
lowerPrice(
  ['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);