function fruits(type, weight, price){
  let money = (weight/1000) * price;
  let weightKg = weight / 1000;
  console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`);
}
fruits('orange', 2500, 1.80);