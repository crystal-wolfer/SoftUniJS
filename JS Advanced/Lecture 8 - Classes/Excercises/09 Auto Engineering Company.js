function autoCompany(inputArray) {
  let carsReg = new Map();

  // lopping through the input array
  inputArray.forEach(element => {
    let [brand, model, quantity] = element.split(' | ');
    quantity = Number(quantity);

    // check if the brand is already in the carsReg if not create a newReg entry
    if (!carsReg.has(brand)){
      carsReg.set(brand, {});
    }
    // check if the model is already in the carsReg brand if not add new property with value 0
    if(!carsReg.get(brand)[model]){
      carsReg.get(brand)[model] = 0;
    }

    //if the model is already in the carsReg just add the new quantity
    carsReg.get(brand)[model] += quantity;

  });

  for (const [key, value] of carsReg) {
    let curBrand = '';

    //check if the brand is already iterated if not print the name and set the value to the current one
    if(curBrand !== key){
      console.log(`${key}`);
      curBrand = key;
    }

    //else start printing the models and quantities from the values object
    for (const model in value) {
      console.log(`###${model} -> ${value[model]}`);
    }
  }

}

autoCompany(
  ['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)