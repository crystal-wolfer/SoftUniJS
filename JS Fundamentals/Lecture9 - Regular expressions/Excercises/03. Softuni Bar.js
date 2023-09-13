function solve(input){
  let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*\<(?<product>\w+)\>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;

  let totalSum = 0;
  let i=0;
  let curInput = input[i]

  while(curInput !== 'end of shift'){
    let match = [...curInput.matchAll(pattern)]; // destructuring the input and matching each element to the pattern which returns array of arrays

    for (const el of match) {
      let productPrice = Number(el.groups.quantity) * Number(el.groups.price);
      totalSum += productPrice;
      console.log(`${el.groups.name}: ${el.groups.product} - ${productPrice.toFixed(2)}`);
    }

    i++;
    curInput = input[i];
  }

  console.log(`Total income: ${totalSum.toFixed(2)}`);
}
solve(
['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);
