function storeCatalogue(array){
  let result = [];
  
  // pushing all products into the array as objects
  array.forEach(element => {
    let el = {};
    let [product, price] = element.split(' : ');
    
    if (!result[el]){
      el.product = product;
      el.price = Number(price);
      result.push(el);
    }     
  });

  // ordering the array alphabetically
  let sorted = result.sort((a, b) => a.product.toLowerCase().localeCompare(b.product.toLowerCase()))

  let print = [];
  // extracting the first letter and each element
  sorted.forEach(element => {
    let firstLetter = element.product.charAt(0);

    if(!print.includes(firstLetter)){
      print.push(firstLetter);
    };

    print.push(element);
  });
  
  // printing the final results
  print.forEach(element => {
    if (typeof element === 'string'){
      console.log(element);
    } else {
      console.log(`   ${element.product}: ${element.price}`);
    }
  });

}
storeCatalogue(
  ['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);