const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { findNewApartment } = require("./findApp"); // imports the function I want to test


//test Cases
describe('findNewApartment', function () {
  describe('isGoodLocation (city, nearPublicTransportation) - str, bool', function () {
    it('invalid input', function () {
      assert.throws(function() { findNewApartment.isGoodLocation("string",["ds"]) }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isGoodLocation(["sdad"], "dfds") }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isGoodLocation("sdad", 85) }, Error, /Invalid input!/);
    });

    it('should return message if city !== "Sofia", "Plovdiv" or "Varna"', function () {
      assert.equal(findNewApartment.isGoodLocation("Burgas", true), "This location is not suitable for you.");
    });

    it('should return message if nearPublicTransportation = false"', function () {
      assert.equal(findNewApartment.isGoodLocation("Varna", false), "There is no public transport in area.");
    });

    it('should return valid message with valid input', function () {
      assert.equal(findNewApartment.isGoodLocation("Varna", true), "You can go on home tour!");
      assert.equal(findNewApartment.isGoodLocation("Sofia", true), "You can go on home tour!");
      assert.equal(findNewApartment.isGoodLocation("Plovdiv", true), "You can go on home tour!");
    });
  });

  describe('isLargeEnough (apartments, minimalSquareMeters) - arr, num', function () {
    it('invalid input', function () {
      assert.throws(function() { findNewApartment.isLargeEnough([],10) }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isLargeEnough("äpp",10) }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isLargeEnough(["äpp"],"10") }, Error, /Invalid input!/);
    });

    it('should return valid result joined by ,', function () {
      assert.equal(findNewApartment.isLargeEnough([20,40,60], 25), "40, 60");
      assert.equal(findNewApartment.isLargeEnough([20,40,60,25], 25), "40, 60, 25");
    });
  });

  describe('isItAffordable (price, budget) - num,num', function () {
    it('invalid input', function () {
      assert.throws(function() { findNewApartment.isItAffordable([],10) }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isItAffordable("äpp",10) }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isItAffordable(["äpp"],"10") }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isItAffordable(5,"10") }, Error, /Invalid input!/);
      assert.throws(function() { findNewApartment.isItAffordable(-5,0) }, Error, /Invalid input!/);
    });
    
    it('should return message when result < 0 ', function () {
      assert.equal(findNewApartment.isItAffordable(35, 25), "You don't have enough money for this house!");
    });

    it('should return message when result > 0 ', function () {
      assert.equal(findNewApartment.isItAffordable(35, 35), "You can afford this home!");
      assert.equal(findNewApartment.isItAffordable(35, 55), "You can afford this home!");
    });
  });
});

//25min