function solve(input){
  let pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
  let totalSum = 0;

  console.log(`Bought furniture:`);

  for (const element of input) {
    let result = element.match(pattern);

    // if the item is valid
    if (result){
      let items = result.groups.name; //taking the name of the item
      let price = +result.groups.price; //taking the price of the item as a number if possible to be converted
      let quantity = +result.groups.quantity; //taking the quantity of the item

      totalSum += price * quantity; // calculate the total price
      console.log(items); //log the name of each item
    }
  }

  console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}
solve(
['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);

//">>{furniture name}<<{price}!{quantity}"

// my regex: />>+[A-Z][a-z]+<<([0-9]*[.])?[0-9]+!\d+/g