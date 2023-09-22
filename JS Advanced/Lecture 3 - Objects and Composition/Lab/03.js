function cityTaxes(name, population, treasury){
  let objRecord = {
    name,
    population,
    treasury,
    taxRate: 10,

    //Listing the methods as separate functions
    collectTaxes(){
      this.treasury += (this.population*this.taxRate);
    },

    applyGrowth(percentage){
      this.population += this.population * percentage/100
    },

    applyRecession(percentage){
      this.treasury -= this.treasury * percentage/100
    }
  }

  return objRecord;

}
const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


// this. gives access to the objec through which the function is called (the function must be inside the object)