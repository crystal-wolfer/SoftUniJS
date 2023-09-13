function solve(input){
  let sumNoTax = 0;
  let taxPerItem = 0;
  let sumWithTax = 0;
  let sumTax = 0;
  

  let i=0;
  let iterator = input[i];
  while (!isNaN(iterator)){
    let curNum = Number(iterator);

    if (curNum >= 0 || isNaN(curNum)){
      taxPerItem = curNum*0.2;
      sumWithTax += curNum + taxPerItem;
      sumNoTax += curNum;
      sumTax += taxPerItem;
    } else {
      console.log(`Invalid price!`);
    }

    i++;
    iterator = Number(input[i]);
    
  }

  if(input[0] === 'special' || input[0] === 'regular' || sumWithTax === 0){
    console.log(`Invalid order!`);
    return;
  }

  let lastItem = input.pop();
  if(lastItem === 'special'){
    sumWithTax = sumWithTax - (sumWithTax*0.1);
  }

  
  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${sumNoTax.toFixed(2)}$`);
  console.log(`Taxes: ${sumTax.toFixed(2)}$`);
  console.log(`-----------`);
  console.log(`Total price: ${sumWithTax.toFixed(2)}$`);
  
}
solve(['regular']);
//The taxes are 20% of each part's price you receive.
//If the customer is special, he has a 10% discount on the total price with taxes.
//If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
//If the total price is equal to zero, you should print "Invalid order!" on the console.

// time to solve: 35min