const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { chooseYourCar } = require("./chooseYourCar"); // imports the function I want to test


//test Cases
describe('chooseYourCar test cases', function () {
  describe('choosingType (type, color, year) method test', function () {
    it('should throw error when year < 1900 or year > 2022', function () {
      assert.throws(function() { chooseYourCar.choosingType('type', 'red', 1895) }, Error, /Invalid Year!/);
      assert.throws(function() { chooseYourCar.choosingType('type', 'red', 2025) }, Error, /Invalid Year!/);
    });

    it('should throw error when type is not Sedan', function () {
      assert.throws(function() { chooseYourCar.choosingType('Combi', 'red', 2020) }, Error, /This type of car is not what you are looking for./);
    });

    it('should meet requirements when year >= 2010', function () {
      assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2020), 'This red Sedan meets the requirements, that you have.');
      assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), 'This red Sedan meets the requirements, that you have.');
    });

    
    it('should not meet requirements when year < 2010', function () {
      assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2000), 'This Sedan is too old for you, especially with that red color.');
    });
  });

  describe('brandName (brands, brandIndex) method test', function () {
    it('should return valid when given valid input', function () {
      assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), 'BMW, Peugeot');
    });

    it('should return error when given invalid input', function () {
      assert.throws(function() { chooseYourCar.brandName({brand: 'BMW'}, 0) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.brandName('BMW', 0) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.brandName(true, 0) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '1') }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3) }, Error, /Invalid Information!/);
    });
  });

  describe('CarFuelConsumption (distanceInKilometers, consumptedFuelInLitres) method test', function () {
    it('should return efficient car if consumption <= 7 l/km', function () {
      assert.equal(chooseYourCar.carFuelConsumption(70, 4.9), 'The car is efficient enough, it burns 7.00 liters/100 km.');
      assert.equal(chooseYourCar.carFuelConsumption(70, 4), 'The car is efficient enough, it burns 5.71 liters/100 km.');
    });

    it('should return car burns too much if consumption > 7 l/km', function () {
      assert.equal(chooseYourCar.carFuelConsumption(70, 7), 'The car burns too much fuel - 10.00 liters!');
      assert.equal(chooseYourCar.carFuelConsumption(70, 6), 'The car burns too much fuel - 8.57 liters!');
    });

    it('should throw error if inout is not numbers', function () {
      assert.throws(function() { chooseYourCar.carFuelConsumption('2', 3) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(2, '3') }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(2, '3') }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption([2], '3') }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(2, [3]) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption([2], [3]) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption({n:2}, '3') }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(2, {m:3}) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption({n:2}, {n:3}) }, Error, /Invalid Information!/);
    });

    it('should throw error if input is negative numbers', function () {
      assert.throws(function() { chooseYourCar.carFuelConsumption(-5, -8) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(-5, 8) }, Error, /Invalid Information!/);
      assert.throws(function() { chooseYourCar.carFuelConsumption(5, -8) }, Error, /Invalid Information!/);
    });
  });
});

//32min