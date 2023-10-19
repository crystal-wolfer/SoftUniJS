const expect = require('chai').expect;  // adds chai expect method
const assert = require('chai').assert; // adds chai assert method

const { weddingDay } = require("./weddingDay"); // imports the function I want to test


//test Cases
describe('weddingDay', function () {
  describe('pickVenue (capacity, pricePerGuest, location) - num,num,str', function () {
    it('should throw error when Invalid Inout or empty str', function () {
      assert.throws(function() { weddingDay.pickVenue(25, {n:true}, "") }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.pickVenue("25", 41, "sdrtr") }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.pickVenue(25, 41, ["sda"]) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.pickVenue(25, 41, "") }, Error, /Invalid Information!/);
    });

    it('should throw error when lovation is not Varna', function () {
      assert.throws(function() { weddingDay.pickVenue(25, 2.5, "Sofia") }, Error, /The location of this venue is not in the correct area!/);
      assert.throws(function() { weddingDay.pickVenue(25, 2.5, "Burgas") }, Error, /The location of this venue is not in the correct area!/);
    });

    it('should return message when venue doesnt pass criteria', function () {
      assert.equal(weddingDay.pickVenue(149, 121, "Varna"),"This venue does not meet your requirements!");
    });

    it('should return valid with valid input', function () {
      assert.equal(weddingDay.pickVenue(150, 120, "Varna"),"This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
      assert.equal(weddingDay.pickVenue(180, 90, "Varna"),"This venue meets the requirements, with capacity of 180 guests and 90$ cover.");
    });
  });
 

  describe('otherSpendings (weddingDecoration, photography, discount) - arr,arr,bool', function () {
    it('should throw error for invalid input', function () {
      assert.throws(function() { weddingDay.otherSpendings(25, [{n:true}], false) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.otherSpendings("25", 41, "sdrtr") }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.otherSpendings(25, 41, ["sda"]) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.otherSpendings([25], 41, "") }, Error, /Invalid Information!/);
    });

    it('should return valid with valid input', function () {
      assert.equal(weddingDay.otherSpendings(['flowers'],['video'], true),"You spend 1530$ for wedding decoration and photography with 15% discount!");
      assert.equal(weddingDay.otherSpendings(['Fabric drapes and curtains'],['pictures'], false),"You spend 1100$ for wedding decoration and photography!");
    });
  });  
  
  
  describe('tableDistribution (guests, tables) - num,num', function () {
    it('should throw error for invalid input', function () {
      assert.throws(function() { weddingDay.tableDistribution(25, [{n:true}]) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.tableDistribution("25", 41,) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.tableDistribution(-25, 41) }, Error, /Invalid Information!/);
      assert.throws(function() { weddingDay.tableDistribution([25], 41,) }, Error, /Invalid Information!/);
    });

    it('should return valid with valid input', function () {
      assert.equal(weddingDay.tableDistribution(15,5),"There is only 3 people on every table, you can join some tables.");
      assert.equal(weddingDay.tableDistribution(15,2),"You have 2 tables with 8 guests on table.");

    });

  });
});